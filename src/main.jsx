import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './pages/Home.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import AboutMe from './pages/AboutMe.jsx';
import FormPage from './pages/FormPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/aboutMe',
        element: <AboutMe />
      },
    ]
  },
  {
    path: '/form',
    element: <FormPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
