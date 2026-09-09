
import Header from './components/header'
import HeroSection from "./components/herosection";
import BrowseRange from "./components/BrowseRange";
import OurProducts from "./components/OurProducts";
function App() {
  return (
    <div className="min-h-screen bg-white">
     <Header/>
     <HeroSection />
      {/* Hero section aap khud add karein */}
     
        <BrowseRange />
    <OurProducts />

     
    </div>
  )
}

export default App
