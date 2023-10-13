import Dots from "../../assets/dashboard/dots-white.svg";

interface MenuItemProps {
  menuItem: {
    name: string;
    subtitle: string;
    image: string;
  };
  onClick?: () => void;
}

export default function MenuItem({ menuItem, onClick }: MenuItemProps) {
  return (
    <div className="bg-white w-[205px] max-sm:w-full h-[209px] rounded-md flex flex-col shadow-sm overflow-hidden relative">
      <div
        className="absolute top-1 right-1 p-2 cursor-pointer"
        onClick={() => onClick && onClick()}
      >
        <img src={Dots} alt="menu-icon" />
      </div>
      <div className="flex-1">
        <img src={menuItem.image} alt="menu-item-image" className="w-[100%] h-[100%]" />
      </div>
      <div className="flex-1 p-4">
        <h1 className="font-nunito text-[18px] text-gray">{menuItem.name}</h1>
        <p className="mt-4 font-nunito text-[14px] text-primary">{menuItem.subtitle}</p>
      </div>
    </div>
  );
}
