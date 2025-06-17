import heroLogo from "../assets/electronic-store-brand-logo-00.png"
import {ArrowForward} from "@mui/icons-material"
const Hero = () => {
  
  return (
    <section className="  
    bg-hero w-screen lg:h-[calc(100vh-115px)] max-md:h-[calc(100vh-250px)]  bg-cover bg-center">
      <div className="padding-x padding-y flex  max-w-[1440px] mx-auto
      items-center max-md:items-end justify-end
      ">
        <div className="w-full px-8 py-8  lg:w-2/5 md:w-1/2 md:py-12 bg-main-white">
          <div className="">
            <img src={heroLogo} alt="" />
            <h1 className="lg:text-[40px] lg:leading-[60px] text-2xl   sm:leading-[50px] font-bold text-[#27323f] mt-4 mb-5">The best home entertainment system is here</h1>
            <p className="text-[#27323f] text-lg mb-4 pr-3">Sit diam odio eget rhoncus volutpat est nibh velit posuere egestas.</p>
          </div>
          <a href="#" className="text-lg font-semibold text-decoration-none text-main-blue">Shope Now <ArrowForward /></a>
          </div>
      </div>
    </section> 
  )    
}

export default Hero
