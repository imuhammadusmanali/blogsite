import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import Services from './components/Services/Services';
import ContactUs from './components/Contact-Us/ContactUs';
import SinglePost from './components/Single-Post/SinglePost';

const router = createBrowserRouter([
  {
    path: '/',
    exact: true,
    element: <Layout />,
    children: [
      {
        index: true,
        name: 'Home',
        element: <Home />,
      },
      {
        path: '/services',
        name: 'Services',
        element: <Services />,
      },
      {
        path: '/blogs',
        name: 'Blogs',
        element: <Blogs />,
      },
      {
        path: '/singleblog',
        name: 'Single Post',
        element: <SinglePost />,
      },
      {
        path: '/contact-us',
        name: 'Contact Us',
        element: <ContactUs />,
      },
    ],
  },
]);

function App() {
  return (
    // < Dashboard />
    <RouterProvider router={router} />
  );
}

export default App;
