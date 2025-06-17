import ban1 from "../assets/electronic-store-promotional-banner-1.jpg"
import ban2 from "../assets/electronic-store-promotional-banner-2.jpg"
const Banners = () => {
  return (
    <section className="padding-x padding-y ">
          <div className="flex flex-col items-center w-full gap-3 md:flex-row max-w-[1440px] mx-auto">
              <div className=" flex-1">
                  <img src={ban1} alt="" width={"100%"}/>
              </div>   
              <div className="flex-1">
                  <img src={ban2} alt="" width={"100%"}/>
              </div>   
          </div>
    </section>
  )
}

export default Banners
