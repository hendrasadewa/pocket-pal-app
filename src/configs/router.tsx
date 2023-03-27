import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from '@/pages/ErrorPage';
import RootPage from '@/pages/RootPage';
import ManagePage from '@/pages/ManagePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/transactions',
    element: <RootPage />,
  },
  {
    path: '/analytics',
    element: <RootPage />,
  },
  {
    path: '/manage',
    element: <ManagePage />,
    children: [
      {
        path: 'budget',
        element: <RootPage />,
        children: [
          {
            path: 'add',
            element: <RootPage />,
          },
          {
            path: ':id',
            element: <RootPage />,
            children: [
              {
                path: 'edit',
                element: <RootPage />,
              },
            ],
          },
        ],
      },
      {
        path: 'category',
        element: <RootPage />,
        children: [
          {
            path: 'add',
            element: <RootPage />,
          },
          {
            path: ':id',
            element: <RootPage />,
            children: [
              {
                path: 'edit',
                element: <RootPage />,
              },
            ],
          },
        ],
      },
      {
        path: 'period',
        element: <RootPage />,
        children: [
          {
            path: 'add',
            element: <RootPage />,
          },
          {
            path: ':id',
            element: <RootPage />,
            children: [
              {
                path: 'edit',
                element: <RootPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
