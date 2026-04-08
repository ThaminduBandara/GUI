# New Tech Frontend (React)

This project is a React single-page application for an electronics store workflow. It includes login/signup screens, a protected home page, product browsing, a single-product details view, and an advanced product management area to add, update, list, and delete items.

## Main Features

- Client-side authentication flow with protected routes
- Home page with promotional carousel/content sections
- Product details page with quantity selector and action buttons
- Product management UI for create/update/delete operations
- Product list view fetched from API
- Global navigation bar and footer

## Route Overview

- `/` redirects to `/Login` when logged out and `/home` when logged in
- `/Login` login page
- `/SignUp` signup page
- `/home` protected home screen
- `/singleProduct` protected single-product view
- `/ProductForm` protected product management form
- `/ProductLists` protected product list

## Tech Stack

- React 19
- React Router DOM 7
- Axios for HTTP requests
- Material UI (`@mui/material`, icons, lab, x-data-grid) and Emotion
- Framer Motion for animations
- React Icons
- Create React App (`react-scripts` 5)
- Testing Library + Jest DOM for tests

## API Requirement

This frontend expects a backend API running on `http://localhost:5001` with endpoints such as:

- `GET /products`
- `GET /products/:id`
- `POST /products`
- `PUT /products/:id`
- `DELETE /products/:id`

If the backend is not running, product list and product form actions will fail.

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the frontend:

```bash
npm start
```

3. Open:

`http://localhost:3000`

## Available Scripts

- `npm start` - run in development mode
- `npm test` - run tests in watch mode
- `npm run build` - create a production build
- `npm run eject` - eject CRA config (one-way operation)

## Demo Login Credentials

Current login logic accepts:

- Username/Email: `thamindu`
- Password: `thamindu123`

## Project Structure

- `src/App.js` app routing and auth gate logic
- `src/Pages/` top-level pages (home, login, signup, single product)
- `src/components/` reusable UI and product management components
- `public/` static assets and HTML template
