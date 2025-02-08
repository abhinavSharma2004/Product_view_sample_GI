import sdg_1 from "../assets/sdg_1.png";
import sdg_2 from "../assets/sdg_2.png";
import sdg_3 from "../assets/sdg_3.png";
import sdg_4 from "../assets/sdg_4.png";
import sdg_5 from "../assets/sdg_5.png";
import sdg_6 from "../assets/sdg_6.png";
import sdg_7 from "../assets/sdg_7.png";
import sdg_8 from "../assets/sdg_8.png";
import sdg_9 from "../assets/sdg_9.png";
import sdg_10 from "../assets/sdg_10.png";
import sdg_11 from "../assets/sdg_11.png";
import sdg_12 from "../assets/sdg_12.png";
import sdg_13 from "../assets/sdg_13.png";
import sdg_14 from "../assets/sdg_14.png";
import sdg_15 from "../assets/sdg_15.png";
import sdg_16 from "../assets/sdg_16.png";
import sdg_17 from "../assets/sdg_17.png";

const sdgImages = {
  1: sdg_1,  2: sdg_2,  3: sdg_3,  4: sdg_4,  5: sdg_5,
  6: sdg_6,  7: sdg_7,  8: sdg_8,  9: sdg_9,  10: sdg_10,
  11: sdg_11, 12: sdg_12, 13: sdg_13, 14: sdg_14, 15: sdg_15,
  16: sdg_16, 17: sdg_17,
};

export default function SDGs({ sdgList }) {
  return (
    <div className="px-4">
      <h1 className="font-bold text-2xl text-[#1DA5B1]" > Sustainable Development Goals completed </h1>
      <div className="py-2 w-full overflow-x-auto whitespace-nowrap" style={{ scrollbarWidth: "none" }}>
      <div className="flex flex-row gap-4">
        {sdgList.map((num, index) => (
          <img
            key={index}
            src={sdgImages[num]}
            alt={`SDG ${num}`}
            className="w-[100px] h-[100px] object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
    </div>
    
  );
}


