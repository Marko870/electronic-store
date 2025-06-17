import { minuItems } from "../constants";
import { KeyboardArrowDown } from "@mui/icons-material"
import { useState } from "react";
import { Link } from "react-router-dom";
const HeaderList = ({toggleMinu,toggleMain}) => {
  const [toggleCategorys, setToggleCategorys] = useState(false);
  const toggleSubMinu = (item) => {
    if (item.subMinu) setToggleCategorys(!toggleCategorys);
    else toggleMain();
  }
  
  return (
  <div className={" capitalize"}>
      <ul className={`sm:flex block justify-between  items-center
       sm:text-white sm:text-lg sm:static absolute duration-300
       left-0 max-sm:bg-[#f9f9f9] text-main-blue opacity-100 z-20
       ${toggleMinu ? "max-sm:opacity-0 -z-50 top-[60px]" : "top-[70px]"}
       `}> 
      {minuItems.map((item) => (
      <li key={item.id} className={`${item.subMinu? "group" : "" } relative max-sm:w-screen  py-2 pl-6`}>
          <a href={item.link} className="block sm:p-0 " onClick={() => {
            toggleSubMinu(item);
          }}>
            {item.title}
            {item.subMinu && (<KeyboardArrowDown />)}
          </a>
          
          {item.subMinu && (
            <ul className={`sm:bg-main-blue  max-sm:ml-9
               sm:absolute static  group-hover:opacity-100 sm:-z-50 group-hover:z-[200] top-[20px]
               group-hover:top-[40px] duration-300 sm:opacity-0 ${toggleCategorys ? "block" : "max-sm:hidden"}`}>
              {item.subMinu.map((subItem,index) => (
                <li key={index} className="p-3 ">
                  <Link to={`/categroyPage/${subItem.title}`} className="w-[200px] block" onClick={toggleMain}>{subItem.title}</Link>
                </li>
              ))}
            </ul>
          )}
      </li>
      ))}
    </ul>
    </div>
  )
}

export default HeaderList
