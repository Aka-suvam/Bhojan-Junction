import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from '../src/pages/Home.jsx';
import RestaurantMenu from './Components/RestaurantMenu/RestaurantMenu.jsx';

const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<App/>,

        children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/resturentsmenu/:resId',  
            element:<RestaurantMenu/>
        }
        
    ]
    }
]);




ReactDOM.createRoot(document.getElementById('root')).render(

 <React.StrictMode> 
    <RouterProvider router={appRouter} />

</React.StrictMode> 
)
