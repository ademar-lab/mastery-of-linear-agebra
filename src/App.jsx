import { Home } from './pages/home';
import { Classes } from './pages/classes';
import { Navbar } from './components/navbar';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { ClassesProvider } from './context';

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
    <ClassesProvider>
      <Navbar/>
      <RouterProvider router={router} />
    </ClassesProvider>
  )
}

export default App
