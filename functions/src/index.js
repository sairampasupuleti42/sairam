const { initializeApp } = require("firebase-admin/app");
const { askAssistant } = require("./assistantHandler");

initializeApp();

exports.askAssistant = askAssistant;
