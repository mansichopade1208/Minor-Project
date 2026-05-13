import "../index.css";

function HowToReach() {
  const travelOptions = [
    {
      title: "By Air",
      icon: "fa-solid fa-plane-departure",
      color: "#ffb703",
      details: [
        "Major airports: Bhopal, Indore, Jabalpur & Gwalior",
        "Direct flights from Delhi, Mumbai & Bangalore",
        "Taxi and cab services available",
      ],
    },
    {
      title: "By Train",
      icon: "fa-solid fa-train",
      color: "#219ebc",
      details: [
        "Well connected railway network across India",
        "Major stations: Bhopal, Itarsi & Jabalpur",
        "Express and superfast trains available daily",
      ],
    },
    {
      title: "By Road",
      icon: "fa-solid fa-road",
      color: "#2a9d8f",
      details: [
        "Connected through NH-44 & NH-46",
        "Luxury buses and interstate transport available",
        "Easy road trips from nearby states",
      ],
    },
  ];

  const cities = [
    {
      name: "Bhopal",
      image:
        "https://images.unsplash.com/photo-1598091383021-15ddea10925d",
    },
    {
      name: "Indore",
      image:
        "https://images.unsplash.com/photo-1605640840605-14ac1855827b",
    },
    {
      name: "Jabalpur",
      image:
        "https://images.unsplash.com/photo-1622308644420-b20142dc993c",
    },
    {
      name: "Gwalior",
      image:
        "https://images.unsplash.com/photo-1614251055880-ee96e4803393",
    },
  ];

  return (
    <div style={{ background: "#f8f9fa" }}>
      
      {/* HERO */}
      <div
        className="d-flex align-items-center justify-content-center text-white text-center"
        style={{
          height: "85vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)),url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-3">
          <h1
            className="fw-bold display-2"
            style={{ letterSpacing: "1px" }}
          >
            How To Reach
          </h1>

          <p className="fs-3 mt-3 text-light">
            Discover the easiest ways to travel across Madhya Pradesh
          </p>

          <button className="btn btn-warning btn-lg rounded-pill px-5 mt-4 fw-semibold shadow">
            Start Journey
          </button>
        </div>
      </div>

      {/* TRAVEL OPTIONS */}
      <div className="container py-5">
        
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">
            Travel Options
          </h2>

          <p className="text-muted">
            Comfortable ways to explore the heart of India
          </p>
        </div>

        <div className="row g-4">
          
          {travelOptions.map((item, index) => (

            <div className="col-lg-4" key={index}>
              
              <div
                className="card border-0 shadow-lg rounded-4 h-100 p-5 reach-card"
                style={{
                  transition: "0.4s",
                  cursor: "pointer",
                }}
              >
                <div
                  className="mx-auto d-flex align-items-center justify-content-center rounded-circle mb-4"
                  style={{
                    width: "90px",
                    height: "90px",
                    background: item.color,
                  }}
                >
                  <i className={`${item.icon} fs-1 text-white`}></i>
                </div>

                <h3 className="fw-bold text-center mb-4">
                  {item.title}
                </h3>

                <ul className="list-unstyled">
                  
                  {item.details.map((detail, i) => (

                    <li key={i} className="mb-3 text-muted">
                      <i className="fa-solid fa-circle-check text-success me-2"></i>
                      {detail}
                    </li>

                  ))}

                </ul>
              </div>

            </div>

          ))}

        </div>
      </div>

      {/* POPULAR CITIES */}
      <div className="container pb-5">
        
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">
            Popular Entry Cities
          </h2>

          <p className="text-muted">
            Major connected destinations in Madhya Pradesh
          </p>
        </div>

        <div className="row g-4">
          
          {cities.map((city, index) => (

            <div className="col-lg-3 col-md-6" key={index}>
              
              <div
                className="card border-0 shadow-lg rounded-4 overflow-hidden h-100"
                style={{
                  transition: "0.4s",
                  cursor: "pointer",
                }}
              >
                <div className="overflow-hidden">
                  
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-100"
                    style={{
                      height: "260px",
                      objectFit: "cover",
                    }}
                  />

                </div>

                <div className="card-body text-center p-4">
                  
                  <h4 className="fw-bold">
                    {city.name}
                  </h4>

                  <button className="btn btn-outline-warning rounded-pill px-4 mt-3 fw-semibold">
                    Explore More
                  </button>

                </div>
              </div>

            </div>

          ))}

        </div>
      </div>

      {/* EXTRA INFO */}
      <div className="container-fluid bg-dark text-white py-5 mt-5">
        
        <div className="container">
          
          <div className="row text-center g-4">
            
            <div className="col-md-4">
              <h1 className="fw-bold text-warning">12+</h1>
              <p>Major Railway Junctions</p>
            </div>

            <div className="col-md-4">
              <h1 className="fw-bold text-warning">4</h1>
              <p>International Airports</p>
            </div>

            <div className="col-md-4">
              <h1 className="fw-bold text-warning">50+</h1>
              <p>Tourist Destinations Connected</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default HowToReach;