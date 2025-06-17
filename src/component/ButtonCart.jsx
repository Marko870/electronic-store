import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { showOffOnCart } from "../features/features/cartSlice";
const ButtonCart = ({ target,text }) => {
    const dispatch = useDispatch();
  return (
    
      <Link to={`${target}`} onClick={() => dispatch(showOffOnCart())} className=" cursor-pointer text-white text-xl font-semibold bg-slate-800 mb-3 last:mb-0 hover:bg-main-blue p-2 block ">{text}</Link>
        
  )
}

export default ButtonCart