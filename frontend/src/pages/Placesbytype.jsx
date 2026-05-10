import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Placesbytype() {
  const { type } = useParams();
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/places/type/${type}`
        );
        setPlaces(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, [type]);

  if (loading) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center text-capitalize">
        {type} Places in MP
      </h2>

      <div className="row g-4">
        {places.length === 0 ? (
          <h5 className="text-center">No places found</h5>
        ) : (
          places.map((place) => (
            <div className="col-md-4" key={place._id}>
              <div
                className="card shadow-sm h-100 place-card"
                onClick={() => navigate(`/place/${place._id}`)}
                style={{ cursor: "pointer" }}
>
               <img
                  src={`http://localhost:8080${place.image}`}
                  className="card-img-top"
                  style={{ height: "220px", objectFit: "cover" }}
                  alt={place.name}
                />

                <div className="card-body">
                  <h5 className="fw-bold">{place.name}</h5>
                  <p className="text-muted">{place.location}</p>
                  <p style={{ fontSize: "14px" }}>
                    {place.description?.slice(0, 100)}...
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Placesbytype;