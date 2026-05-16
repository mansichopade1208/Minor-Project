import { useState } from "react";
import "./ExperiencesPage.css";
import { Link } from "react-router-dom";

import {
  FaLeaf,
  FaPalette,
  FaUtensils,
  FaPrayingHands,
  FaPaw,
} from "react-icons/fa";

const experienceData = {
  ecoTourism: [
    {
      title: "Forest Escape Trails",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      id: 1
    },
    {
      title: "Nature Camping",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Waterfall Exploration",
      image:
        "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "River Trails",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Forest Escape Trails",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Nature Camping",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Waterfall Exploration",
      image:
        "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "River Trails",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
    },
  ],

  artforms: [
    {
      title: "Gond Art Traditions",
      image:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Maheshwari Weaving",
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Terracotta Pottery",
      image:
        "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Bamboo Craft",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Gond Art Traditions",
      image:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Maheshwari Weaving",
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Terracotta Pottery",
      image:
        "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Bamboo Craft",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },
  ],

  cuisine: [
    {
      title: "Flavors of MP",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Poha & Jalebi",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Traditional Cuisine",
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Village Cooking",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Flavors of MP",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Poha & Jalebi",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Traditional Cuisine",
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Village Cooking",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop",
    },
  ],

  spiritual: [
    {
      title: "Sacred River Journeys",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Temple Trails",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Peaceful Ghats",
      image:
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Meditation Retreats",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Sacred River Journeys",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Temple Trails",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Peaceful Ghats",
      image:
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Meditation Retreats",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
    },
  ],

  wildlife: [
    {
      title: "Tiger Safaris",
      image:
        "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Bird Watching",
      image:
        "https://images.unsplash.com/photo-1501706362039-c6e80948a1d1?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Jungle Trails",
      image:
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Nature Photography",
      image:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Tiger Safaris",
      image:
        "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Bird Watching",
      image:
        "https://images.unsplash.com/photo-1501706362039-c6e80948a1d1?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Jungle Trails",
      image:
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Nature Photography",
      image:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200&auto=format&fit=crop",
    },
  ],
};

const tabs = [
  {
    key: "ecoTourism",
    label: "Eco Tourism",
    icon: <FaLeaf />,
  },
  {
    key: "artforms",
    label: "Artforms",
    icon: <FaPalette />,
  },
  {
    key: "cuisine",
    label: "Cuisine",
    icon: <FaUtensils />,
  },
  {
    key: "spiritual",
    label: "Spiritual",
    icon: <FaPrayingHands />,
  },
  {
    key: "wildlife",
    label: "Wildlife",
    icon: <FaPaw />,
  },
];

export default function ExperiencesPage() {
  const [activeTab, setActiveTab] = useState("ecoTourism");

  return (
    <div className="experiences-page">
      {/* TABS */}

      <div className="experience-tabs">
        {tabs.map((tab) => (
          <div
            key={tab.key}
            className={`tab-item ${activeTab === tab.key ? "active-tab" : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            <span className="tab-icon">{tab.icon}</span>

            <p>{tab.label}</p>
          </div>
        ))}
      </div>

      {/* SEARCH */}

      <div className="experience-search">
        <input type="text" placeholder="Search culture, cuisine, wildlife..." />
      </div>

      {/* CARDS */}

      <div className="experience-grid-exp-page">
        {experienceData[activeTab].map((item) => (
          <Link
            key={item.id}
            to={`/experiences/detail/${item.id}`}
            className="experience-card-exp-page"
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            <div className="card-overlay-exp-page">
              <h3>{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
