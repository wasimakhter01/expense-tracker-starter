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

This is a single-page React app (Vite + React 19) with no routing, no state management library, and no backend.

**State ownership:**
- `App.jsx` holds the single source of truth: the `transactions` array (`{ id, description, amount, type, category, date }`). Note: `amount` is stored as a string, which causes incorrect arithmetic in summary totals (a known bug in the starter).
- Each child component owns its own local UI state.

**Components:**
- **`src/App.jsx`** — root component. Holds `transactions` state and a `handleAdd` callback, then composes the three child components.
- **`src/Summary.jsx`** — receives `transactions`, computes `totalIncome`, `totalExpenses`, and `balance` internally via `reduce`, and renders the three summary cards.
- **`src/TransactionForm.jsx`** — owns its own form state (`description`, `amount`, `type`, `category`). On submit, calls the `onAdd(transaction)` prop and resets its own state.
- **`src/TransactionList.jsx`** — receives `transactions`, owns its own filter state (`filterType`, `filterCategory`), and renders the filtered table.

**Styles:**
- **`src/App.css`** — all component styles. `.delete-btn` is defined but not yet wired up in the JSX (intentional gap for the course).
- **`src/index.css`** — global reset and base body styles.

There are no utility modules, no tests, and no environment variables.
