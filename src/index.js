import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import './style/App.css';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import NoPage from './pages/NoPage';
import Resume from './pages/Resume';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: '/contact',
        element: <Contact />,
    },
    {
        path: '/projects',
        element: <Projects/>,
    },
    {
        path: '/resume',
        element: <Resume/>,
    },
    {
        path: '*',
        element: <NoPage/>
    },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
