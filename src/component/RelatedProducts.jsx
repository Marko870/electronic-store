import { useGetProductsByCategoryQuery } from "../features/services/ecommerceApi"
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
// import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
const RelatedProducts = ({mainProduct}) => {
    const { data } = useGetProductsByCategoryQuery(mainProduct.category);
    
  return (
<div>
    <h1 className="text-5xl mb-14 mt-24 font-bold">Related Products</h1>
          <div className="bg-main-white p-10">
          <Swiper className=""
         
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
            {data && data.filter(el => el.id !== mainProduct.id).map((item, i) => (
              <SwiperSlide key={i}  className="">
                
                  <ProductCard product={item} />
                
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
    </div>
  )
}

export default RelatedProducts
