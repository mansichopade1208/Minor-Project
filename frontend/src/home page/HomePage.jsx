import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroSection from './HeroSection'
import QuickExplore from './QuickExplore'
import TrendingEvents from './TrendingEvents';
import ExperiencesHome from './ExperiencesHome';
import UpcomingEvents from './UpcomingEvents';
import PopularDestinations from './PopularDestinations';
import GalleryPreview from './GalleryPreview';

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
      <GalleryPreview/>
      <Footer/>
    </>
  );
}
