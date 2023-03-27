import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from '@/pages/ErrorPage';
import RootPage from '@/pages/RootPage';
import ManagePage from '@/pages/manage';
import ManageBudgetPage from '@/pages/manage/budget';
import AddNewBudgetPage from '@/pages/manage/budget/Add';
import EditbudgetPage from '@/pages/manage/budget/Edit';
import AddPeriodPage from '@/pages/manage/period/Add';
import EditPeriodPage from '@/pages/manage/period/Edit';
import ManagePeriodPage from '@/pages/manage/period';
import ManageCategoryPage from '@/pages/manage/Category';
import AddCategoryPage from '@/pages/manage/Category/Add';
import EditCategoryPage from '@/pages/manage/Category/Edit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      // Roots
      { path: '/home', element: <RootPage /> },
      { path: '/transactions', element: <RootPage /> },
      { path: '/analytics', element: <RootPage /> },
      // Manage Section
      { path: '/manage', element: <ManagePage /> },
      // Manage Budget
      { path: '/manage/budget', element: <ManageBudgetPage /> },
      { path: '/manage/budget/add', element: <AddNewBudgetPage /> },
      { path: '/manage/budget/:id/edit', element: <EditbudgetPage /> },
      // Manage Period
      { path: '/manage/period', element: <ManagePeriodPage /> },
      { path: '/manage/period/add', element: <AddPeriodPage /> },
      { path: '/manage/period/:id/edit', element: <EditPeriodPage /> },
      // Manage Category
      { path: '/manage/category', element: <ManageCategoryPage /> },
      { path: '/manage/category/add', element: <AddCategoryPage /> },
      { path: '/manage/category/:id/edit', element: <EditCategoryPage /> },
    ],
  },
]);

export default router;