
const Discription = ({toggleU,setToggleU}) => {
  return (
    
    <section className=''>
      {(toggleU === "D") && (
        <div className="">
          <h2 className="text-3xl font-bold mb-4">More about this product</h2>
          <p className="text-lg font-semibold text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ipsa, explicabo voluptatem voluptatum illo atque dolore reiciendis quidem nam architecto quod ipsum nobis. Numquam voluptatibus fugit error rerum </p>
          <div className=" bg-productDisc  bg-cover text-white h-[400px] mt-5">
            <div className=" gradient h-full flex-col flex justify-end p-14 text-center">
              <h4 className="text-lg font-semibold">more details</h4>
              <p className="text-3xl font-bold max-sm:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perferendis voluptatibus possimus, asperiores dicta officia obcaecati </p>
            </div>
          </div>
      </div>)}
    </section>
  )
}

export default Discription
