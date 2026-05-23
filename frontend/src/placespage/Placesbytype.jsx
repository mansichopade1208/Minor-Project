import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import "./Placesbytype.css";

function Placesbytype() {
  const { type } = useParams();

  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/destination/type/${type}`
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
    return (
      <div className="placebytype-loading">
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <div className="placebytype-page">

      {/* HEADER */}

      <div className="placebytype-header text-center">

        <p>EXPLORE MADHYA PRADESH</p>

        <h1>{type}</h1>

        <span>
          Discover heritage cities, cultural hubs, spiritual destinations,
          and scenic escapes across the heart of India.
        </span>

      </div>

      {/* GRID */}

      <div className="container">

        <div className="row g-4 justify-content-center">

          {places.length === 0 ? (
            <div className="text-center">
              <h5>No places found</h5>
            </div>
          ) : (
            places.map((place) => (
              <div
                className="col-lg-4 col-md-6"
                key={place._id}
              >

                <div
                  className="placebytype-card"
                  onClick={() => navigate(`/place/${place._id}`)}
                >

                  {/* IMAGE */}

                  <div className="placebytype-image">

                    <img
                      src={place.image}
                      alt={place.name}
                    />

                  </div>

                  {/* CONTENT */}

                  <div className="placebytype-content">

                    <h3>{place.name}</h3>

                    <button>
                      Explore Place
                    </button>

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

export default Placesbytype;