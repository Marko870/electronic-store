import Hero from "../component/Hero";
import Features from "../component/Features";
import Categorys from "../component/Categoryies";
import Banners from "../component/Banners";
import Trends from "../component/Trends";
const Home = () => {
    return (
        <main className=" bg-main-background">
          <Hero />
          <Features />
          <Categorys />
          <Banners />
          <Trends />
        </main> 
      
  )
}

export default Home
