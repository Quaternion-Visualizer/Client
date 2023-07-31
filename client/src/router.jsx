import { createBrowserRouter } from 'react-router-dom';

import Layout from './layout/index.jsx';
import App from './App.jsx';
import Test from './Test.jsx';
import Home from './components/home/index.jsx';
import Dashboard from './components/dashboard/index.jsx';
import FourOhFour from './components/404/404.jsx';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path:'/',
        element: <App />,
      },
      {
        path:'/home',
        element: <Home />,
      },
      {
        path: '/dashboard/:uid/',
        element: <Dashboard />
      },
    ],
  },
  {
    path: '/test',
    element: <Test />
  },
  {
    path: '*',
    element: <Layout />,
    children: [
      {
        path: '*',
        element: <FourOhFour />
      },
    ],
  },
]);

export default router;