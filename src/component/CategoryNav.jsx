import { Link } from "react-router-dom"
import { categoryies } from "../constants"
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useState } from "react";

const CategoryNav = () => {
  const [showNav, setShowNav] = useState(false);
  const [heitScroll, setHeitScroll] = useState(false);
  const toggleShow = () => setShowNav(!showNav);

  let catPage = document.getElementById("catPage")?.scrollHeight;
  let main = document.getElementById("main")?.scrollHeight;
  let footerPart = document.getElementById("footerPart")?.scrollHeight;
  console.log(footerPart)
  window.addEventListener("scroll", () => {
    
    if (window.scrollY >= main - catPage - footerPart) {
      setHeitScroll(true);
      
    }
    else setHeitScroll(false);
  })
  return (
    <nav className={`${showNav ? "left-[20px]" : "-left-[230px] sm:-left-[270px]"}   max-lg:pt-10 duration-300 z-30 pr-10  border-r-4 border-r-main-background lg:sticky lg:block bg-main-white  lg:top-7
    max-lg:h-screen ${heitScroll ? "fixed" : " absolute"} top-0  lg:h-full duration-300`} id="nav">
       
      <div className="relative">   
      <button className="absolute right-[-40%] sm:right-[-60%] top-[88%] lg:hidden" onClick={toggleShow}>
          <AddBoxIcon fontSize="large" className=" text-main-blue bg-main-white"/>
      </button>
          <h2 className="mb-20 text-2xl font-semibold">Categories</h2>
          <ul  className="pl-8 text-gray-500 ">
            {categoryies.map((cat, index) => ( 
              <li key={index} className="mb-5 text-lg font-semibold">
                <Link to={`/categroyPage/${cat.title}`}  >
                {cat.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="pb-32 text-2xl font-semibold mt-14">filter by price</h2>
        </div>
    </nav>
  )
}

export default CategoryNav
