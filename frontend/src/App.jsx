import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import NavBar from './components/NavBar';
import Placesbytype from'./pages/Placesbytype';
import PlaceDetails from './pages/Placedetails'


function App() {

  return (
    
    <BrowserRouter>
         <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />}/>
        <Route path="/destination/:category/:type" element={<Placesbytype />}/>
        <Route path="/place/:id" element={<PlaceDetails />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
