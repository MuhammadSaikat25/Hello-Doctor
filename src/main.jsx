import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Pages/Main/Main';
import Home from './Pages/Home/Home';
import AuthProvider from './Component/FireBase/AuthProvider';
import LogIn from './Pages/Login/LogIn';
import About from './Component/About';
import SingUp from './Component/SingUp';
import PrivateRoute from './Component/FireBase/PrivateRoute';
import ErrorPage from './Pages/Error/ErrorPage';
import Appointment from './Component/FireBase/Appoinment/Appointment';
import Profile from './Pages/Pofile/Profile';
import AllUser from './Pages/ProfilePage/AllUser';
import AddDoctor from './Pages/ProfilePage/AddDoctor';
import ManageUser from './Pages/ProfilePage/ManageUser';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element:<Home></Home>,
      },
      {
        path: "about",
        element: <About></About>
      },
      {
        path: 'Appointment',
        element: <PrivateRoute><Appointment></Appointment></PrivateRoute>
      }


    ],

  },
  {
    path: "logIn",
    element: <LogIn></LogIn>
  },
  {
    path: "SingUp",
    element: <SingUp></SingUp>
  },
  {
    path: 'profile',
    element: <Profile></Profile>,
    children: [
      {
        path: 'allUser',
        element: <AllUser></AllUser>
      },
      {
        path: 'addDoctor',
        element: <AddDoctor></AddDoctor>
      },
      {
        path: 'manageUser',
        element: <ManageUser></ManageUser>
      }
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <div className="max-w-7xl mx-auto w-full">
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </div>
  // </React.StrictMode>, 
)
