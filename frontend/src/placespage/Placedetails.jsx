import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function PlaceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [place, setPlace] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/destination/detail/${id}`)
      .then((res) => setPlace(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!place) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-warning"></div>
      </div>
    );
  }

  return (
    <div className="py-5 bg-light" style={{ minHeight: "100vh" }}>
      <div className="container">
        {/* BACK BUTTON */}
        <button
          className="btn btn-dark rounded-pill px-4 py-2 mb-4"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        {/* MAIN CARD */}
        <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
          {/* IMAGE */}
          <div className="position-relative">
            <img
              src={place.image}
              alt={place.name}
              className="w-100"
              style={{ height: "550px", objectFit: "cover" }}
            />

            {/* OVERLAY */}
            <div
              className="position-absolute bottom-0 start-0 w-100 p-4"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
              }}
            >
              <h1 className="text-white fw-bold display-5">{place.name}</h1>

              <p className="text-light fs-5 mb-0">📍 {place.location}</p>
            </div>
          </div>

          {/* BODY */}
          <div className="card-body p-4 p-md-5">
            {/* BADGES */}
            <div className="mb-4">
              <span className="badge bg-warning text-dark rounded-pill px-4 py-2 fs-6 me-3">
                {place.category}
              </span>

              <span className="badge bg-dark rounded-pill px-4 py-2 fs-6">
                {place.type}
              </span>
            </div>

            {/* ABOUT */}
            <div className="mb-5">
              <h2 className="fw-bold mb-4">About This Place</h2>

              <p
                className="text-secondary"
                style={{ lineHeight: "2", fontSize: "18px" }}
              >
                {place.description}
              </p>
            </div>

            {/* TRANSPORT */}
            <div className="mb-5">
              <h2 className="fw-bold mb-4">Transport Information</h2>

              <div className="row g-4">
                {[
                  {
                    icon: "plane-departure",
                    title: "Airport",
                    value: place.transport?.nearestAirport,
                  },
                  {
                    icon: "train",
                    title: "Railway",
                    value: place.transport?.nearestRailway,
                  },
                  {
                    icon: "road",
                    title: "Road Access",
                    value: place.transport?.roadAccess,
                  },
                ].map((item, index) => (
                  <div className="col-md-4" key={index}>
                    <div className="card border-0 shadow-sm rounded-4 h-100">
                      <div className="card-body text-center p-4">
                        <i
                          className={`fa-solid fa-${item.icon} fs-1 text-warning mb-3`}
                        ></i>

                        <h4 className="fw-bold">{item.title}</h4>

                        <p className="text-muted mt-3 mb-0">
                          {item.value || "N/A"}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>


              <div className="mb-5">
                <h2 className="fw-bold mb-4">
                  Location on Map
                </h2>
                <div className="rounded-4 overflow-hidden shadow">
                  <iframe
                    title="google-map"
                    width="100%"
                    height="450"
                    style={{
                      border: 0
                    }}
                    loading="lazy"
                    allowFullScreen
                    src={`https://www.google.com/maps?q=${place.name}, ${place.location}&z=15&output=embed`}
                  ></iframe>
                </div>
                <div className="mt-4">
                  <a
                    href={`https://www.google.com/maps?q=${place.name}, ${place.location}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-warning px-4 py-2 rounded-pill fw-semibold"
                  >
                    <i className="fa-solid fa-location-dot me-2"></i>
                    Open in Google Maps
                  </a>
                </div>
              </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceDetails;
