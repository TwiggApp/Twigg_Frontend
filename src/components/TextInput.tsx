interface TextInputProps {
  placeholder?: string;
  label?: string;
  secure?: boolean;
  rightIcon?: string;
  onRightIconClick?: () => void;
  showPass?: boolean;
}

export default function TextInput({
  label,
  placeholder,
  secure,
  rightIcon,
  showPass,
  onRightIconClick,
}: TextInputProps) {
  return (
    <div className="relative">
      {label && <p className="font-nunito text-base text-[500] my-2">{label}</p>}
      <input
        type={secure && !showPass ? "password" : "text"}
        className="w-[422px] max-md:w-[100%] px-[10px] py-[14px] border-[1px] border-[#D6D6D6] rounded-md outline-none font-nunito focus:border-primary"
        placeholder={placeholder}
      />
      {rightIcon && (
        <div className="absolute top-12 right-4 cursor-pointer" onClick={onRightIconClick}>
          <img src={rightIcon} alt="icon" />
        </div>
      )}
    </div>
  );
}
