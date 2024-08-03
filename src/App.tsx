import BusinessEfficiency from './components/BusinessEfficiency';
import ClientChoices from './components/ClientChoice';
import DevelopmentHero from './components/DevelopmentHero';
import Footer from './components/Footer';
import HermiSection from './components/HermiSection';
import HeroSection from './components/HeroSection';
import HireMe from './components/Hirami';
import NavigationBar from './components/Navigation.bar';


const App = () => {
 

  return (
    <div>
      <NavigationBar/>
      <HeroSection description={"Hiremi, where we connect talent with opportunities, empowering India's youth to become tomorrow's leaders."}/>
      <HermiSection/>
      <BusinessEfficiency/>
      <HireMe/>
      <ClientChoices/>
      <DevelopmentHero/>
      <Footer/>
      </div>
  );
};

export default App;
