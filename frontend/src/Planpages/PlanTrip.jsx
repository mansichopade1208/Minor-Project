import { useNavigate } from "react-router-dom";
import '../index.css';
function PlanTrip() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Explore Destinations",
      icon: "fa-solid fa-earth-asia",
      path: "/destination",
    },
    {
      title: "Build Itinerary",
      icon: "fa-solid fa-calendar-days",
      path: "/itinerary",
    },
    {
      title: "How to Reach",
      icon: "fa-solid fa-train",
      path: "/how-to-reach",
    },
    {
      title: "Where to Stay",
      icon: "fa-solid fa-hotel",
      path: "/hotels",
    },
    {
      title: "Weather Info",
      icon: "fa-solid fa-cloud-sun",
      path: "/weather",
    },
    {
      title: "Saved Places",
      icon: "fa-solid fa-heart",
      path: "/saved",
    },
    {
      title: "Nearby Attractions",
      icon: "fa-solid fa-location-dot",
      path: "/nearby",
    },
    {
      title: "Tourist Map",
      icon: "fa-solid fa-map-location-dot",
      path: "/map",
    },
  ];

  return (
    <div
      className="py-5"
      style={{ background: "#f8f9fa", minHeight: "100vh" }}
    >
      <div className="container">
        
        <div className="text-center mb-5">
          <h1 className="fw-bold display-5">Plan Your Trip</h1>
          <p className="text-muted fs-5">
            Everything you need for your journey
          </p>
        </div>

   
        <div className="row g-4">
          {features.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              
              <div
                onClick={() => navigate(item.path)}
                className="card border-0 shadow-sm h-100 rounded-4 p-4 text-center trip-card"
                style={{
                  cursor: "pointer",
                  transition: "0.3s",
                }}
              >
                <div className="mb-3">
                  <i className={`${item.icon} fs-1 text-warning`}></i>
                </div>

                <h5 className="fw-bold">{item.title}</h5>

                <p className="text-muted small mt-2 mb-0">
                  Explore this feature
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlanTrip;