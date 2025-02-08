import { useState } from "react";
import Spacer from "./Spacer";
import Farmer from "../assets/01_farmer.svg";
import Trader from "../assets/02_trader.svg";
import Mill from "../assets/03_mill.svg";
import Manu from "../assets/04_manufacturing.svg";
import Pack from "../assets/05_packaging.svg";
import Brand from "../assets/06_Brand.svg";

// eslint-disable-next-line react/prop-types
export default function Journey({ items }) {
  const [isOpen, setIsOpen] = useState(false);

  const icons = {
    Farmer: Farmer,
    Trader: Trader,
    Miller: Mill,
    Manufacturing: Manu,
    Packaging: Pack,
    Brand: Brand,
  };

  return (
    <div className="px-6 w-full max-w mx-auto">
      {/* Bar */}
      <div
        className="flex items-center justify-between py-2 rounded-lg cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-2xl text-red-400 font-bold">Journey</h2>
        <i
          className={`fa-solid text-red-400 ${
            isOpen ? "fa-chevron-up" : "fa-chevron-down"
          }`}
        ></i>
      </div>

      {/* List */}
      <div
        className={`transition-all duration-300 ${
          isOpen ? "max-h opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <ul className="p-2 mt-2 bg-red-30 rounded-lg">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center px-4 py-2 border-b border-white last:border-none"
            >
              <div className="flex flex-col">
                <span className="text-red-400 text-xl">{item.asset}</span>
                <text className="text-sm px-2"> Firms : {item.firms}</text>
                <text className="text-sm px-2">
                  {" "}
                  Activity : {item.activity}
                </text>
              </div>
              <img
                key={index}
                src={icons[item.activity]}
                className="w-[50px] h-[50px] object-cover rounded-lg"
              />
            </li>
          ))}
        </ul>
      </div>
      <Spacer />
      <div className="h-[2px] w-[100%] bg-red-400"></div>
    </div>
  );
}
