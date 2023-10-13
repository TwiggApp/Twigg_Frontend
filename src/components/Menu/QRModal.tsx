import QRCode from "react-qr-code";
import Modal from "../Modals/Modal";
import ModalHeader from "../Modals/ModalHeader";
import Button from "../Button";
import { useAppSelector } from "../../redux/hooks";

const CheckSvg = () => {
  return (
    <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        width="30.1538"
        height="30.1538"
        transform="translate(0.876953 0.184616)"
        fill="white"
      />
      <mask id="mask0_549_190" maskUnits="userSpaceOnUse" x="2" y="1" width="28" height="29">
        <path
          d="M15.9547 27.8256C17.605 27.8278 19.2394 27.5038 20.764 26.8722C22.2887 26.2407 23.6734 25.3141 24.8388 24.1456C26.0073 22.9802 26.9339 21.5955 27.5654 20.0708C28.197 18.5462 28.521 16.9118 28.5188 15.2615C28.5209 13.6113 28.1969 11.9769 27.5654 10.4523C26.9338 8.92764 26.0072 7.54285 24.8388 6.37746C23.6734 5.20902 22.2887 4.2824 20.764 3.65085C19.2394 3.01931 17.605 2.6953 15.9547 2.69744C14.3045 2.69533 12.6701 3.01936 11.1455 3.6509C9.62084 4.28244 8.23605 5.20905 7.07066 6.37746C5.90224 7.54285 4.97564 8.92764 4.3441 10.4523C3.71256 11.9769 3.38853 13.6113 3.39064 15.2615C3.3885 16.9118 3.71251 18.5462 4.34405 20.0708C4.9756 21.5955 5.90222 22.9802 7.07066 24.1456C8.23605 25.314 9.62084 26.2406 11.1455 26.8722C12.6701 27.5037 14.3045 27.8277 15.9547 27.8256Z"
          fill="white"
          stroke="white"
          stroke-width="2.51282"
          stroke-linejoin="round"
        />
        <path
          d="M10.9297 15.2615L14.6989 19.0308L22.2374 11.4923"
          stroke="black"
          stroke-width="2.51282"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </mask>
      <g mask="url(#mask0_549_190)">
        <path d="M0.876953 0.18462H31.0308V30.3385H0.876953V0.18462Z" fill="#2B6C57" />
      </g>
    </svg>
  );
};

interface QRModalProps {
  visible: boolean;
  setModalVisible: (value: boolean) => void;
}

export default function QRModal({ visible, setModalVisible }: QRModalProps) {
  const { user } = useAppSelector((state) => state.auth);
  const { selectedMenu } = useAppSelector((state) => state.menu);

  return (
    <Modal visible={visible} setModalVisible={setModalVisible}>
      <div className="w-[482px] max-md:w-screen h-[513px] max-md:min-h-[70vh] bg-white rounded-md max-md:rounded-tl-3xl max-md:rounded-tr-3xl max-md:translate-y-4 shadow-md px-10 pt-10 pb-14 flex flex-col items-center">
        <div className="flex flex-col h-[100%] w-[100%]">
          <ModalHeader title="" onClick={() => setModalVisible(false)} />

          <div className="flex flex-col items-center text-center">
            <div className="w-[112px] h-[112px] mb-6 relative">
              <QRCode
                size={256}
                value={`${import.meta.env.VITE_FRONTEND_URL}/restaurants?business=${
                  user?._id
                }&menu=${selectedMenu}`}
                style={{ height: "auto", width: "100%", maxWidth: "100%" }}
              />
              <div className="absolute -right-3 -bottom-3">
                <CheckSvg />
              </div>
            </div>
            <h1 className="text-[26px] text-primary">Your QR menu is now ready!</h1>
            <p className="font-nunito text-[#555] text-[16px] w-[271px] mb-6 mt-2">
              Preview to view your menu online or download and print to display
            </p>
            <div className="my-4 w-[100%]">
              <Button width="100%">Download</Button>
            </div>
            <div className="font-nunito mt-2 cursor-pointer text-primary underline">
              Preview Menu
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
