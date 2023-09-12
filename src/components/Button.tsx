import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  inverted?: boolean;
  bgColor?: string;
  textColor?: string;
}

export default function Button({ children, inverted = false, bgColor, textColor }: ButtonProps) {
  console.log(bgColor, textColor);
  const txtColor = textColor ? textColor : inverted ? "text-primary" : "text-white";
  return (
    <div
      className={`min-w-[150px] max-w-[100%] px-[30px] py-[14px] bg-primary cursor-pointer rounded-md flex justify-center items-center border-[1.5px] border-primary ${
        inverted && "bg-transparent"
      } ${bgColor && bgColor} ${txtColor}`}
    >
      {children}
    </div>
  );
}
