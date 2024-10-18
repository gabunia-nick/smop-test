import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/root";
import Fallback from "./pages/fallback";
import Logs from "./pages/logs";

import './styles/carbon.scss';
import './styles/index.scss';

const CONSTRUCTION_ROUTES = [
  'dashboards',
  'metrics',
  'traces',
  'settings'
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/logs" replace />
      },
      {
        path: 'logs',
        element: <Logs />
      },
      ...CONSTRUCTION_ROUTES.map((route) => ({
        path: route,
        element: <Fallback />,
      }))
    ]
  }
]);

const App = () => (
  <RouterProvider router={router} />
);

export default App;