# OmniPrompt: Technical Stack

This document outlines the core technologies, tools, and libraries used to build the OmniPrompt desktop application.

## Guiding Philosophy

The technology choices are guided by the following principles:

1.  **Leverage Web Technologies:** Build a native desktop application using the power and flexibility of web technologies.
2.  **Developer Experience:** Use modern tools that offer fast builds, hot reloading, and strong type-safety to accelerate development.
3.  **Modularity:** Choose libraries that allow us to build the complex UI in a clean, component-based way.

---

## Core Technologies

### 1. Runtime Environment: Node.js

Serves as the foundational JavaScript runtime for the entire stack, enabling the Electron framework and all our build tools.

### 2. Application Framework: Electron

This is the core framework that enables the project's central feature. It allows us to build a native desktop app that can render and control live web interfaces (`BrowserView`) without being restricted by the browser's Same-Origin Policy. This is essential for displaying the raw UIs of services like ChatGPT and Claude in a single, "chromeless" window.

### 3. UI Library: React

Manages the application's user interface and state. We use its component-based architecture to build all UI elements, including the main canvas, the universal chatbox, and the custom, draggable frames for each LLM module.

---

## Development & Build Tooling

### 1. Build Tool: Vite

Provides a next-generation build tool and development server. Its lightning-fast Hot Module Replacement (HMR) creates an extremely efficient development feedback loop, allowing for near-instant updates as we build the UI. The `electron-vite` plugin simplifies the complex configuration required to integrate a modern web framework with Electron.

### 2. Language: TypeScript

Adds static typing to JavaScript, which is invaluable for a project with complex interactions between Electron's main process and the React renderer. It helps us catch errors early, improves code quality, and makes the codebase easier to maintain and refactor.

### 3. Packager: Electron Builder

Handles the complex process of packaging and bundling the final application. It creates professional, distributable installers for different operating systems (e.g., `.dmg` for macOS, `.exe` for Windows), and manages code signing and auto-update capabilities.

---

## UI & User Experience Libraries

### 1. Styling: Tailwind CSS

A utility-first CSS framework used for rapidly styling the application's UI. It allows us to build the clean, minimalist aesthetic and the custom frames for the LLM modules directly within our JSX markup, avoiding the need for separate CSS files.

### 2. Interactivity: `react-draggable` & `react-resizable`

These specialized React components provide the core logic for the windowing functionality. They allow users to drag and resize the LLM modules within the canvas, saving us from writing complex manual logic to track mouse positions and component state.