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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <PrivateRoute><Home></Home></PrivateRoute>,
      },
      {
        path:"about",
        element:<About></About>
      }
      
    ],
   
  },
  {
    path:"logIn",
    element:<LogIn></LogIn>
  },
  {
    path:"SingUp",
    element:<SingUp></SingUp>
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <div className="max-w-7xl mx-auto w-full">
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </div>
  // </React.StrictMode>, 
)
