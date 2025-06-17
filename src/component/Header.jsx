/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Logo from "../assets/electronic-store-logo.svg";
import { Dehaze, Search, LocalMall } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTotals, showOffOnCart } from "../features/features/cartSlice";
import { SideBarCart, HeaderList } from "./index"

const Header = () => { 
  const [toggleMinu, setToggleMinu] = useState(true)
  const dispatch = useDispatch()
  const { totalCartQuantity, cartItems } = useSelector(state => state.cart);
  const toggleMain = () => {
    setToggleMinu(!toggleMinu)
  }
  useEffect(() => {
    dispatch(getTotals())
  }, [dispatch, cartItems])
  
  return (
    <header className=" bg-main-blue">
      <div className="padding-x relative max-sm:flex max-sm:justify-between xl:max-w-[1440px] mx-auto">
        <section className="flex flex-row items-center justify-between py-5 ">
        <div className="flex items-center">
          <div className="block sm:hidden">
            <Dehaze className="pr-4 cursor-pointer  text-main-white" fontSize="large"
            onClick={toggleMain} />
          </div>
            <Link to={"/"}>
              <img src={Logo} alt="" className="max-sm:w-[100px] w-[130px]" />
            </Link>
        </div>
        <div className="flex flex-row gap-2 max-sm:hidden ">
          <input type="text" className=" min-w-[300px] h-12 py-4 pl-4 rounded-md " placeholder="Search Product..."/>
            <button className="">
              <Search sx={{ color: "white", fontSize: "30px" }} />
            </button>
        </div>
      </section>
      <hr className="max-sm:hidden relative w-full  border-main-line"/>
      <section className="flex justify-between py-3 font-semibold md:gap-24 sm:gap-12">
        <div className="flex-1">
            <HeaderList toggleMinu={toggleMinu} toggleMain={toggleMain } />
        </div>
        <div className="flex items-center justify-between text-main-white">
            <div className="pr-2 border-r relative sm:pr-5 border-main-line ">
              <LocalMall color="white"  sx={{ fontSize: { xs: 24, sm: 27 },cursor: "pointer" }}
                onClick={() => dispatch(showOffOnCart())} />
              <span className="rounded-full bg-main-white left-[19px] -top-4 px-2 text-main-blue absolute">{ totalCartQuantity}</span>
              <SideBarCart />
            </div>
          <Link to={"/LogIn"} className="pl-2 sm:pl-5 md:text-lg">Log In</Link>
        </div>
      </section>
      </div> 
    </header>
  )
}

export default Header
