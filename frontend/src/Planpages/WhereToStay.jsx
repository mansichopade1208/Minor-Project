import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Hotels() {
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/hotels/booking"
        );
        setHotels(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchHotels();
  }, []);

  return (
    <div className="container py-5">
      <div className="row g-4">
        {hotels.map((hotel) => (
          <div className="col-lg-4" key={hotel._id}>
            <div className="card shadow border-0 rounded-4 overflow-hidden h-100"
                onClick={() =>navigate(`/hotel/${hotel._id}`)}
                style={{ cursor: "pointer" }}>
              <img
                src={`http://localhost:8080${hotel.image}`}
                alt={hotel.name}
                style={{
                  height: "240px",
                  objectFit: "cover"
                }}
              />
              <div className="card-body">
                <h4 className="fw-bold">
                  {hotel.name}
                </h4>
                <p className="text-muted">
                  📍 {hotel.city}
                </p>
                <p>
                  {hotel.description}
                </p>
                <div className="d-flex justify-content-between">
                  <span className="badge bg-dark">
                    {hotel.type}
                  </span>
                  <span className="fw-bold text-success">
                    {hotel.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hotels;