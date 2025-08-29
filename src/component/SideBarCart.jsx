import { useSelector,useDispatch } from "react-redux"
import {showOffOnCart } from "../features/features/cartSlice";

import CardCart from "./ButtonCart";
import SideBarCartItem from "./SideBarCartItem";
const SideBarCart = () => {
  let { showCart, cartItems,totalCartPrice } = useSelector((state) => state.cart)
  const dispatch = useDispatch();
  const showHide = () => dispatch(showOffOnCart())
  console.log(cartItems)
  return (
    <div className="text-gray-500">
      <div className={`w-screen min-h-screen z-40 fixed  bg-black bg-opacity-70 top-0 right-0 cursor-pointer ${showCart ? "block" : "hidden"} `} onClick={showHide}> 
      </div>
      <div className={` lg:w-2/5 sm:w-1/2 z-50 w-full capitalize h-full bg-white 
        fixed -right-full top-0 duration-200 ease-linear ${showCart && ("right-0")}
          `}>
        <div className="flex justify-between p-8 border-b ">
          <h3 className="text-lg ">shopping cart</h3>
          <span className="text-xl font-bold text-gray-700 rounded-sm cursor-pointer " onClick={showHide}>X</span> 
        </div>
        <hr />
        <div className="p-8 max-w-full flex flex-col justify-between h-[88%] ">
          <div className="overflow-y-scroll">
              {cartItems.length ? (
               <ul>
                  {
                    cartItems.map((item, i) => (
                   <SideBarCartItem key={i} item={item} dispatch={dispatch } i={i} />
                   ))}
                </ul>
              ) :
                <div>there is no products added</div>
              }
          </div>
         
          <div>
          <div className="flex justify-between p-3 border-t">
          <span className="text-xl">Subtotal:</span>
          <span className="text-xl">${totalCartPrice}</span>
        </div>
        <div className="flex flex-col p-4 text-xl text-center text-white border-t">
              <CardCart target={ "/cart"} text={"view cart"}/>
              <CardCart target={ "/cart"} text={"check out"} />
        </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default SideBarCart
