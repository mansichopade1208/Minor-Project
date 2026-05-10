import { useEffect, useState } from "react";
import { getHomeData } from "../api/homeApi";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroSection from "./HeroSection";
import QuickExplore from "./QuickExplore";
import TrendingEvents from "./TrendingEvents";
import ExperiencesHome from "./ExperiencesHome";
import UpcomingEvents from "./UpcomingEvents";
import PopularDestinations from "./PopularDestinations";
import GalleryPreview from "./GalleryPreview";

export default function HomePage() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchHomeData() {
      try {
        const result = await getHomeData();

        setData(result);
      } catch (err) {
        console.log(err);
      }
    }

    fetchHomeData();
  }, []);

  if (!data) {
  return <p>Loading...</p>;
}

console.log(data);

  return (
    <>
      <NavBar />
      <HeroSection />
      <h1>{data.message}</h1>
      <QuickExplore />
      <TrendingEvents />
      <ExperiencesHome />
      <UpcomingEvents />
      <PopularDestinations />
      <GalleryPreview />
      <Footer />
    </>
  );
}
