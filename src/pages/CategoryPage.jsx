import { useParams } from "react-router"
import { useGetProductsByCategoryQuery } from "../features/services/ecommerceApi";
import ProductCard from "../component/ProductCard";
import CategoryNav from "../component/CategoryNav";
import { useEffect, useState } from "react";
const CategoryPage = () => {
  const { category } = useParams();
  const [select, setSelect] = useState();
  const { data } = useGetProductsByCategoryQuery(category);
  const [sortedProducts, setSortedProducts] = useState([])
  console.log(data);
  ///
  useEffect(() => {
    
    const sorted = data?.slice().sort((prev, next) => {
      
      if (select === "sortingZtoA") {if (prev.title > next.title) return -1;}
      else if (select === "LowToHigh")
        if (+prev.price > +next.price) return 1;
        else return -1

    });
    setSortedProducts(sorted)
  },[data,select])
//////

  return (
    <main className="relative capitalize padding-x padding-y" id="catPage">
      <section className="flex gap-24 max-w-[1440px] mx-auto ">
        <CategoryNav />
        <div className="flex-1 ">
          <div>
            <h1 className="mb-20 text-6xl font-bold text-main-blue">{category}</h1>
            <p className="text-lg font-medium leading-8 text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, quod molestias quisquam provident suscipit culpa, architecto iste libero sapiente esse perferendis laboriosam praesentium nulla at perspiciatis? Mollitia quas expedita dicta.</p>
          </div>
          <div className="flex justify-between mt-10">
            <h3 className="text-lg font-medium leading-8 text-gray-500">
              showing all {data && data.length} resultes
            </h3>
            <div>
              
              <select name="" id="" value={select} onChange={(ev) => setSelect(ev.target.value)} className="text-lg text-gray-700 capitalize max-sm:w-[160px] focus:outline-none">
                <option value="default">default sorting</option>
                <option value="sortingZtoA">sorting z-a</option>
                <option value="LowToHigh">sort by price: low to high</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap gap-10 pt-10 max-sm:justify-center">
            {sortedProducts && sortedProducts.map((product, i) => (
                <ProductCard key={i} product={product}  />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default CategoryPage
