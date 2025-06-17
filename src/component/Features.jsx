import { features } from "../constants"
const Features = () => {
  return (
    <section className="padding-x max-lg:padding-y max-lg:bg-gray-100 lg:mb-10">
          <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 border border-gray-300 lg:-mt-7 bg-main-white max-w-[1440px] mx-auto">
              {features.map((feature,index) => (
                  <div key={index} className=" p-8 flex ">
                      <div className="text-main-blue flex items-center ">
                          <feature.icon sx={{fontSize: "30px"}} />
                      </div>
                      <div className="pl-4">
                        <h2 className="font-bold text-sm">{ feature.title}</h2>
                        <p className="text-gray-500 text-sm">{ feature.subtitle}</p>
                      </div>
                  </div>
              ))}
          </div>
    </section>
  )
}

export default Features
