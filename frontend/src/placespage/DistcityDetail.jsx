import { useParams } from "react-router-dom";
import cities from "../data/cities";
import districts from "../data/district";

function DistcityDetail() {
    const transportData = {
  city: {
    air: "Nearest airport available (check Google Flights for exact routes).",
    train: "Well connected via Indian Railways network.",
    road: "Connected via NH highways and state transport buses.",
    local: "Auto-rickshaws, cabs, and city buses available."
  },
  district: {
    air: "Nearest major city airport is accessible.",
    train: "Railway connectivity available via nearby junctions.",
    road: "Connected via state highways and bus services.",
    local: "Local buses and shared autos available."
  }
};
     
  const { type, name } = useParams();

  let data = [];

  if (type === "city") {
    data = cities;
  } else if (type === "district") {
    data = districts;
  }

  const item = data.find(
    (i) => i.name.toLowerCase() === name.toLowerCase()
  );

  if (!item) return <h2 className="text-center mt-5">Not Found</h2>;
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    item.name
  )}&output=embed`;

  return (
    <div className="container py-5">
      <h1 className="mb-3">{item.name}</h1>

      <img
        src={item.image}
        alt={item.name}
        style={{
          width: "100%",
          height: "400px",
          objectFit: "cover",
          borderRadius: "15px",
        }}
      />

      <p className="mt-4 text-muted fs-5">{item.description}</p>

      <div className="mt-4">
        <span className="badge bg-dark me-2">
          {type.toUpperCase()}
        </span>
      </div>

      {/* TRANSPORTATION SECTION */}
<div className="card shadow-sm border-0 mt-4">
  <div className="card-body">
    <h4 className="mb-3">🚆 Transportation</h4>

    <div className="row g-3">

      {/* AIR */}
      <div className="col-md-6">
        <div className="p-3 border rounded h-100">
          <h6>✈️ By Air</h6>
          <p className="text-muted mb-0">
            {transportData[type].air}
          </p>
        </div>
      </div>

      {/* TRAIN */}
      <div className="col-md-6">
        <div className="p-3 border rounded h-100">
          <h6>🚆 By Train</h6>
          <p className="text-muted mb-0">
            {transportData[type].train}
          </p>
        </div>
      </div>

      {/* ROAD */}
      <div className="col-md-6">
        <div className="p-3 border rounded h-100">
          <h6>🚌 By Road</h6>
          <p className="text-muted mb-0">
            {transportData[type].road}
          </p>
        </div>
      </div>

      {/* LOCAL */}
      <div className="col-md-6">
        <div className="p-3 border rounded h-100">
          <h6>🚕 Local Transport</h6>
          <p className="text-muted mb-0">
            {transportData[type].local}
          </p>
        </div>
      </div>

    </div>
  </div>
</div>

       <div className="card shadow-sm border-0">
        <div className="card-body">
          <h4 className="mb-3">Location on Map</h4>

          <div className="ratio ratio-16x9">
            <iframe
              src={mapUrl}
              className="rounded"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
}

export default DistcityDetail;