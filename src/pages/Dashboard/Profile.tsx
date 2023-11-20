import BinSvg from "../../assets/profile/bin.svg";
import PencilSvg from "../../assets/profile/pencil.svg";
import Button from "../../components/Button";
import { useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";

function Divider() {
  return <div className="w-full h-[2px] my-12 bg-[#F0F0F0]"></div>;
}

export default function Profile() {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  return (
    <>
      <div className="h-[100vh] max-h-[100vh] overflow-auto w-[100%] px-16 py-14 max-md:px-12 max-md:py-6 max-md:pb-40 bg-white">
        <div className="flex flex-row w-full h-[45px] items-center justify-between mb-4">
          <h1 className="text-primary text-[32px] max-md:text-[26px] font-bold">Your Profile</h1>
        </div>

        {/* Business Logo */}
        <div className="mt-10">
          <p className="font-nunito text-[#555] mb-4">Business Logo</p>
          <div className="flex items-center gap-12">
            <div className="w-[60px] h-[60px]">
              <img
                src={user?.logo?.secure_url}
                alt="user logo"
                className="h-full w-full object-contain rounded-full"
              />
            </div>
            <div className="flex gap-2">
              <Button height="40px" width="110px">
                Upload new
              </Button>
              <button className="flex items-center justify-center bg-[#F0F0F0] text-[#999] w-[180px] h-[42px] gap-2 rounded-md">
                <img src={BinSvg} alt="waste-bin" />
                <p>Remove photo</p>
              </button>
            </div>
          </div>
        </div>

        {/* Background Image */}
        <div className="mt-10">
          <p className="font-nunito text-[#555] mb-4">Background Image</p>
          <div className="flex items-center gap-12">
            <div className="w-[60px] h-[60px]">
              <img
                src={user?.logo?.secure_url}
                alt="user logo"
                className="h-full w-full object-contain rounded-full"
              />
            </div>
            <div className="flex gap-2">
              <Button height="40px" width="110px">
                Upload new
              </Button>
              <button className="flex items-center justify-center bg-[#F0F0F0] text-[#999] w-[180px] h-[42px] gap-2 rounded-md">
                <img src={BinSvg} alt="waste-bin" />
                <p>Remove photo</p>
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <Divider />

        {/* Business Details */}
        <div>
          <div className="flex flex-row items-center gap-8">
            <h1 className="text-primary text-[28px] max-md:text-[22px] font-bold">
              Business Details
            </h1>
            <button
              onClick={() => navigate("/edit/business-details")}
              className="flex w-[98px] h-[40px] border border-[#DBDBDB] rounded-full items-center justify-center gap-3"
            >
              <img src={PencilSvg} alt="" />
              <p className="font-nunito text-[#555]">Edit</p>
            </button>
          </div>

          <div className="flex flex-wrap gap-12 max-w-[700px] mt-6">
            <div className="min-w-[180px] p-2">
              <p className="font-nunito text-[#555] mb-2">Business Name</p>
              <p className="font-nunito">{user?.name}</p>
            </div>

            <div className="min-w-[180px] p-2">
              <p className="font-nunito text-[#555] mb-2">Business Email</p>
              <p className="font-nunito">{user?.email}</p>
            </div>

            <div className="min-w-[180px] p-2">
              <p className="font-nunito text-[#555] mb-2">Country</p>
              <p className="font-nunito">{user?.country as string}</p>
            </div>

            <div className="min-w-[180px] p-2">
              <p className="font-nunito text-[#555] mb-2">State</p>
              <p className="font-nunito">{user?.state}</p>
            </div>

            <div className="min-w-[180px] p-2">
              <p className="font-nunito text-[#555] mb-2">Business Phone Number</p>
              <p className="font-nunito">{user?.phoneNumber}</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <Divider />

        {/* Contact Details */}
        <div>
          <div className="flex flex-row items-center gap-8">
            <h1 className="text-primary text-[28px] max-md:text-[22px] font-bold">
              Contact Details
            </h1>
            <button className="flex w-[98px] h-[40px] border border-[#DBDBDB] rounded-full items-center justify-center gap-3">
              <img src={PencilSvg} alt="" />
              <p className="font-nunito text-[#555]">Edit</p>
            </button>
          </div>

          <div className="flex flex-wrap gap-12 max-w-[700px] mt-6">
            <div className="min-w-[180px] p-2">
              <p className="font-nunito text-[#555] mb-2">Ownership</p>
              <p className="font-nunito">Owner</p>
            </div>

            <div className="min-w-[180px] p-2">
              <p className="font-nunito text-[#555] mb-2">Full Name</p>
              <p className="font-nunito">{user?.name}</p>
            </div>

            <div className="min-w-[180px] p-2">
              <p className="font-nunito text-[#555] mb-2">Email Address</p>
              <p className="font-nunito">{user?.email}</p>
            </div>

            <div className="min-w-[180px] p-2">
              <p className="font-nunito text-[#555] mb-2">Phone Number</p>
              <p className="font-nunito">+234 808 886 6150</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <Divider />

        {/* Social Media */}
        <div>
          <div className="flex flex-row items-center gap-8">
            <h1 className="text-primary text-[28px] max-md:text-[22px] font-bold">Social Media</h1>
            <button className="flex w-[98px] h-[40px] border border-[#DBDBDB] rounded-full items-center justify-center gap-3">
              <img src={PencilSvg} alt="" />
              <p className="font-nunito text-[#555]">Edit</p>
            </button>
          </div>

          <div className="flex flex-wrap gap-10 max-w-[700px] mt-6">
            <div className="min-w-[180px] p-2">
              <p className="font-nunito text-[#555] mb-2">Instagram Handle</p>
              <p className="font-nunito ">{user?.instagram}</p>
            </div>

            <div className="min-w-[180px] p-2">
              <p className="font-nunito text-[#555] mb-2">WhatsApp Number</p>
              <p className="font-nunito">{user?.whatsapp}</p>
            </div>

            <div className="min-w-[180px] p-2">
              <p className="font-nunito text-[#555] mb-2">TikTok Handle</p>
              <p className="font-nunito">{user?.tiktok}</p>
            </div>

            <div className="min-w-[180px] p-2">
              <p className="font-nunito text-[#555] mb-2">Facebook Handle</p>
              <p className="font-nunito">{user?.facebook}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
