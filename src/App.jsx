import { Home } from './pages/home';
import { Classes } from './pages/classes';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/classes',
    element: <Classes/>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
