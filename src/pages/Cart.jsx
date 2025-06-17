import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ChangeCount from "../component/ChangeCount";
import CardCart from "../component/ButtonCart";
const Cart = () => {
  const { cartItems, totalCartPrice } = useSelector(state => state.cart);
  
    if (!cartItems.length) {
        return <div className="w-full h-[calc(100vh-230px)] flex justify-center items-center text-7xl font-semibold">There are no products</div>
  }

  return (
    <section className="padding-x padding-y capitalize">
          <h2 className="text-5xl font-bold text-slate-900 mb-14">Cart</h2>
      <div className="flex gap-10 max-xl:flex-col ">
        <table className="text-xl border xl:w-2/3 h-fit">
          <thead
            className="border-b  bg-second-background text-left  text-gray-600">
            <tr>
              <th scope="col" className=" w-[150px] px-6"></th>
              <th scope="col" className=" px-6 py-4 ">product</th>
              <th scope="col" className=" px-6 py-4">price</th>
              <th scope="col" className=" px-6 py-4 w-[150px]">quantity</th>
              <th scope="col" className=" px-6 py-4">subtotla</th> 
            </tr>
          </thead>
          <tbody className="">
          {cartItems.map((item, i) => (
            <tr className="border-b dark:border-neutral-500 text-gray-500" key={i}>
              <td className="text-center px-6">
                <img src={item.image} alt="" width={100}/>
              </td>
              <td className="px-6 py-4 text-main-blue">
                <Link to={`/productPage/${item.id}`}>{item.title}</Link>
              </td>
              <td className="px-6 py-4">${item.price}.00</td>
              <td className="px-6 py-4">
                <ChangeCount item={item} i={i} />
              </td>
              <td className="px-6 py-4">${item.itemQuantity * item.price}.00</td>
          </tr>
            ))}
          </tbody>
        </table>
        
        <div className="flex-1 border xl:w-1/3 space-y-5">
          <div className="">
            <h3 className="text-xl text-gray-800 font-bold bg-second-background border px-6 py-4">cart totals</h3>
            <ul className="text-gray-500 text-xl px-6 py-4 ">
              <li className="border-b flex justify-between">
                <span className="p-4">subtotal</span>
                <span className="p-4">${totalCartPrice}</span>
              </li>
              <li className="border-b flex justify-between">
              <span className="p-4">total</span>
              <span className="p-4">${totalCartPrice}</span>
              </li>
            </ul>
          </div>
          <div className="px-6 py-4 text-center">
            <CardCart target={"/" } text={"prossed to checkout"} />
          </div>
        </div>
        
      </div>

    </section>
  )
}

export default Cart
