const { ChatPromptTemplate, MessagesPlaceholder } = require("@langchain/core/prompts");
const { HumanMessage, AIMessage } = require("@langchain/core/messages");
const { StringOutputParser } = require("@langchain/core/output_parsers");
const { ChatOpenAI } = require("@langchain/openai");
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const { defineSecret } = require("firebase-functions/params");
const { sairamContext } = require("./sairamContext");

const openAiApiKey = defineSecret("OPENAI_API_KEY");
// Keep prompts compact to control token usage and response latency for guest chats.
const MAX_MESSAGE_LENGTH = 700;
const MAX_HISTORY_ITEMS = 12;

const assistantPrompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    "You are My Assistant for Sairam Pasupuleti's portfolio website. Use the following knowledge base to answer guest questions.\n\n{context}",
  ],
  new MessagesPlaceholder("history"),
  ["human", "{input}"],
]);

exports.askAssistant = onCall(
  {
    secrets: [openAiApiKey],
    maxInstances: 10,
  },
  async (request) => {
    const message = sanitizeMessage(request.data?.message, MAX_MESSAGE_LENGTH);
    if (!message) {
      throw new HttpsError("invalid-argument", "A valid message is required.");
    }

    const apiKey = openAiApiKey.value();
    if (!apiKey) {
      throw new HttpsError(
        "failed-precondition",
        "OPENAI_API_KEY is not configured for this environment."
      );
    }

    const history = normalizeHistory(request.data?.history);

    try {
      const model = new ChatOpenAI({
        apiKey,
        model: "gpt-4o-mini",
        temperature: 0.2,
      });

      const chain = assistantPrompt.pipe(model).pipe(new StringOutputParser());
      const reply = await chain.invoke({
        context: sairamContext,
        history,
        input: message,
      });

      return {
        reply: reply.trim(),
      };
    } catch (error) {
      logger.error("askAssistant failed", error);
      throw new HttpsError(
        "internal",
        "My Assistant could not generate a response right now."
      );
    }
  }
);

function normalizeHistory(history) {
  if (!Array.isArray(history)) {
    return [];
  }

  return history.slice(-MAX_HISTORY_ITEMS).reduce((messages, item) => {
    const content = sanitizeMessage(item?.content, MAX_MESSAGE_LENGTH);
    if (!content) {
      return messages;
    }

    if (item.role === "assistant") {
      messages.push(new AIMessage(content));
      return messages;
    }

    messages.push(new HumanMessage(content));
    return messages;
  }, []);
}

function sanitizeMessage(value, maxLength) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().replace(/\s+/g, " ").slice(0, maxLength);
}
