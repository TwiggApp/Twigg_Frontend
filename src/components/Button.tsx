import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  inverted?: boolean;
  bgColor?: string;
  textColor?: string;
  alternateFont?: "nunito";
  onClick?: () => void;
}

export default function Button({
  children,
  inverted = false,
  bgColor,
  textColor,
  alternateFont,
  onClick,
}: ButtonProps) {
  const txtColor = textColor ? textColor : inverted ? "text-primary" : "text-white";
  return (
    <div
      className={`min-w-[150px] max-w-[100%] px-[30px] py-[14px] bg-primary cursor-pointer rounded-md flex justify-center items-center border-[1.5px] border-primary ${
        inverted && "bg-transparent"
      } ${bgColor && bgColor} ${txtColor} ${alternateFont && "font-nunito"} `}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
