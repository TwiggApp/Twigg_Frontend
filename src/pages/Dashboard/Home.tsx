import NoMenuSvg from "../../assets/dashboard/no-menu.svg";
import AddMenuSvg from "../../assets/dashboard/add-menu.svg";
import Button from "../../components/Button";
import MenuCard from "../../components/Menu/MenuCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const menuItems = [
  { id: 1, name: "Main menu", categories: 5, items: 20, date: new Date() },
  { id: 2, name: "Kids menu", categories: 5, items: 20, date: new Date() },
];

function NoMenuItem({ onButtonClick }: { onButtonClick: () => void }) {
  return (
    <div className="flex h-[100%] w-[100%] items-center justify-center">
      <div className="-translate-y-48 flex flex-col gap-12 items-center justify-center min-w-[500px]">
        <img src={NoMenuSvg} alt="No Menu" />
        <div className="text-center">
          <h1 className="text-[32px] font-bold text-primary mb-2">No menus yet</h1>
          <p className="font-nunito text-[#555]">The menus you create will show up here</p>
        </div>
        <Button width={"280px"} onClick={onButtonClick}>
          Create menu
        </Button>
      </div>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();

  const [items, setItems] = useState<
    { id: number; name: string; categories: number; items: number; date: Date }[]
  >([]);

  const handleMenuItemClick = () => {
    navigate("/dashboard/categories");
  };

  return (
    <div className="flex h-[100vh]">
      {items.length === 0 ? (
        <NoMenuItem onButtonClick={() => setItems([...items, menuItems[0]])} />
      ) : (
        <div className="h-[100%] w-[100%] px-16 pt-16">
          <h1 className="text-primary text-[32px] font-bold">Dashboard</h1>
          <p className="font-nunito text-[#555]">Effortlessly create, manage, and share menus</p>

          <h2 className="text-[20px] text-[#555] font-nunito mt-16">Your menus</h2>

          <div className="flex flex-row flex-wrap mt-6 gap-4">
            {menuItems.map((menuItem, index) => (
              <MenuCard
                name={menuItem.name}
                categories={menuItem.categories}
                items={menuItem.items}
                date={menuItem.date}
                key={`menu-card-${index}`}
                onClick={handleMenuItemClick}
              />
            ))}

            <div className="w-[232px] h-[177px] bg-[#E9F6F2] flex flex-col items-center justify-center rounded-md cursor-pointer">
              <img src={AddMenuSvg} alt="add-menu-icon" />
              <p className="font-nunito mt-4 text-[#555] text-[18px]">New Menu</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
