import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import "./ItineraryResult.css";

function ItineraryResult() {
  const pdfRef = useRef();

  const navigate = useNavigate();

  const itinerary = JSON.parse(localStorage.getItem("itinerary"));

  if (!itinerary) {
    return (
      <div
        className="
          d-flex
          justify-content-center
          align-items-center
          min-vh-100
          text-center
          itinerary-empty-iteresult
        "
      >
        <div>
          <h1>No itinerary found</h1>

          <p>Generate a trip plan to view your itinerary.</p>
        </div>
      </div>
    );
  }

  const downloadPDF = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      localStorage.setItem("redirectAfterLogin", "/itinerary-result");

      alert("Please login first");

      navigate("/login");

      return;
    }

    const element = pdfRef.current;

    const canvas = await html2canvas(element, {
      scale: 2,
    });

    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 210;

    const pageHeight = 295;

    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;

    let position = 0;

    pdf.addImage(data, "PNG", 0, position, imgWidth, imgHeight);

    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;

      pdf.addPage();

      pdf.addImage(data, "PNG", 0, position, imgWidth, imgHeight);

      heightLeft -= pageHeight;
    }

    pdf.save("MP-Tourism-Itinerary.pdf");
  };

  return (
    <div className="itinerary-page-iteresult" style={{ paddingTop: "95px" }}>
      <div
        className="
          container
          py-5
        "
      >
        {/* TOP HEADER */}

        <div
          className="
            text-center
            mb-5
          "
        >
          <p className="itinerary-subtitle-iteresult">AI GENERATED JOURNEY</p>

          <h1 className="itinerary-title-iteresult">{itinerary.tripName}</h1>

          <p className="itinerary-desc-iteresult">
            Personalized travel experiences crafted for your Madhya Pradesh
            adventure.
          </p>
        </div>

        {/* MAIN CARD */}

        <div ref={pdfRef} className="itinerary-wrapper-iteresult">
          {itinerary.days.map((day) => (
            <div key={day.day} className="day-card-iteresult">
              {/* HEADER */}

              <div className="day-header-iteresult">
                <div>
                  <p className="day-label-iteresult">Day {day.day}</p>

                  <h2>📍 {day.city}</h2>
                </div>
              </div>

              {/* BODY */}

              <div className="day-body-iteresult">
                {/* ACTIVITIES */}

                <div className="section-iteresult">
                  <h4>Activities</h4>

                  <div className="activity-list-iteresult">
                    {day.activities.map((activity, index) => (
                      <div key={index} className="activity-item-iteresult">
                        ✨ {activity}
                      </div>
                    ))}
                  </div>
                </div>

                {/* FOOD + HOTEL */}

                <div className="info-grid-iteresult">
                  <div className="info-box-iteresult">
                    <h5>🍴 Food</h5>

                    <p>{day.food}</p>
                  </div>

                  <div className="info-box-iteresult">
                    <h5>🏨 Hotel</h5>

                    <p>{day.hotel}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}

        <div
          className="
            text-center
            mt-5
          "
        >
          <button
            className="
              btn
              px-5
              py-3
              rounded-pill
              fw-semibold
              itinerary-btn-iteresult
            "
            onClick={downloadPDF}
          >
            Download Itinerary PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItineraryResult;
