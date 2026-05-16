import React, { useEffect, useRef, useState } from "react";
import "./MyAssistant.css";
import "./../conversation-style.css";
import { functions } from "./../../firebase";

const quickPrompts = [
  "Tell me about Sairam's experience",
  "What are Sairam's strongest skills?",
  "What projects has Sairam built?",
  "How can I contact Sairam?",
];

const introMessage = {
  role: "assistant",
  text:
    "Hi, I’m Sairam’s AI assistant. Ask me about experience, skills, education, projects, or how to get in touch.",
  skipHistory: true,
};

export default function MyAssistant() {
  const [messages, setMessages] = useState([introMessage]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const askAssistant = functions.httpsCallable("askAssistant");

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [loading, messages]);

  async function handleSubmit(event) {
    event.preventDefault();

    const message = inputValue.trim();
    if (!message || loading) {
      return;
    }

    const userMessage = { role: "user", text: message };
    const history = messages
      .filter((item) => !item.skipHistory)
      .map((item) => ({ role: item.role, content: item.text }));

    setMessages((current) => [...current, userMessage]);
    setInputValue("");
    setLoading(true);

    try {
      const response = await askAssistant({
        message,
        history,
      });

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text:
            response?.data?.reply ||
            "I’m sorry, I couldn’t generate a response right now.",
        },
      ]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text:
            "My Assistant is temporarily unavailable. Please try again in a moment or use the Contact page.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handlePromptClick(prompt) {
    if (!loading) {
      setInputValue(prompt);
    }
  }

  return (
    <div className="myAssistant">
      <div className="myAssistant__suggestions">
        {quickPrompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            className="myAssistant__chip"
            onClick={() => handlePromptClick(prompt)}
            disabled={loading}
          >
            {prompt}
          </button>
        ))}
      </div>

      <div className="myAssistant__messages">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`conversation__style__container ${
              message.role === "user" ? "right" : "left"
            }`}
          >
            {message.role === "assistant" ? (
              <div className="msg__sender">My Assistant</div>
            ) : (
              ""
            )}
            <p>{message.text}</p>
          </div>
        ))}

        {loading ? (
          <div className="conversation__style__container left myAssistant__typing">
            <div className="msg__sender">My Assistant</div>
            <div className="myAssistant__dots">
              <span />
              <span />
              <span />
            </div>
          </div>
        ) : (
          ""
        )}

        <div ref={messagesEndRef} />
      </div>

      <form className="myAssistant__composer" onSubmit={handleSubmit}>
        <input
          className="myAssistant__input"
          type="text"
          placeholder="Ask about Sairam’s background, skills, or work..."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          disabled={loading}
        />
        <button
          className="myAssistant__send"
          type="submit"
          disabled={loading || !inputValue.trim()}
        >
          Send
        </button>
      </form>
    </div>
  );
}
