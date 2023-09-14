interface TextInputProps {
  placeholder?: string;
  secure?: boolean;
  rightIcon?: string;
  onRightIconClick?: () => void;
  showPass?: boolean;
}

export default function TextInput({
  placeholder,
  secure,
  rightIcon,
  showPass,
  onRightIconClick,
}: TextInputProps) {
  return (
    <div className="relative">
      <input
        type={secure && !showPass ? "password" : "text"}
        className="w-[422px] max-md:w-[100%] px-[10px] py-[14px] border-[1px] border-[#D6D6D6] rounded-md outline-none font-nunito focus:border-primary"
        placeholder={placeholder}
      />
      {rightIcon && (
        <div className="absolute top-4 right-4 cursor-pointer" onClick={onRightIconClick}>
          <img src={rightIcon} alt="icon" />
        </div>
      )}
    </div>
  );
}
