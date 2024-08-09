
import Hero from "../Components/Hero/Hero.jsx";
import WhatsOnMind from "../Components/WhatsOnMind/WhatsOnMind.jsx";
import TopResturent from "../Components/TopResturent/TopResturent.jsx";
import OnlineResturent from "../Components/OnlineResturent/OnlineResturent.jsx";
import useRestaurant from "../hooks/useRestaurant.js";

const Home=()=> {

  const [mindCarsoul,topCarsoul,allresturentlist] = useRestaurant();
  //console.log('homemind',mindCarsoul);
  //console.log('homemind',typeof fooditems)

  return (
    <>
     <Hero/>
     <WhatsOnMind  fooditems={mindCarsoul}/>
     <TopResturent    Topresturent={topCarsoul}/>
     <OnlineResturent  Allresturent={allresturentlist}/>    

    </>
  )
}

export default Home;
