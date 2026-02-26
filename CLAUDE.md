# react_template

Vite + React SPA with React Router v6 and a fetch example component.

## Stack

- React 18, Vite, React Router v6
- Node 22+, npm

## Commands

```bash
npm run dev      # Dev server at http://localhost:5173
npm run build    # Build to dist/
npm run preview  # Preview production build
```

## Structure

- `src/router.jsx` — route definitions
- `src/App.jsx` — root layout (nav + Outlet)
- `src/pages/` — page components (Home, About, NotFound)
- `src/components/` — reusable components (PostsFeed)
- `index.html` — Vite HTML entry point

## Adding a Route

1. Create `src/pages/MyPage.jsx`
2. Import and add to `src/router.jsx`:
   ```jsx
   { path: 'my-page', element: <MyPage /> }
   ```
