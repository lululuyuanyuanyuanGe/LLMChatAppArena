### **Project Requirements Document: OmniPrompt**

### 1. Project Overview

**1.1. Project Name:** OmniPrompt (working title)

**1.2. Vision:** To create a unified desktop application that allows users to interact with multiple Large Language Model (LLM) chat applications simultaneously through their native web interfaces.

**1.3. Problem Statement:** Power users of LLMs often query multiple models (ChatGPT, Claude, Gemini, etc.) to gain diverse perspectives. Manually copying prompts, switching between browser tabs, and comparing results is cumbersome and inefficient. Existing API-based aggregator tools sacrifice the rich, full-featured functionality of the native web UIs, such as advanced file parsing, multimodal inputs, and provider-specific prompt engineering.

**1.4. Solution:** OmniPrompt will be a desktop application that provides a single, customizable workspace. Within this workspace, users can load, arrange, and interact with the live web UIs of various LLM providers as independent modules. A universal input box will allow users to send a single prompt to all active LLM modules at once, streamlining the process of comparative analysis while preserving 100% of each platform's native functionality.

### 2. Target Audience

*   **AI Power Users & Researchers:** Individuals who regularly use multiple LLMs for complex queries and need to compare nuanced responses.
*   **Developers & Engineers:** Professionals who use LLMs for coding, debugging, and technical problem-solving.
*   **Writers & Content Creators:** Users who leverage LLMs for brainstorming, drafting, and refining content and want a variety of creative inputs.

### 3. Core Features & Functional Requirements

**3.1. Application Shell & Workspace**

*   **FR-1: Main Window:** The application shall consist of a single main window.
*   **FR-2: Frameless Design:** The main window shall be "frameless," containing no default operating system title bar, menus, or browser UI elements (e.g., tabs, address bar).
*   **FR-3: Canvas Workspace:** The primary area of the main window shall be a freeform "canvas" where users can place LLM modules.
*   **FR-4: LLM Module Palette:** The application must provide a static palette, sidebar, or menu containing icons for supported LLM services (e.g., ChatGPT, Claude, Gemini, Perplexity).

**3.2. LLM Module Management**

*   **FR-5: Drag-and-Drop Instantiation:** Users must be able to drag an LLM icon from the palette and drop it onto the canvas to create a new, active LLM module.
*   **FR-6: Raw Web Interface Rendering:** Each module **must** render the live, unmodified, and complete web interface of the selected service (e.g., loading `https://chat.openai.com/`).
    *   **FR-6.1:** The rendered view must be "chromeless," displaying only the web content itself, not any browser UI.
    *   **FR-6.2:** All native website functionality, including login, file uploads, and multimodal inputs, must be fully operational within the module.
*   **FR-7: Independent Module Manipulation:**
    *   **FR-7.1 (Movement):** Users must be able to click and drag the title bar of any LLM module to reposition it anywhere on the canvas.
    *   **FR-7.2 (Resizing):** Users must be able to resize any LLM module by dragging its corners or edges.
*   **FR-8: Module Persistence:** The application should optionally remember the layout, size, and position of active modules between sessions.
*   **FR-9: Module Controls:** Each module's custom frame shall include controls to close the module.

**3.3. Universal Chat Input**

*   **FR-10: Single Input Box:** A persistent, universal chat input box shall be present at the bottom or top of the main application window.
*   **FR-11: Simultaneous Prompt Submission:** When a user types a prompt into the universal input box and submits it (e.g., by pressing Enter or clicking a Send button), the application shall:
    *   **FR-11.1:** Identify all active LLM modules currently open on the canvas.
    *   **FR-11.2:** Programmatically inject the same prompt text into the appropriate input field of *each* LLM module's web interface.
    *   **FR-11.3:** Programmatically trigger the "send" or "submit" action within *each* module's web interface.

**3.4. Session Management**

*   **FR-12: Isolated Sessions:** Each LLM module must maintain its own isolated session, including cookies and local storage.
*   **FR-13: Persistent Logins:** A user's login state for a service (e.g., being logged into Google for Gemini) must be remembered within its module across application restarts.

### 4. Non-Functional Requirements

*   **NFR-1: Technology Stack:** The application shall be built as a cross-platform desktop application using a framework capable of embedding and controlling web views
*   **NFR-2: User Experience (UX):**
    *   The interface shall be clean, minimal, and intuitive.
    *   All manipulations (dragging, resizing) must be smooth and responsive, providing immediate visual feedback.
*   **NFR-3: Performance:** The application should be optimized to minimize CPU and RAM usage, even when running multiple `WebView` instances.
*   **NFR-4: Security:** All user data, cookies, and session information must be stored locally on the user's machine. The application will not transmit this data to any third-party servers.
*   **NFR-5: Maintainability:** The mechanism for injecting prompts and submitting them is dependent on the target websites' DOM structure. This is a known point of fragility and will require ongoing maintenance to adapt to website updates.
*   **NFR-6: Platform Support:** The initial release shall support macOS and Windows, with Linux as a secondary target.

### 5. Assumptions

*   Users have active accounts for the LLM services they wish to use.
*   Users have a stable internet connection.
*   The target LLM services will continue to offer a web-based chat interface.