function ItineraryResult() {
  const itinerary = JSON.parse(
    localStorage.getItem("itinerary")
  );

  if (!itinerary) {
    return <h1>No itinerary found</h1>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>{itinerary.tripName}</h1>

      {itinerary.days.map((day) => (
        <div
          key={day.day}
          style={{
            border: "1px solid gray",
            marginBottom: "20px",
            padding: "20px",
          }}
        >
          <h2>Day {day.day}</h2>

          <h3>{day.city}</h3>

          <ul>
            {day.activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>

          <p>
            <strong>Food:</strong> {day.food}
          </p>

          <p>
            <strong>Hotel:</strong> {day.hotel}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ItineraryResult;