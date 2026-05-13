import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Itinerary() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    destination: "",
    days: "",
    budget: "",
    travelers: "",
    interests: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generateTrip = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/ai/generate-itinerary",
        formData
      );

      localStorage.setItem(
        "itinerary",
        JSON.stringify(response.data)
      );

      navigate("/itineraryresult");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Plan Your Trip</h1>

      <input
        type="text"
        name="destination"
        placeholder="Destination"
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="number"
        name="days"
        placeholder="Number of Days"
        onChange={handleChange}
      />

      <br /><br />

      <select name="budget" onChange={handleChange}>
        <option value="">Select Budget</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="Luxury">Luxury</option>
      </select>

      <br /><br />

      <input
        type="text"
        name="travelers"
        placeholder="Travelers"
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="text"
        name="interests"
        placeholder="Interests"
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={generateTrip}>
        Generate Itinerary
      </button>
    </div>
  );
}

export default Itinerary;