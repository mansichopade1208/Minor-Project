import { useState } from "react";

import SearchBar from "../components/SearchBar";
import { categoriesData } from "../data/Categories";
import CategoryCard from "../components/CategoryCard";


function Destination() {
  const [activeCategory, setActiveCategory] = useState("attractions");
  return (
    <>
      <div className="d-flex justify-content-center flex-wrap gap-5 mt-5">
        <div
          className={`text-center pb-2 ${activeCategory === "attractions" ? "border-bottom border-3 border-dark" : ""}`}
          style={{ cursor: "pointer" }}
          onClick={() => setActiveCategory("attractions")}
        >
          <i className="fa-solid fa-mountain-city fs-3 mb-3"></i>
          <p className="fw-semibold mb-0">Attractions</p>
        </div>

        <div
          className={`text-center pb-2 ${activeCategory === "artCulture" ? "border-bottom border-3 border-dark" : ""}`}
          style={{ cursor: "pointer" }}
          onClick={() => setActiveCategory("artCulture")}
        >
          <i className="fa-solid fa-palette fs-3 mb-3"></i>
          <p className="fw-semibold mb-0">Art & Culture</p>
        </div>

        <div
          className={`text-center pb-2 ${activeCategory === "picnicSpots" ? "border-bottom border-3 border-dark" : ""}`}
          style={{ cursor: "pointer" }}
          onClick={() => setActiveCategory("picnicSpots")}
        >
          <i className="fa-solid fa-tree-city fs-3 mb-3"></i>
          <p className="fw-semibold mb-0">Picnic Spots</p>
        </div>

        <div
          className={`text-center pb-2 ${activeCategory === "regions" ? "border-bottom border-3 border-dark" : ""}`}
          style={{ cursor: "pointer" }}
          onClick={() => setActiveCategory("regions")}
        >
          <i className="fa-solid fa-location-dot fs-3 mb-3"></i>
          <p className="fw-semibold mb-0">Regions</p>
        </div>

        <div
          className={`text-center pb-2 ${activeCategory === "spirituality" ? "border-bottom border-3 border-dark" : ""}`}
          style={{ cursor: "pointer" }}
          onClick={() => setActiveCategory("spirituality")}
        >
          <i className="fa-solid fa-place-of-worship fs-3 mb-3"></i>
          <p className="fw-semibold mb-0">Spirituality</p>
        </div>
      </div>

      <SearchBar />

      <div className="container py-5">
        <div className="row g-4">
          {categoriesData[activeCategory].map((item, index) => (
            <CategoryCard
              key={index}
              title={item.title}
              image={item.image}
              category={activeCategory}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Destination;
