import { useState } from "react";
import ArrowDown from "../../assets/arrow-down.svg";
import ArrowUp from "../../assets/arrow-up.svg";

interface DropdownProps {
  placeholder?: string;
  onSelect?: (value: string) => void;
  dropdownItems: string[];
}

export default function Dropdown({ placeholder, dropdownItems }: DropdownProps) {
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const handleClick = () => {
    setVisible((prev) => !prev);
  };

  const handleDropdownItemClick = (value: string) => {
    setSelectedItem(value);
    handleClick();
  };

  return (
    <div className="relative">
      <div
        tabIndex={0}
        className="flex flex-row items-center justify-between w-[422px] max-md:w-[100%] px-[10px] py-[14px] border-[1px] border-[#D6D6D6] rounded-md outline-none font-nunito focus:border-primary"
        onClick={handleClick}
      >
        {selectedItem ? (
          <div className="text-base">{selectedItem}</div>
        ) : (
          <div className=" text-[#BBB] text-base">{placeholder}</div>
        )}
        {visible ? <img src={ArrowUp} /> : <img src={ArrowDown} alt="arrow-down" />}
      </div>

      {visible && (
        <div className="absolute w-[100%] top-16 z-10 bg-white min-h-[100px] max-h-[250px] overflow-auto flex flex-col gap-2 px-6 py-4 border-[1px] border-[#D6D6D6] rounded-md cursor-pointer">
          {dropdownItems.map((dropdown, i) => (
            <div
              className="w-[100%] hover:bg-[#E9F6F2] rounded-md p-3 font-nunito text-[#2B2B2B]"
              key={`dropdown-${i}`}
              onClick={() => handleDropdownItemClick(dropdown)}
            >
              {dropdown}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
