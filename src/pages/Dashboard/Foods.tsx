import { useParams } from "react-router-dom";
import TopBar from "../../components/Menu/TopBar";
import AddButton from "../../components/Menu/AddButton";
import MenuItem from "../../components/Menu/MenuItem";
import RiceImg from "../../assets/foods/rice.svg";

const foodItems = [
  { id: 1, name: "Jollof Rice", price: "₦1,700.00", image: RiceImg },
  { id: 2, name: "Fried Rice", price: "₦1,800.00", image: RiceImg },
];

export default function Foods() {
  const params = useParams();

  const handleMenuItemClick = (selectedFood: string) => {
    console.log(selectedFood);
  };

  return (
    <div className="flex flex-col w-full h-full">
      <TopBar />

      <div className="flex flex-col w-[100%] h-full px-16 py-6">
        <div className="flex flex-row h-[45px] w-[100%] items-center justify-between">
          <h1 className="text-primary text-[32px] font-bold">{params?.categoryId}</h1>

          <AddButton text="Add Food Item" />
        </div>

        <div className="flex flex-wrap mt-10 gap-6">
          {foodItems.map((foodItem, index) => {
            const food = { ...foodItem, subtitle: `${foodItem.price}` };
            return (
              <MenuItem
                key={`menu-item-${index}`}
                menuItem={food}
                onClick={() => handleMenuItemClick(food.name)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
