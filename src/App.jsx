import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import  RootLayout from "./layout/RootLayout";
import LaptopData from './Components/Laptops/LaptopData'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import MobileData from './Components/Mobiles/MobileData';
import Login from './Components/User/Login';
import LaptopDetail from './Components/Laptops/LaptopDetail';
import MobileDetail from './Components/Mobiles/MobileDetail'
import SignUp from './Components/User/SignUp';
import { AppContextProvider } from './Context/AppContext';
import AddProduct from './Components/AddProduct/AddProduct';
import AddLaptops from './Components/AddProduct/AddLaptops';
import AddMobiles from './Components/AddProduct/AddMobiles';

function App() {

  const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="AddProduct" element={<AddProduct/>}/>
          <Route path="AddProduct/Laptops" element={<AddLaptops/>}/>
          <Route path="AddProduct/Mobiles" element={<AddMobiles/>}/>
          <Route path="laptops" element={<LaptopData/>}/>
          <Route path="Mobiles" element={<MobileData/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<SignUp/>}/>
          <Route path="Laptops/:id" element={<LaptopDetail/>}/>
          <Route path="Mobiles/:id" element={<MobileDetail/>}/>
        </Route>
    )
  )

  return (
    <AppContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </AppContextProvider>
)

}

export default App
