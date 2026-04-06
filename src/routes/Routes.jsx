import Books from "../Pages/Books/Books";
import HomePage from "../Pages/HomePage";
import MainLayout from "../Layout/MainLayout";
import { createBrowserRouter } from "react-router";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";



export const router=createBrowserRouter([
{
  path:'/',
  element:<MainLayout/>,
  children:[
    {
      index:true,
      element:<HomePage/>
    },
    {
      path:'/books',
      element:<Books/>
    }
  ],
  errorElement:<ErrorPage/>
}
]);