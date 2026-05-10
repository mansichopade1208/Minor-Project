<<<<<<< HEAD
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import NavBar from './components/NavBar';
import Placesbytype from'./pages/Placesbytype';
import PlaceDetails from './pages/Placedetails'

=======
import { Routes, Route } from 'react-router-dom'
import HomePage from './home page/HomePage'
import EventPage from './Event pages/EventPage'
import CategoryEventsPage from './Event pages/CategoryEventsPage'
>>>>>>> 7f4c2fef8f023981f0b666afcd20f9acd22edfc7

function App() {
  return (
<<<<<<< HEAD
    
    <BrowserRouter>
         <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />}/>
        <Route path="/destination/:category/:type" element={<Placesbytype />}/>
        <Route path="/place/:id" element={<PlaceDetails />} />
      </Routes>

    </BrowserRouter>
=======
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/events" element={<EventPage />} />
      <Route path="/events/:category" element={<CategoryEventsPage />} />
    </Routes>
>>>>>>> 7f4c2fef8f023981f0b666afcd20f9acd22edfc7
  )
}

export default App