import AddButton from "../../components/Menu/AddButton";
import MenuItem from "../../components/Menu/MenuItem";
import TopBar from "../../components/Menu/TopBar";
import RiceImg from "../../assets/foods/rice.svg";
import PastaImg from "../../assets/foods/pasta.svg";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { id: 1, name: "Rice", items: 6, image: RiceImg },
  { id: 2, name: "Pasta", items: 9, image: PastaImg },
  { id: 3, name: "Soups", items: 20, image: RiceImg },
  { id: 4, name: "Stew", items: 6, image: PastaImg },
  { id: 5, name: "Sides", items: 4, image: RiceImg },
  { id: 6, name: "Drinks", items: 23, image: PastaImg },
  { id: 7, name: "Pepper Soup", items: 4, image: RiceImg },
  { id: 8, name: "Proteins", items: 5, image: PastaImg },
];

export default function Menu() {
  const navigate = useNavigate();

  const handleMenuItemClick = (category: string) => {
    navigate(`/dashboard/categories/${category}`);
  };

  return (
    <div className="flex flex-col h-[100vh]">
      <TopBar />

      <div className="flex flex-col w-[100%] h-full px-16 py-6">
        <div className="flex flex-row h-[45px] w-[100%] items-center justify-between">
          <h1 className="text-primary text-[32px] font-bold">Categories</h1>

          <AddButton text="New Category" />
        </div>

        <div className="flex flex-wrap mt-10 gap-6">
          {menuItems.map((menuItem, index) => {
            const menu = { ...menuItem, subtitle: `${menuItem.items} items` };
            return (
              <MenuItem
                key={`menu-item-${index}`}
                menuItem={menu}
                onClick={() => handleMenuItemClick(menu.name)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
6;
