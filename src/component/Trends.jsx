import { useGetProductsQuery } from "../features/services/ecommerceApi"
import ProductCard from "./ProductCard"
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
// import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Trends = () => {
  const { data, isLoading, isFetching } = useGetProductsQuery();
  
  return (
    <section id="todysTrends" className="padding-x padding-y">
      <div className=" max-w-[1440px] mx-auto p-7 bg-white border-[3px] border-secondery-line 
      ">
        <div className="flex items-center gap-5 max-sm:flex-col sm:gap-20 mb-14">
          <h3 className="text-4xl font-bold text-gray-800">{"Today's Trends"}</h3>
          <Link className="text-xl font-medium text-main-blue" to={"/trends"}> See More  </Link>
        </div>
        
        <Swiper className="bg-main-white"
         
          spaceBetween={20}
          
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4
            }
          }}
          
        >
            {data && data.map((item, i) => (
              <SwiperSlide key={i}  className="">
                
                  <ProductCard product={item} />
                
              </SwiperSlide>
            ))}
          </Swiper>
        
        
      </div>
    </section>
  )
}

export default Trends
 