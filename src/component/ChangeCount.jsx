import {useDispatch } from "react-redux"
import { changeQuantity, deleteProduct } from "../features/features/cartSlice";

const ChangeCount = ({ item, i}) => {
  const dispatch = useDispatch();
  const increament = (index) => dispatch(changeQuantity({ itemIndex: index, sign: "+" }))
  const decreament = (index, id, quantity) => {
    quantity > 1 ?
      dispatch(changeQuantity({ itemIndex: index, sign: "-" }))
      : dispatch(deleteProduct({id}))
  }
  return (
        <div className=" bg-second-background">
            <button type="submit" onClick={() =>
              decreament(i, item.id, item.itemQuantity)}
              className="w-8 h-8 text-xl border border-gray-300">
                -
            </button>
             <input type="text" value={item.itemQuantity} onChange={()=> item.itemQuantity }  className="w-8 h-8 border border-gray-3  text-center focus:outline-none" />
            <button onClick={() => increament(i)} className="w-8 text-xl h-8 border border-gray-3">+</button>
        </div>
  )
}

export default ChangeCount
