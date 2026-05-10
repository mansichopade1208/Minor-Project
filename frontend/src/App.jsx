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
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/events/:category" element={<CategoryEventsPage />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/destination/:category/:type" element={<Placesbytype />} />
        <Route path="/place/:id" element={<PlaceDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
