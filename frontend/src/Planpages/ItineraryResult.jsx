import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function ItineraryResult() {

  const pdfRef = useRef();

  const navigate = useNavigate();

  const itinerary = JSON.parse(
    localStorage.getItem("itinerary")
  );

  if (!itinerary) {

    return (
      <div className="text-center mt-5">
        <h1>No itinerary found</h1>
      </div>
    );
  }

  const downloadPDF = async () => {

    const token =
      localStorage.getItem("token");

    if (!token) {

      localStorage.setItem(
        "redirectAfterLogin",
        "/itinerary-result"
      );

      alert("Please login first");

      navigate("/login");

      return;
    }

    const element = pdfRef.current;

    const canvas =
      await html2canvas(element, {
        scale: 2,
      });

    const data =
      canvas.toDataURL("image/png");

    const pdf = new jsPDF(
      "p",
      "mm",
      "a4"
    );

    const imgWidth = 210;

    const pageHeight = 295;

    const imgHeight =
      (canvas.height * imgWidth) /
      canvas.width;

    let heightLeft =
      imgHeight;

    let position = 0;

    pdf.addImage(
      data,
      "PNG",
      0,
      position,
      imgWidth,
      imgHeight
    );

    heightLeft -= pageHeight;

    while (heightLeft > 0) {

      position =
        heightLeft - imgHeight;

      pdf.addPage();

      pdf.addImage(
        data,
        "PNG",
        0,
        position,
        imgWidth,
        imgHeight
      );

      heightLeft -= pageHeight;
    }

    pdf.save(
      "MP-Tourism-Itinerary.pdf"
    );
  };

  return (

    <div
      className="container py-5"
    >

      <div
        ref={pdfRef}
        className="bg-white p-4 rounded-4 shadow-lg"
      >

        {/* HEADER */}

        <div className="text-center mb-5">

          <h1
            className="fw-bold display-5"
            style={{
              color: "#ff7b00",
            }}
          >
            {itinerary.tripName}
          </h1>

          <p className="text-muted fs-5">
            MP Tourism AI Generated
            Itinerary
          </p>

        </div>

        {/* DAYS */}

        {itinerary.days.map(
          (day) => (

            <div
              key={day.day}
              className="card border-0 shadow-sm rounded-4 mb-4 overflow-hidden"
            >

              {/* TOP */}

              <div
                className="p-4 text-white"
                style={{
                  background:
                    "linear-gradient(135deg,#ff7b00,#ffb347)",
                }}
              >

                <h2 className="fw-bold">
                  Day {day.day}
                </h2>

                <h4>
                  📍 {day.city}
                </h4>

              </div>

              {/* BODY */}

              <div className="card-body p-4">

                {/* ACTIVITIES */}

                <div className="mb-4">

                  <h5 className="fw-bold mb-3">
                    Activities
                  </h5>

                  <ul className="list-group">

                    {day.activities.map(
                      (
                        activity,
                        index
                      ) => (

                        <li
                          key={index}
                          className="list-group-item border-0 mb-2 rounded-3 bg-light"
                        >
                          ✨ {activity}
                        </li>
                      )
                    )}

                  </ul>

                </div>

                {/* FOOD */}

                <div className="mb-3">

                  <h5 className="fw-bold">
                    🍴 Food
                  </h5>

                  <p className="text-secondary mb-0">
                    {day.food}
                  </p>

                </div>

                {/* HOTEL */}

                <div>

                  <h5 className="fw-bold">
                    🏨 Hotel
                  </h5>

                  <p className="text-secondary mb-0">
                    {day.hotel}
                  </p>

                </div>

              </div>

            </div>
          )
        )}

      </div>

      {/* DOWNLOAD BUTTON */}

      <div className="text-center mt-5">

        <button
          className="btn btn-dark px-5 py-3 rounded-pill fw-semibold"
          onClick={downloadPDF}
        >
          Download Itinerary PDF
        </button>

      </div>

    </div>
  );
}

export default ItineraryResult;