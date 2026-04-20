# OpsVision Dashboard

OpsVision Dashboard is a modern business analytics and operations dashboard built with React, TypeScript, and Vite. It presents key business metrics, client information, project tracking, and workspace settings in a clean, responsive interface.

This project was built as a frontend product demo to showcase reusable component design, routing, dashboard layouts, and modern Node.js-based frontend tooling.

## Features

- Clean login page UI
- Responsive dashboard layout
- Sidebar navigation with active route highlighting
- KPI stat cards
- Revenue line chart
- Traffic sources chart
- Recent transactions table
- Activity feed
- Clients management page
- Projects tracking page
- Settings page UI
- Reusable layout and header components

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Recharts
- React Icons

## Node.js in this Project

The user interface is built with React and TypeScript and runs in the browser.

Node.js is used for:

- package management with npm
- running the development server
- managing dependencies
- building the production bundle with Vite

So this is a frontend application built using Node.js-based tooling.

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

### 3. Run the development server

```
npm run dev
```

### 4. Open the app

Open the local URL shown in the terminal.

## Available Scripts

```
npm run dev
npm run build
npm run preview
```

## Build for Production

```
npm run build
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
