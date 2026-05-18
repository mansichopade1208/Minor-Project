import cities from "../data/cities";
import { useNavigate } from "react-router-dom";

function Cities() {
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <h2 className="mb-4">Cities of Madhya Pradesh</h2>

      <div className="row g-4">
        {cities.map((city) => (
          <div
            key={city.name}
            className="col-md-4"
            onClick={() => navigate(`/destination/city/${city.name.toLowerCase()}`)}
            style={{ cursor: "pointer" }}
          >
            <div className="card shadow-sm h-100">
              <img
                src={city.image}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5>{city.name}</h5>
                <p>{city.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cities;