import Spacer from "./Spacer.jsx";
import co2 from "../assets/co2.png";
import maggi from "../assets/maggi_product.png";

const ProductInfo = ({ name, price, description, sdgs, id }) => {
  return (
    <div className="flex flex-col h-fit w-full items-center p-6">
      <div className="bg-white flex flex-col sm:flex-row items-center p-4">
        <div className="w-64 h-64 bg-gray-300 mb-4 sm:mb-0 sm:mr-6">
          <img
            src={maggi}
            alt={"maggi_product.png"}
            className="object-cover rounded-lg shadow-md"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-[#1DA5B1]">{name}</h1>
          <p className="text-red-400">Price : {price}</p>
          <p className="text-black mt-2">{description}</p>
          <h2 className="mt-4 font-bold text-red-400">CO2 reductions</h2>
          <div className="flex flex-row gap-1">
            <img src={co2} alt="Description" />
            <p className="text-black text-md">{sdgs}</p>
          </div>
          <p className="mt-2 text-gray-600">Batch no: {id}</p>
        </div>
      </div>
      <Spacer />
      <div className="h-[2px] w-[100%] bg-red-400"></div>
    </div>
  );
};

export default ProductInfo;
