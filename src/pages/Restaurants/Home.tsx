import { useParams } from "react-router-dom";
import RestaurantSvg from "../../assets/foods/pasta.svg";

// <div className="w-full h-screen flex items-center justify-center bg-white">
//   <div className="mx-8">
//     <h1 className="text-[32px] text-center mb-12">Welcome to Restaurant Name</h1>
//     <Button>Go to menu</Button>
//   </div>
// </div>

function FoodItem() {
  return (
    <div className="flex gap-3 p-4 bg-white border-b-[1px] border-gray-200">
      <div className="w-[102px] h-[102px] rounded-md overflow-hidden">
        <img src={RestaurantSvg} alt="food image" className="object-cover w-full h-full" />
      </div>
      <div className="flex flex-col justify-evenly">
        <h1 className="text-[22px]">Jollof Rice</h1>
        <p className="font-nunito text-primary">₦1500</p>
      </div>
    </div>
  );
}

export default function Home() {
  const params = useParams();

  console.log(params);

  return (
    <div>
      <div className="px-4 py-4">
        <div className="w-[32px] h-[32px] rounded-md bg-green-200"></div>
      </div>
      <div className="h-[186px] w-screen overflow-hidden">
        <img src={RestaurantSvg} alt="menu image" className="w-full h-full object-cover" />
      </div>

      {/* Horizontal scroll menu */}
      <div className="flex gap-2 my-6">
        <div className="px-[10px] py-[6px] hover:bg-green-200 font-nunito">Rice</div>
      </div>

      {/* Vertical scroll menu */}
      <FoodItem />
      <FoodItem />
      <FoodItem />
      <FoodItem />
      <FoodItem />
      <FoodItem />
    </div>
  );
}
