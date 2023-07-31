import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import 'tailwindcss/tailwind.css';
import { ThemeProvider } from "@material-tailwind/react";

// Router
import router from './router.jsx';

createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);