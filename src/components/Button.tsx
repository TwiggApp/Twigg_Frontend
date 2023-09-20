import { ReactNode } from "react";
import { BeatLoader } from "react-spinners";

interface ButtonProps {
  children: ReactNode;
  inverted?: boolean;
  bgColor?: string;
  textColor?: string;
  alternateFont?: "nunito";
  onClick?: () => void;
  loading?: boolean;
}

export default function Button({
  children,
  inverted = false,
  bgColor,
  textColor,
  alternateFont,
  onClick,
  loading = false,
}: ButtonProps) {
  const txtColor = textColor ? textColor : inverted ? "text-primary" : "text-white";
  return (
    <div
      className={`min-w-[150px] max-w-[100%] h-[60px] px-[30px] py-[14px] bg-primary cursor-pointer rounded-md flex justify-center items-center border-[1.5px] border-primary ${
        inverted && "bg-transparent"
      } ${bgColor && bgColor} ${txtColor} ${alternateFont && "font-nunito"} `}
      onClick={() => {
        if (loading) return;
        onClick?.();
      }}
      aria-disabled={loading}
    >
      {!loading && children}
      {loading && <BeatLoader color="white" loading={loading} />}
    </div>
  );
}
