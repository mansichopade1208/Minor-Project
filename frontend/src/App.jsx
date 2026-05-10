import { Routes, Route } from 'react-router-dom'
import HomePage from './home page/HomePage'
import EventPage from './Event pages/EventPage'
import CategoryEventsPage from './Event pages/CategoryEventsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/events" element={<EventPage />} />
      <Route path="/events/:category" element={<CategoryEventsPage />} />
    </Routes>
  )
}

export default App