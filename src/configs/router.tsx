import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from '@/pages/ErrorPage';
import RootPage from '@/pages/RootPage';

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
    element: <RootPage />,
  },
]);

export default router;
