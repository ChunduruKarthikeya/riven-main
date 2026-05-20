# Riven — AI Integrated Career Assistant

Riven is a premium, high-performance web application designed to act as an AI-powered career assistant. It combines intelligent chat interfaces, mock workspace tools, resource centers, and documentation to deliver an immersive and modern assistant experience.

## 🚀 Key Features

*   **Riven AI Chatbot**: A fully responsive, interactive AI assistant interface featuring message simulation (thinking states), customizable projects, drag-and-drop chat organization, and recent session history.
*   **Typing Tutor**: Built-in interactive learning section (`learn-typing`) for enhancing professional technical skills.
*   **Documentation Hub**: Structured changelog and guide pages under `/docs`.
*   **Interactive Modals & Context Menus**: Actions for renaming, pinning, sharing, archiving, or moving chats between projects.
*   **Modern Premium UI/UX**: Designed using glassmorphism, responsive sidebar layout, smooth Framer Motion transitions, custom custom-scrollbars, and Sonner toast notifications.

---

## 🛠️ Technology Stack

*   **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/) & [Lucide Icons](https://lucide.dev/)
*   **Notifications**: [Sonner](https://emilkowal.ski/ui/sonner)
*   **State & Reordering**: Custom React state structures & Framer Motion `Reorder` component

---

## ⚙️ Getting Started

### 1. Installation

First, clone the repository and install the dependencies:

```bash
npm install
```

### 2. Run the Development Server

Start the Next.js development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) (or the displayed port like [http://localhost:3001](http://localhost:3001) if port 3000 is occupied) in your browser to view the application.

---

## 📂 Project Structure

```text
riven/
├── app/                  # Next.js App Router pages and layouts
│   ├── docs/             # Changelog & guide pages
│   ├── learn-typing/     # Typing practice modules
│   ├── resources/        # Resource hub
│   ├── riven-ai/         # Riven AI chat workspace layout
│   ├── sign-in/          # Authentication pages
│   └── layout.tsx        # Global layout configuration
├── components/           # Reusable UI & custom components
│   ├── ui/               # Core design tokens & shadcn components
│   └── footer/           # Layout footer components
├── lib/                  # Helper utilities and hooks
└── public/               # Static assets and screenshots
```

For an interactive codebase visualizer, refer to [GitIngest](https://gitingest.com/ChunduruKarthikeya/riven-main/).

---

## 🌐 Deployment

The easiest way to deploy Riven is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

For details on self-hosting or custom next build deployments, refer to the [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying).
