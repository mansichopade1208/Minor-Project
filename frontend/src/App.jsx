<<<<<<< HEAD

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Destination from "./placespage/Destination";
import NavBar from './components/NavBar';
import Placesbytype from'./placespage/Placesbytype';
import PlaceDetails from './placespage/Placedetails'



import HomePage from './home page/HomePage'
import EventPage from './Event pages/EventPage'
import CategoryEventsPage from './Event pages/CategoryEventsPage'


function App() {
  return (

    
=======
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Destination from "./pages/Destination";
import Placesbytype from "./pages/Placesbytype";
import PlaceDetails from "./pages/Placedetails";

import HomePage from "./home page/HomePage";
import EventPage from "./Event pages/EventPage";
import CategoryEventsPage from "./Event pages/CategoryEventsPage";

function App() {
  return (
>>>>>>> 6d874f466f9e889625783c677eb3c83bde2555cf
    <BrowserRouter>
      <NavBar />
      <Routes>
<<<<<<< HEAD
       <Route path="/" element={<HomePage />} />
      <Route path="/events" element={<EventPage />} />
      <Route path="/events/:category" element={<CategoryEventsPage />} />
        <Route path="/destination" element={<Destination />}/>
        <Route path="/destination/:category/:type" element={<Placesbytype />}/>
=======
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/events/:category" element={<CategoryEventsPage />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/destination/:category/:type" element={<Placesbytype />} />
>>>>>>> 6d874f466f9e889625783c677eb3c83bde2555cf
        <Route path="/place/:id" element={<PlaceDetails />} />
      </Routes>
    </BrowserRouter>
<<<<<<< HEAD

    

  )
=======
  );
>>>>>>> 6d874f466f9e889625783c677eb3c83bde2555cf
}

export default App;
