import { useState } from "react";
import tourGuides from "../data/tourGuides";

function TourGuide() {
  const [search, setSearch] = useState("");
  const filteredGuides = tourGuides.filter(
    (guide) =>
      guide.name
        .toLowerCase()
        .includes(search.toLowerCase())
      ||
      guide.city
        .toLowerCase()
        .includes(search.toLowerCase())
      ||
      guide.specialization
        .toLowerCase()
        .includes(search.toLowerCase())
      ||
      guide.languages.some((lang) =>
        lang
          .toLowerCase()
          .includes(search.toLowerCase())
      )
  );

  return (
    <div
      className="py-5"
      style={{
        background: "#f8f9fa",
        minHeight: "100vh"
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold display-5">
            Tourist Guides
          </h1>
          <p className="text-muted fs-5">
            Find experienced local guides
            across Madhya Pradesh
          </p>
        </div>

        <div className="row justify-content-center mb-5">
          <div className="col-lg-6">
            <div className="input-group shadow rounded-pill overflow-hidden">
              <input
                type="text"
                className="form-control border-0 px-4 py-3"
                placeholder="Search by language, city, ..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />
              <span className="input-group-text bg-warning border-0 px-4">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
            </div>
          </div>
        </div>


        <div className="row g-4">
          {filteredGuides.length === 0 ? (
            <div className="text-center">
              <h4 className="text-muted">
                No guides found
              </h4>
            </div>
          ) : (
            filteredGuides.map((guide) => (
              <div
                className="col-lg-4 col-md-6"
                key={guide.id}
              >
                <div className="card border-0 shadow rounded-4 overflow-hidden h-100">

                  <img
                    src={guide.image}
                    alt={guide.name}
                    style={{
                      height: "320px",
                      objectFit: "cover"
                    }}
                  />

                  <div className="card-body p-4">
                    <h3 className="fw-bold">
                      {guide.name}
                   </h3>
                    <p className="text-muted mb-2">
                      📍 {guide.city}
                    </p>
                    <span className="badge bg-warning text-dark rounded-pill px-3 py-2 mb-3">
                      {guide.specialization}
                    </span>
                    <p>
                      <strong>Languages:</strong>
                      {" "}
                      {guide.languages.join(", ")}
                    </p>

                    <p>
                      <strong>Experience:</strong>
                      {" "}
                      {guide.experience}

                    </p>
                    <a
                      href={`tel:${guide.phone}`}
                      className="btn btn-dark rounded-pill px-4 mt-2"
                    >

                      <i className="fa-solid fa-phone me-2"></i>
                      Contact Guide
                    </a>
                  </div>
                </div>
              </div>

            ))

          )}

        </div>

      </div>

    </div>

  );
}

export default TourGuide;
