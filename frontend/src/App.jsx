import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Destination from "./placespage/Destination";
import NavBar from './components/NavBar';
import Placesbytype from'./placespage/Placesbytype';
import PlaceDetails from './placespage/Placedetails'
import HomePage from './home page/HomePage'
import EventPage from './Event pages/EventPage'
import CategoryEventsPage from './Event pages/CategoryEventsPage'
import PlanTrip from "./Planpages/PlanTrip";
import HowToReach from "./Planpages/HowToReach";
import Itinerary from "./Planpages/Itinerary";
import ItineraryResult from "./Planpages/ItineraryResult";
import WhereToStay from "./Planpages/WhereToStay";
import HotelDetails from "./Planpages/HotelDetails";
import ChatBot from "./components/ChatBot";
import Signup from "./authpages/Signup";
import Login from "./authpages/login";
import User from "./components/User";


function App() {
  return (
   <>
      <NavBar />
      <User />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/events/:category" element={<CategoryEventsPage />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/destination/:category/:type" element={<Placesbytype />} />
        <Route path="/place/:id" element={<PlaceDetails />} />
        <Route path="/plan" element={<PlanTrip />} />
        <Route path="/how-to-reach" element={<HowToReach/>} />
        <Route path="/itinerary" element={<Itinerary />}/>
        <Route path="/itineraryresult" element={<ItineraryResult/>}/>
        <Route path="/hotels" element={<WhereToStay/>}/>
        <Route path="/hotel/:id" element={<HotelDetails/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ChatBot/>
      </>
    
  );
}

export default App;
