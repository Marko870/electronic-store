import ChangeCount from "./ChangeCount";
import { deleteProduct } from "../features/features/cartSlice";
const SideBarCartItem = ({ item,dispatch,i }) => {
  const deleteItem = (id) => dispatch(deleteProduct({id}))
  return (
    <li className="flex relative pt-7 pb-7 first:pt-0 border-b justify-between items-center gap-5" >
    <button className="border rounded-full px-2
     hover:bg-red-500 hover:text-white" onClick={() => deleteItem(item.id)}>X</button>
    <div className="flex items-center">
      <img src={item.image} alt={item.title} className=" object-contain" />
    </div> 
    <div className="flex flex-col justify-between">
      <p className=" md:text-xl">{item.title}</p>
      <div className="flex justify-between mt-5">
        <span className="md:text-xl">${item.price * item.itemQuantity}</span>
        <ChangeCount item={item} i={i} />
      </div>
    </div>
  </li>
  )
}

export default SideBarCartItem
