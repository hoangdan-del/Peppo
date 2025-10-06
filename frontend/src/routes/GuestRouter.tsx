// src/routes/AdminRouter.tsx
import React from "react";
import HomePage from "../pages/guest/HomePage";
import MainLayout from "../layout/MainLayout";
const GuestRouter = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <HomePage /> },
      // ... other admin routes
    ],
  },
];

export default GuestRouter;
