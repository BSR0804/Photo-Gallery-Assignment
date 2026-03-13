# 📸 Photo Gallery Web App

A clean, responsive photo gallery application built as part of a frontend internship pre-screening assignment. This app fetches and displays imagery from the Picsum Photos API with a focus on high-performance code and premium user experience.

## 🚀 Features

- **Dynamic Fetching**: Loads 30 high-quality photos from the Picsum API on initial load.
- **Custom Hook Architecture**: All API logic is encapsulated in a dedicated `useFetchPhotos` hook.
- **Real-Time Search**: Filter photos by author name instantly. Optimised using `useMemo` and `useCallback` to ensure 60fps performance even during typing.
- **Smart Favourites**: Toggle photos as favourites with state managed via `useReducer`.
- **Persistent State**: Favourited photos are preserved across page refreshes using `localStorage`.
- **Adaptive Design**: A fully responsive grid layout that looks stunning on every device.
  - **4 Columns** on Desktop
  - **2 Columns** on Tablet
  - **1 Column** on Mobile

## 🛠 Tech Stack

- **React 19**: Using functional components and modern hooks.
- **Vite**: For lightning-fast development and build tooling.
- **Tailwind CSS**: For custom, premium styling without chunky UI libraries.
- **Native Browser APIs**: Fetch API and LocalStorage.

## 📁 Project Structure

```text
src/
├── components/       # UI Components (Gallery, PhotoCard, SearchInput, etc.)
├── hooks/            # Custom useFetchPhotos hook
├── reducers/         # useReducer logic for Favorites
├── App.jsx           # Main application entry
└── index.css         # Tailwind directives and design tokens
```

## 📦 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/BSR0804/Photo-Gallery-Assignment.git
   cd Photo-Gallery-Assignment
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## ⚡ Performance Optimisations

- **useMemo**: Used to calculate the filtered list of photos, preventing expensive re-calculations on every render.
- **useCallback**: Memoizes the search and toggle handlers to maintain stable references for child components.
- **Lazy Loading**: Images are optimized for performance with native browser lazy loading.

---
*Built with ❤️ as a Frontend Assignment.*
