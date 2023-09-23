import MenuIcon from "../../assets/dashboard/menu-icon.svg";
import Dots from "../../assets/dashboard/dots.svg";

interface MenuCardProps {
  name: string;
  categories: number;
  items: number;
  date: Date;
  onClick?: () => void;
}

export default function MenuCard({ name, categories, items, onClick }: MenuCardProps) {
  return (
    <div
      className="w-[232px] h-[177px] bg-white rounded-md shadow-sm p-4 flex flex-col justify-between cursor-pointer"
      onClick={() => {
        onClick && onClick();
      }}
    >
      <div className="flex flex-row justify-between">
        <div className="p-1 cursor-pointer rounded-md bg-[#E2F3EE]">
          <img src={MenuIcon} alt="menu-icon" />
        </div>

        <div className="cursor-pointer z-10" onClick={() => console.log("CASECADE")}>
          <img src={Dots} alt="dots" />
        </div>
      </div>

      <h1 className="text-[18px] text-[#555] font-nunito">{name}</h1>

      <div className="flex items-center">
        <p className="text-[14px] font-nunito text-[#558978]">{categories} Categories</p>
        <span className="h-[15px] w-[1px] mx-2 bg-primary block"></span>
        <p className="text-[14px] font-nunito text-[#558978]">{items} items</p>
      </div>

      <p className="font-nunito text-[12px] text-[#999]">Created on Sep 20, 2023</p>
    </div>
  );
}
