import Button from "./Button";

interface SectionProps {
  image: string;
  title: string;
  content: string;
  hasButton?: boolean;
  onClick?: () => void;
}

export default function Section({ image, title, content, hasButton }: SectionProps) {
  return (
    <div className="flex justify-between items-center w-[100%] mt-20 mx-20 max-lg:flex-col max-lg:mx-2 max-lg:items-stretch">
      <div className="max-w-[406px] flex flex-col gap-4">
        <h2 className="text-primary text-[32px] font-fredoka font-bold max-md:text-[24px]">
          {title}
        </h2>
        <p className="font-fredoka text-[#555]">{content}</p>
        <div className="w-[160px]">{hasButton && <Button>Get Started</Button>}</div>
      </div>
      <img
        src={image}
        alt="section-image"
        className="mr-32 max-lg:mr-0 max-lg:ml-auto max-lg:mt-4"
      />
    </div>
  );
}
