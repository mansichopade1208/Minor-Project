import districts from "../data/district";
import { useNavigate } from "react-router-dom";

function District() {
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <h2 className="mb-4">Districts of Madhya Pradesh</h2>

      <div className="row g-4">
        {districts.map((district) => (
          <div
            key={district.name}
            className="col-md-4"
            onClick={() => navigate(`/destination/district/${district.name.toLowerCase()}`)}
            style={{ cursor: "pointer" }}
          >
            <div className="card shadow-sm h-100">
              <img
                src={district.image}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5>{district.name}</h5>
                <p>{district.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default District;