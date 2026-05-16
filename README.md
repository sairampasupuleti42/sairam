# Sairam Pasupuleti — Digital Portfolio

A personal portfolio website built with React, styled as a chat/messaging UI. Visitors can browse sections such as About, Experience, Education, Skills, Works, and Contact, and can also chat with an AI assistant powered by Firebase Cloud Functions and LangChain.js.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 17, React Router v5, Material UI v4 |
| Realtime / Auth | Firebase (Firestore, Authentication) |
| Backend | Firebase Cloud Functions (Node 20) |
| AI Assistant | LangChain.js + OpenAI via Firebase Functions |
| Hosting | Firebase Hosting |

## Portfolio Sections

| Route | Description |
|-------|-------------|
| `/` | Landing / intro screen |
| `/about-me` | Career objective, profile summary, resume download, strengths & interests |
| `/experience` | Work history |
| `/education` | Academic background |
| `/skills` | Technical skills |
| `/works` | Projects & works |
| `/contact` | Contact form with Google sign-in |
| `/my-assistant` | AI chat assistant grounded in portfolio data |

## Getting Started

### Prerequisites

- Node.js 18+ (Node 20 recommended for Cloud Functions)
- [Firebase CLI](https://firebase.google.com/docs/cli): `npm install -g firebase-tools`

### Install dependencies

```bash
# Frontend
npm install --legacy-peer-deps
# The project mixes React 17 with Material UI v4, so the legacy peer-deps
# flag is required with modern npm.

# Cloud Functions
cd functions && npm install
```

### Run locally

```bash
npm start
```

Opens [http://localhost:3000](http://localhost:3000) in the browser. The page hot-reloads on every save.

### Run tests

```bash
npm test
```

### Build for production

```bash
npm run build
```

Produces an optimised production bundle in the `build/` folder, ready for Firebase Hosting.

## My Assistant Setup

The **My Assistant** page (`/my-assistant`) is backed by a Firebase Cloud Function (`askAssistant`) that uses LangChain.js to answer questions about the portfolio.

1. **Authenticate with Firebase**
   ```bash
   firebase login
   ```

2. **Set the OpenAI API key** as a Firebase secret:
   ```bash
   firebase functions:secrets:set OPENAI_API_KEY
   ```

3. *(Optional)* Override the Firebase web configuration at build time by providing `REACT_APP_FIREBASE_*` environment variables.

4. **Deploy functions and hosting**:
   ```bash
   firebase deploy
   ```
   Or deploy separately:
   ```bash
   firebase deploy --only functions
   firebase deploy --only hosting
   ```

## Project Structure

```
├── public/                  Static assets served by Create React App
├── src/
│   ├── App.js               Root component with routing
│   ├── firebase.js          Firebase app initialisation
│   ├── components/
│   │   ├── About/           About me section
│   │   ├── ChatHeader/      Top navigation bar for each section
│   │   ├── ChatRooms/       Sidebar with section links
│   │   ├── Contact/         Contact form
│   │   ├── Education/       Education section
│   │   ├── Experience/      Work experience section
│   │   ├── Footer/          Footer with sign-in action
│   │   ├── Intro/           Landing / intro screen
│   │   ├── MyAssistant/     AI chat assistant
│   │   ├── Skills/          Skills section
│   │   └── Works/           Projects section
│   └── assets/              Images and other static assets
├── functions/
│   └── src/
│       ├── index.js         Cloud Functions entry point
│       ├── assistantHandler.js  askAssistant function logic
│       └── sairamContext.js     Portfolio context fed to the LLM
├── firebase.json            Firebase Hosting & Functions config
└── package.json
```
