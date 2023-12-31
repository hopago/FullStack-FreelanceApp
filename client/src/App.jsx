import Navbar from "./components/navbar/Navbar";
import Footer from './components/footer/Footer';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import MyOrders from "./pages/myOrders/MyOrders";
import MyGigs from "./pages/myGigs/MyGigs";
import Message from "./pages/message/Message";
import Messages from "./pages/messages/Messages";
import Add from "./pages/add/Add";
import Success from './pages/success/Success';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import Pay from "./pages/pay/Pay";


const queryClient = new QueryClient();

const Layout = () => {
  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Outlet />
        <Footer />
      </QueryClientProvider>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/gigs',
        element: <Gigs />
      },
      {
        path: '/gig/:id',
        element: <Gig />
      },
      {
        path: '/orders',
        element: <MyOrders />
      },
      {
        path: '/mygigs',
        element: <MyGigs />
      },
      {
        path: '/add',
        element: <Add />
      },
      {
        path: '/messages',
        element: <Messages />
      },
      {
        path: '/message/:id',
        element: <Message />
      },
      {
        path: '/pay/:id',
        element: <Pay />
      },
      {
        path: '/success',
        element: <Success />
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ]
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
