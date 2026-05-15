import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./HotelDetail.css";

function HotelDetails() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/hotels/booking/${id}`
        );
        setHotel(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchHotel();
  }, [id]);
  if (!hotel) {
    return (
      <h3 className="text-center mt-5">
        Loading...
      </h3>
    );
  }
  return (

    <div className="hotel-details-page py-5">
      <div className="container">
        <div className="card border-0 shadow-lg hotel-details-card">
          <img
            src={`http://localhost:8080${hotel.image}`}
            alt={hotel.name}
            className="hotel-hero-image"
          />

          <div className="card-body p-4 p-md-5">
            <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
              <div>
                <h1 className="hotel-title">
                  {hotel.name}
                </h1>
                <p className="hotel-location">
                  📍 {hotel.city}
                </p>
              </div>
              <span className="badge bg-warning text-dark hotel-badge">
                ⭐ {hotel.rating}
              </span>
            </div>
            <div className="mb-4 d-flex gap-3 flex-wrap">
             <span className="badge bg-dark hotel-badge">
                {hotel.type}
              </span>
              <span className="badge bg-success hotel-badge">
                {hotel.price}
              </span>
            </div>
            <hr />
            <div className="mb-5">
              <h3 className="hotel-section-title">
                About Hotel
              </h3>
              <p className="hotel-description">
                {hotel.description}
              </p>
            </div>
            <div className="mb-5">
              <h3 className="hotel-section-title">
                Amenities
              </h3>
              <div className="d-flex flex-wrap gap-3">
                {hotel.amenities?.map((item, index) => (
                  <span
                    className="amenity-badge"
                    key={index}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <h3 className="hotel-section-title">
                Location
              </h3>
              <iframe
                title="hotel-map"
                width="100%"
                height="350"
                className="hotel-map"
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps?q=${hotel.location}&output=embed`}
              ></iframe>
            </div>


            <div className="text-center">
              <button className="btn btn-warning book-btn">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelDetails;