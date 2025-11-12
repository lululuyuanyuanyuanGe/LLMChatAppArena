### **Project Requirements Document: OmniPrompt**

### 1. Project Overview

**1.1. Project Name:** OmniPrompt (working title)

**1.2. Vision:** To create a unified desktop application that allows users to interact with multiple Large Language Model (LLM) chat applications simultaneously through their native web interfaces.

**1.3. Problem Statement:** Power users of LLMs often query multiple models (ChatGPT, Claude, Gemini, etc.) to gain diverse perspectives. Manually copying prompts, switching between browser tabs, and comparing results is cumbersome and inefficient. Existing API-based aggregator tools sacrifice the rich, full-featured functionality of the native web UIs, such as advanced file parsing, multimodal inputs, and provider-specific prompt engineering.

**1.4. Solution:** OmniPrompt will be a desktop application that provides a single, streamlined workspace. Within this workspace, users can load and view the live web UIs of various LLM providers side-by-side in an automatically managed layout. A universal input box will allow users to send a single prompt to all active LLM modules at once, streamlining the process of comparative analysis while preserving 100% of each platform's native functionality.

### 2. Target Audience

*   **AI Power Users & Researchers:** Individuals who regularly use multiple LLMs for complex queries and need to compare nuanced responses.
*   **Developers & Engineers:** Professionals who use LLMs for coding, debugging, and technical problem-solving.
*   **Writers & Content Creators:** Users who leverage LLMs for brainstorming, drafting, and refining content and want a variety of creative inputs.

### 3. Core Features & Functional Requirements

**3.1. Application Shell & Workspace**

*   **FR-1: Main Window:** The application shall consist of a single main window.
*   **FR-2: Frameless Design:** The main window shall be "frameless," containing no default operating system title bar, menus, or browser UI elements.
*   **FR-3: Dynamic Column Workspace:** The primary area of the main window shall be a dynamic, horizontally tiling workspace that automatically manages the layout of all active LLM modules in columns.
*   **FR-4: LLM Module Palette:** The application must provide a static palette, sidebar, or menu containing icons or buttons for supported LLM services (e.g., ChatGPT, Claude, Gemini, Perplexity).

**3.2. LLM Module Management**

*   **FR-5: Click-to-Add Instantiation:** Users must be able to click an icon or button in the palette to create a new, active LLM module. The new module will be added as a new column in the workspace.
*   **FR-6: Raw Web Interface Rendering:** Each module **must** render the live, unmodified, and complete web interface of the selected service (e.g., loading `https://chat.openai.com/`).
    *   **FR-6.1:** The rendered view must be "chromeless," displaying only the web content itself, not any browser UI.
    *   **FR-6.2:** All native website functionality, including login, file uploads, and multimodal inputs, must be fully operational within the module.
*   **FR-7: Automatic Layout Management:** The workspace shall automatically manage the size and position of all modules.
    *   **FR-7.1 (Dynamic Sizing):** All active modules shall be automatically sized to share the available workspace width equally.
    *   **FR-7.2 (Minimum Width):** Each module column shall have a pre-defined minimum width (e.g., 350px) to ensure the usability of the web interface within it.
    *   **FR-7.3 (Horizontal Overflow):** If adding a new module would violate the minimum width constraint of the existing modules, the workspace container shall enable a horizontal scrollbar, allowing the user to scroll to view all active modules.
*   **FR-8: Multiple Instances:** The system must support opening multiple, independent instances of the same LLM service. Each instance will have its own isolated session and be treated as a separate column in the layout.
*   **FR-9: Module Persistence:** The application should optionally remember the set and order of active modules between sessions.
*   **FR-10: Module Controls:** Each module's frame or header shall include a control to close the module from the workspace.

**3.3. Universal Chat Input**

*   **FR-11: Single Input Box:** A persistent, universal chat input box shall be present at the bottom or top of the main application window.
*   **FR-12: Simultaneous Prompt Submission:** When a user types a prompt into the universal input box and submits it, the application shall:
    *   **FR-12.1:** Identify all active LLM modules currently open on the workspace.
    *   **FR-12.2:** Programmatically inject the same prompt text into the appropriate input field of *each* LLM module's web interface.
    *   **FR-12.3:** Programmatically trigger the "send" or "submit" action within *each* module's web interface.

**3.4. Session Management**

*   **FR-13: Isolated Sessions:** Each LLM module must maintain its own isolated session, including cookies and local storage.
*   **FR-14: Persistent Logins:** A user's login state for a service must be remembered within its module across application restarts.

### 4. Non-Functional Requirements

*   **NFR-1: Technology Stack:** The application shall be built as a cross-platform desktop application using a framework capable of embedding and controlling web views (e.g., Electron).
*   **NFR-2: User Experience (UX):** The interface shall be clean, minimal, and intuitive. Application responses to user actions (like adding or closing a module) shall be smooth and responsive.
*   **NFR-3: Performance:** The application should be optimized to minimize CPU and RAM usage, even when running multiple `WebView` instances.
*   **NFR-4: Security:** All user data, cookies, and session information must be stored locally on the user's machine. The application will not transmit this data to any third-party servers.
*   **NFR-5: Maintainability:** The mechanism for injecting prompts and submitting them is dependent on the target websites' DOM structure. This is a known point of fragility and will require ongoing maintenance to adapt to website updates.
*   **NFR-6: Platform Support:** The initial release shall support macOS and Windows, with Linux as a secondary target.

### 5. Assumptions

*   Users have active accounts for the LLM services they wish to use.
*   Users have a stable internet connection.
*   The target LLM services will continue to offer a web-based chat interface.