import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './components/Layout/MainLayout';
import Home from './pages/Home';
import FetchOld from './pages/FetchOld';
import FetchRQ from './pages/FetchRQ';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/trad",
        element: <FetchOld />
      },
      {
        path: "/rq",
        element: <FetchRQ />
      },
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
    // {/* <h1>TanStack Query</h1> */}
  )
}

export default App