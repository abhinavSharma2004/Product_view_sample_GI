import { FarmerZeroOne } from "./icons";
import Farmer from "../assets/01_farmer.svg";
import Trader from "../assets/02_trader.svg";
import Mill from "../assets/03_mill.svg";
import Manu from "../assets/04_manufacturing.svg";
import Pack from "../assets/05_packaging.svg";
import Brand from "../assets/06_Brand.svg";

const HowItsMade = ({ items }) => {
  const icons = {
    Farmer: Farmer,
    Trader: Trader,
    Miller: Mill,
    Manufacturing: Manu,
    Packaging: Pack,
    Brand: Brand,
  };

  return (
    <div className="px-6 py-4 space-y-4">
      <h2 className="text-2xl font-bold text-red-400">Supply Chain</h2>
      <div
        className="overflow-x-auto whitespace-nowrap"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex mt-2 gap-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="text-center flex-shrink-0 flex items-center gap-2"
            >
              <div>
                <img
                  key={index}
                  src={icons[item.activity]}
                  className="w-[75px] h-[75px] object-cover rounded-lg"
                />
                <p>{item.activity}</p>
              </div>
              {index !== items.length - 1 && (
                <i className="fa-solid fa-arrow-right text-red-400 text-3xl"></i>
                // <FarmerZeroOne />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItsMade;
