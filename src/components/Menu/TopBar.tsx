import Button from "../Button";

export default function TopBar() {
  return (
    <div className="flex flex-row justify-between items-center w-[100%] px-16 h-[80px] bg-white">
      <h1 className="text-gray font-nunito text-[20px]">Main Menu</h1>

      <div className="flex flex-row gap-3">
        <Button inverted width="121px" height="100px">
          Save Changes
        </Button>
        <Button width="121px" height="50px">
          Publish
        </Button>
      </div>
    </div>
  );
}
