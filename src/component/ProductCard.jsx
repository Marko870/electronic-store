import { Link } from "react-router-dom"
import { StarBorder} from "@mui/icons-material"

const ProductCard = ({ product}) => {
    const stars = [1, 2, 3, 4, 5]
    
    
    return (
        <Link to={`/productPage/${product.id}`} className="block max-sm:w- max-w-[240px] animate-slidedown">
            <div className="relative">
                <img src={product.image} alt="" />
                <span className=" absolute bg-main-white rounded-full px-3 py-1 text-gray-600 font-semibold top-[7%] left-[7%] shadow-xl "> Sale!</span>
            </div>
            <div className="p-4">
                <ul className="flex">
                    {stars.map((el, index) => (
                        <li key={index}><StarBorder sx={{ color: "#ffd200" }} fontSize="small" /></li>
                    ))}
                </ul>
                <p className="mt-3 mb-3 text-lg font-bold text-gray-700">{product.title}</p>
                <p className="text-lg font-bold text-gray-500">${product.price}</p>
            </div>
        </Link>
    )
}

export default ProductCard
