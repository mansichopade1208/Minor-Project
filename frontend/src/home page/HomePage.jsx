import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroSection from './HeroSection'
import QuickExplore from './QuickExplore'
import TrendingEvents from './TrendingEvents';
import ExperiencesHome from './ExperiencesHome';
import UpcomingEvents from './UpcomingEvents';
import PopularDestinations from './PopularDestinations';
import PhotoGallery from './PhotoGallery';

export default function HomePage() {
  return (
    <>
      <NavBar/>
      <HeroSection/>
      <QuickExplore/>
      <TrendingEvents/>
      <ExperiencesHome/>
      <UpcomingEvents/>
      <PopularDestinations/>
      <PhotoGallery/>
      <Footer/>
    </>
  );
}
