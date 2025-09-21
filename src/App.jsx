import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import  RootLayout from "./layout/RootLayout";
import LaptopData from './Components/Laptops/LaptopData'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import MobileData from './Components/Mobiles/MobileData';
import Login from './Components/User/Login';

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="laptops" element={<LaptopData/>}/>
          <Route path="Mobiles" element={<MobileData/>}/>
          <Route path="login" element={<Login/>}/>
        </Route>
    )
  )

  return <RouterProvider router={router}></RouterProvider>

}

export default App
