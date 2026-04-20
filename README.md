# OpsVision Dashboard

OpsVision Dashboard is a modern full-stack business analytics and operations dashboard built with React, TypeScript, Vite, Node.js, and Express.

It presents key business metrics, client information, project tracking, and workspace settings in a clean, responsive interface. The frontend consumes data from a custom Node.js + Express API, making the project a complete frontend-backend demo rather than a static UI.

## Features

- Clean login page UI
- Responsive dashboard layout
- Sidebar navigation with active route highlighting
- KPI stat cards powered by backend APIs
- Revenue line chart
- Traffic sources chart
- Recent transactions table
- Activity feed
- Clients page connected to API data
- Projects page connected to API data
- Settings page UI
- Reusable layout and header components
- Node.js + Express backend serving dashboard data

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Recharts
- React Icons

### Backend

- Node.js
- Express
- CORS

## Architecture

The project is split into two parts:

- **Frontend:** React + TypeScript UI rendered in the browser
- **Backend:** Node.js + Express API serving mock business data as JSON

The frontend calls API endpoints such as:

- `/api/stats`
- `/api/revenue`
- `/api/traffic`
- `/api/orders`
- `/api/activities`
- `/api/clients`
- `/api/projects`

## Node.js in this Project

This project uses Node.js in two important ways:

1. **Frontend tooling**
   - npm for package management
   - Vite for local development and production builds

2. **Backend server**
   - Express API for serving dashboard, client, and project data
   - CORS-enabled communication between frontend and backend

So this project is both:

- a frontend application built with React
- a backend API built with Node.js and Express

## Project Structure

```txt
src/
  components/
    dashboard/
      ActivityFeed.tsx
      RecentOrders.tsx
      RevenueChart.tsx
      StatCard.tsx
      TrafficChart.tsx
    layout/
      AppLayout.tsx
      Header.tsx
      Sidebar.tsx
  data/
    mockData.ts
  pages/
    Clients.tsx
    Dashboard.tsx
    Login.tsx
    Projects.tsx
    Settings.tsx
  server/
    index.js
  App.tsx
  main.tsx
  index.css
```

## Pages

### Login

A polished authentication-style screen used to simulate product entry flow.

### Dashboard

Shows business KPIs, charts, transactions, and activity updates.

### Clients

Displays a directory of clients with industry, contact, revenue, and status.

### Projects

Tracks project progress, owners, deadlines, and completion status.

### Settings

Includes profile settings, notifications, workspace plan, and security actions.

## Getting Started

### 1. Clone the repository

```
git clone https://github.com/mrumayi20/opsvision-dashboard
cd opsvision-dashboard
```

### 2. Install dependencies

```
npm install
```

### 3. Run the backend server and run the frontend

```
npm run dev
npm run server
```

### 4. Open the app

Use the local URL shown by Vite, usually:

```
http://localhost:5173
```

The backend runs on:

```
http://localhost:5000
```

## Available Scripts

```
npm run dev
npm run build
npm run preview
npm run server
```

## Design Goals

This project was built with the following goals in mind:

<ul>
  <li>Create a professional dashboard UI that feels like a real product</li>
  <li>Use reusable React components</li>
  <li>Keep the structure simple and scalable</li>
  <li>Demonstrate routing and multi-page layout</li>
  <li>Use mock data to focus on frontend experience and presentation</li>
</ul>

## Author

Mrunmayi Patil
