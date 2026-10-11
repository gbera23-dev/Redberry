# Kino - Cinema Ticketing Web Application

> "Thanks for this amazing project, It was a great experience! I never knew I would ever even think of writing Javascript, yet here I am..."

---

## Overview & Architecture

**Kino** is a modern **Single-Page Application (SPA)** built for browsing movies, managing user sessions, selecting cinema seats, and securing ticket bookings. 

The application is structured around a **feature-based approach**. I tried my best to segregate responsibilities into separate features so that code would become naturally clean and extendable. Although, I do not know how well I did this job, I am still proud of this architecture.

---

## Tech Stack & Core Packages

* **React (Vite):** Fast, component-based frontend development and instant hot module replacement.
* **Axios:** Promise-based HTTP client configured with a centralized instance (`httpClient.js`), featuring custom request interceptors for automatic Bearer token injection and response interceptors for global error processing.
* **Component State & Lifecycle Hooks:** Built-in React mechanisms (`useState`, `useEffect`) managing reactive state flows, modal transitions, and profile validations.
* **Modular CSS & UI Styling:** Custom stylesheets and responsive components tailored for high-quality cinema browsing and booking experience.

---

## Project Structure

```text
src/
├── features/        # Feature-based modules (auth, buyTickets, home, profile, sessions)
├── shared/          # Reusable modules
│   ├── api/         # API clients and global error handler
│   ├── data/        # Shared data assets
│   ├── mappers/     # Data transformation mappers
│   ├── navigation/  # Navbar and routing logic
│   ├── services/    # Business logic & service wrappers (auth, booking, catalogue, etc.)
│   └── utils/       # Utility functions (e.g., token management)
├── App.jsx          # Root application component
├── config.js        # Global configuration (API endpoints)
└── main.jsx         # React application entry point