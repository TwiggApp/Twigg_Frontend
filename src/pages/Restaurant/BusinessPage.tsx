import Button from "../../components/Button";
import { IBusiness, ICloudinaryFile } from "../../types/auth";

interface BusinessPageProps {
  goToNextScreen: () => void;
  business: IBusiness;
}

export default function BusinessPage({ goToNextScreen, business }: BusinessPageProps) {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <div className="mx-8 flex flex-col items-center w-full">
        <img
          className="w-[200px] h-[200px] -translate-y-20"
          src={(business.logo as ICloudinaryFile).secure_url}
          alt="restaurant-image"
        />
        <h1 className="text-[32px] text-center mb-12">Welcome to {business.name}</h1>
        <div className="w-full">
          <Button onClick={() => goToNextScreen()}>Go to menu</Button>
        </div>
      </div>
    </div>
  );
}
