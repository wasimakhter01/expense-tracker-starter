# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build
npm run lint     # run ESLint
npm run preview  # preview production build
```

## Architecture

This is a single-page React app (Vite + React 19) with no routing, no state management library, and no backend — all state lives in `src/App.jsx`.

**`src/App.jsx`** — the entire application. Contains:
- `transactions` state: array of `{ id, description, amount, type, category, date }`. Note: `amount` is stored as a string, which causes incorrect arithmetic in the summary totals (a known bug in the starter).
- Form state (`description`, `amount`, `type`, `category`) for adding new transactions.
- Filter state (`filterType`, `filterCategory`) applied client-side over the transactions array.
- Summary totals (Income, Expenses, Balance) computed inline via `reduce`.
- A single `handleSubmit` to append new transactions.

**`src/App.css`** — component-scoped styles. `.delete-btn` is defined but the delete button is not yet wired up in the JSX (intentional gap for the course).

**`src/index.css`** — global reset and base body styles.

There are no sub-components, no utility modules, no tests, and no environment variables.
