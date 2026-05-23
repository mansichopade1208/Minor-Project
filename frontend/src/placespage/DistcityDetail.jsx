import { useParams } from "react-router-dom";

import cities from "../data/cities";
import districts from "../data/district";

import "./DistcityDetail.css";

function DistcityDetail() {
  const transportData = {
    city: {
      air: "Nearest airport available with domestic connectivity and regular flights.",

      train:
        "Well connected through major Indian Railways routes and nearby junctions.",

      road: "Accessible via national highways and intercity bus services.",

      local: "Auto-rickshaws, taxis, e-rickshaws and local buses available.",
    },

    district: {
      air: "Nearest major airport accessible through nearby city connections.",

      train:
        "Railway stations and nearby junctions provide regional connectivity.",

      road: "Connected through state highways and regional transport routes.",

      local: "Shared autos, local buses and taxis available for daily travel.",
    },
  };

  const { type, name } = useParams();

  let data = [];

  if (type === "city") {
    data = cities;
  } else if (type === "district") {
    data = districts;
  }

  const item = data.find((i) => i.name.toLowerCase() === name.toLowerCase());

  if (!item) {
    return (
      <div className="distcity-notfound-distcity">
        <h1>Not Found</h1>

        <p>The requested destination could not be found.</p>
      </div>
    );
  }

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    item.name,
  )}&output=embed`;

  return (
    <div className="distcity-page-distcity">
      {/* HERO SECTION */}

      <div className="distcity-hero-distcity">
        <img
          // src={item.image}
          src="https://plus.unsplash.com/premium_photo-1673240367277-e1d394465b56?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={item.name}
          className="distcity-hero-image-distcity"
        />

        <div className="distcity-hero-overlay-distcity"></div>

        <div className="distcity-hero-content-distcity">
          <p className="distcity-subtitle-distcity">EXPLORE MADHYA PRADESH</p>

          <h1>{item.name}</h1>

          <p className="distcity-type-distcity">{type.toUpperCase()}</p>
        </div>
      </div>

      {/* MAIN CONTENT */}

      <div className="container py-5">
        {/* DESCRIPTION */}

        <div className="distcity-description-wrapper-distcity">
          <p className="distcity-description-distcity">{item.description}</p>
        </div>

        {/* TRANSPORT SECTION */}

        <div className="distcity-section-distcity">
          <div className="distcity-section-header-distcity">
            <p>HOW TO REACH</p>

            <h2>Transportation</h2>
          </div>

          <div className="row g-4">
            <div className="col-lg-6">
              <div className="transport-card-distcity">
                <div className="transport-icon-distcity">✈️</div>

                <h4>By Air</h4>

                <p>{transportData[type].air}</p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="transport-card-distcity">
                <div className="transport-icon-distcity">🚆</div>

                <h4>By Train</h4>

                <p>{transportData[type].train}</p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="transport-card-distcity">
                <div className="transport-icon-distcity">🚌</div>

                <h4>By Road</h4>

                <p>{transportData[type].road}</p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="transport-card-distcity">
                <div className="transport-icon-distcity">🚕</div>

                <h4>Local Transport</h4>

                <p>{transportData[type].local}</p>
              </div>
            </div>
          </div>
        </div>

        {/* MAP SECTION */}

        <div className="map-section-distcity">
          <div className="distcity-section-header-distcity">
            <p>LOCATION</p>

            <h2>Find on Map</h2>
          </div>

          <div className="map-card-distcity">
            <div className="ratio ratio-16x9">
              <iframe
                src={mapUrl}
                loading="lazy"
                allowFullScreen
                title={item.name}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DistcityDetail;
