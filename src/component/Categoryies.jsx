import { useGetCategorysQuery } from "../features/services/ecommerceApi"
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation";
import "swiper/css/pagination";
const Categoryies = () => {
  const { data, error, isError } = useGetCategorysQuery();
  console.log(isError)
  if (isError) {
    console.error(error)
    return <div className="flex items-center justify-center text-2xl bg-white">there is error fetching this data</div>
  } 
  
  return (
    
    <section className="padding-x padding-y "> 
      <div className="max-w-[1440px] mx-auto bg-white p-4">
        
        <Swiper slidesPerView={2}
        modules={[Navigation]}
        navigation
        
        breakpoints={{
        640: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        
      }} className="bg-main-white ">
        
          {data && data.map((cat, index) => (
            <SwiperSlide key={index} className="max-w-[300px] ">
              <Link to={`/categroyPage/${cat.title}`} className="relative flex flex-col justify-center group">
                  <img src={cat.img} alt={cat.title} />
                  <div className=" bg-main-white w-full group-hover:bg-opacity-100 bg-opacity-70  
                  text-center top-[60%] absolute duration-500">
                    <p className="text-lg font-semibold text-gray-900">{cat.title}</p>
                  <p className="text-gray-500">3 Products</p>
                  </div> 
                </Link> 
            </SwiperSlide>
          ))}
      </Swiper>
      </div>
      
    </section>
  )
}

export default Categoryies
