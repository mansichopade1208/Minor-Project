import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./placebytype.css"

function Placesbytype() {
  const { type } = useParams();
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/destination/type/${type}`,
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
  <h2 className="mb-5 text-center fw-bold text-capitalize">
    {type} Places in MP
  </h2>

  <div className="row g-4">
    {places.length === 0 ? (
      <h5 className="text-center">No places found</h5>
    ) : (
      places.map((place) => (
        <div className="col-md-4" key={place._id}>
          <div
            className="place-card position-relative overflow-hidden rounded-4 shadow"
            onClick={() => navigate(`/place/${place._id}`)}
            style={{
              cursor: "pointer",
              height: "320px",
            }}
          >
            <img
              src={`http://localhost:8080${place.image}`}
              alt={place.name}
              className="w-100 h-100 object-fit-cover"
            />

            {/* Dark Overlay */}
            <div className="overlay"></div>

            {/* Place Name */}
            <div className="place-name">
              <h3>{place.name}</h3>
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
