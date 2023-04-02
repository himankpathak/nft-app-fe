import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Login from './components/Login';
import Signup from './components/Signup';
import Chat from './components/Chat';
import NFT from './components/NFT';

import ErrorPage from './404';

import './index.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/chat',
        element: <Chat />,
      },
      {
        path: '/nft',
        element: <NFT />,
      },
    ],
  },
  ,
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
