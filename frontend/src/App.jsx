import { Routes, Route } from 'react-router-dom'
import HomePage from './home page/HomePage'
import EventPage from './Event pages/EventPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/events" element={<EventPage />} />
    </Routes>
  )
}

export default App