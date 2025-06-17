import { useParams } from "react-router"
import { useGetProductByIdQuery } from "../features/services/ecommerceApi"
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/features/cartSlice";
import Reviews from "../component/Reviews";
import Discription from "../component/Discription";
import RelatedProducts from "../component/RelatedProducts";
const ProductPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductByIdQuery(id);
  const [mainImg, setMainImg] = useState();
  const [count, setCount] = useState(1);
  const [toggleU,setToggleU] = useState("D")
  const dispatch = useDispatch();

  const decreament = () => count > 1 ? setCount(count - 1) : setCount(1)
  const increament = () => setCount(count + 1);
  const setNum = (ev) => setCount(ev.target.value);
  const submitHandler = (ev) => {
    ev.preventDefault()
    dispatch(addProduct({ data, count }));
    setCount(1);
  }
  
  console.log(isLoading);
  if (isLoading) return (<div className="flex items-center justify-center text-3xl font-semibold">Loading...</div>);
  return (
    <section className=" bg-main-background">
      <div className="max-w-[1440px] mx-auto padding-x padding-y">
      <section className="flex flex-col gap-16 pb-12 border-b-[3px] border-gray-500 lg:flex-row">
        <div className="items-center flex-1 max-lg:flex max-lg:flex-col"> 
          <img src={mainImg || data.image} alt={data.title} className="w-[550px]" />
          <ul className="flex gap-5 mt-8">
            {data.subImage.map((img, i) => (
              <li key={i}>
                <img src={img} className="w-32 cursor-pointer opacity-60 hover:opacity-100" alt="" onClick={(ev) => setMainImg(ev.target.src)} />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <div className="text-lg text-gray-400 ">
            <Link to={"/"}>Home / </Link>
            <Link to={`/categroyPage/${data.category}`}>{ data.category} / </Link>
            <span> { data.title }</span>
          </div>
          <h2 className="mt-3 mb-5 text-3xl font-bold text-gray-700 sm:text-4xl">{data.title}</h2>
          <span className="mr-5 text-2xl font-medium text-gray-300 line-through sm:text-3xl ">$500.00</span>
          <span className="text-2xl font-medium text-gray-600 sm:text-3xl ">${data.price}.00</span>
          <div>
            <h3 className="mt-3 mb-5 text-lg font-medium text-gray-700">Key Features:</h3>
            <ul className="pl-14 list-item">
              {data.features.map((feat, i) => (
                <li key={i} className="mb-2">
                  <span className="w-[6px] h-[6px] mr-2 inline-block rounded-full bg-gray-800"></span>
                  {feat}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between mt-10 sm:flex-row" >
            
              <div className=" bg-second-background">
                <button type="submit" onClick={decreament}
                  className="w-8 h-8 text-xl border border-gray-300 sm:w-10 sm:h-10">
                  -
                </button>
                <input type="text" value={count} onChange={setNum} className="w-8 h-8 p-3 text-center border sm:w-10 sm:h-10 border-gray-3 focus:outline-none" />
                <button onClick={increament} className="w-8 h-8 text-xl border sm:w-10 sm:h-10 border-gray-3">+</button>
              </div>
            
            <button className="flex items-center justify-center h-8 px-3 text-lg font-semibold rounded-md sm:px-5 sm:h-10 bg-main-blue hover:bg-blue-500 hover:bg-main-blue-300 text-main-white" onClick={submitHandler} >add to cart</button>
          </div>
        </div>
        </section>
        <section className=" gap-5">
          <div className="flex gap-5">
            <h1 className={`mt-3 w-fit pb-1 mb-6 text-xl font-bold text-gray-80 cursor-pointer 
            ${toggleU === "D" ? "border-b-[3px] border-b-main-blue" : ""}`} onClick={() => setToggleU("D")}>Discription</h1>
            <h1 className={`mt-3 mb-6 text-xl font-bold text-gray-800 
            cursor-pointer pb-1 w-fit ${toggleU === "R" ? "border-b-[3px] border-b-main-blue":""}`} onClick={() => setToggleU("R")}>Reviews {"(0)"}</h1>
          </div>
          <Discription toggleU={toggleU} setToggleU={setToggleU} />
          <Reviews toggleU={toggleU} setToggleU={setToggleU} />
        </section>
        <section>
          <RelatedProducts mainProduct={data} />
        </section>
      </div>
    </section>
  )
}

export default ProductPage
