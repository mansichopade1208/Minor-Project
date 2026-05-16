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
<<<<<<< HEAD
import Signup from "./authpages/Signup";
import Login from "./authpages/login";
import User from "./components/User";
=======
import ExperiencesPage from "./experience/ExperiencesPage";
import ExperienceDetails from "./experience/ExperienceDetails";
import EventDetailPage from "./Event pages/EventDetailPage";

>>>>>>> 9b41cf05e1b7c6472b5de642471e1cb3d1bbc9ba


function App() {
  return (
   <>
      <NavBar />
      <User />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/events/:category" element={<CategoryEventsPage />} />
        <Route path="/events/detail/:id" element={<EventDetailPage />}/>
        <Route path="/destination" element={<Destination />} />
        <Route path="/destination/:type" element={<Placesbytype />} />
        <Route path="/destination/detail/:id" element={<PlaceDetails />} />
        <Route path="/plan" element={<PlanTrip />} />
        <Route path="/how-to-reach" element={<HowToReach/>} />
        <Route path="/itinerary" element={<Itinerary />}/>
        <Route path="/itineraryresult" element={<ItineraryResult/>}/>
        <Route path="/hotels" element={<WhereToStay/>}/>
        <Route path="/hotel/:id" element={<HotelDetails/>}/>
<<<<<<< HEAD
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
=======
        <Route path="/experiences" element={<ExperiencesPage/>} />
        <Route path="/experiences/detail/:id" element={<ExperienceDetails />}/>
>>>>>>> 9b41cf05e1b7c6472b5de642471e1cb3d1bbc9ba
      </Routes>
      <ChatBot/>
      </>
    
  );
}

export default App;
