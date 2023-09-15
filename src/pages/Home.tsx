import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Section from "../components/Section";
import Footer from "../components/Footer";
import HeroImg from "../assets/hero.png";
import Edit from "../assets/edit.svg";
import Hygiene from "../assets/hygiene.svg";
import Money from "../assets/money.svg";
import BenefitCard1 from "../assets/benefits/benefit-card1.svg";
import BenefitCard2 from "../assets/benefits/benefit-card2.svg";
import BenefitCard3 from "../assets/benefits/benefit-card3.svg";
import Woman from "../assets/woman.svg";
import Circle from "../assets/circle.svg";
import { useNavigate } from "react-router-dom";

const benefits = [
  {
    title: "Cost Efficient",
    content: "Save money on printing costs and reduce paper waste",
    image: Money,
  },
  {
    title: "Update Easily",
    content: "Modify your menu in real-time with ease",
    image: Edit,
  },
  {
    title: "Hygienic",
    content: "Reduce physical contact and ensure a gem-free dining",
    image: Hygiene,
  },
];

export default function Home() {
  const navigate = useNavigate();

  const goToRegisterPage = () => {
    navigate("/register");
  };

  return (
    <div className="bg-gray-bg">
      <div className="max-container">
        <Navbar />

        <section className="flex min-h-[500px] items-start justify-between pt-12 max-lg:flex-col">
          <div className="w-[576px] max-md:w-auto">
            <h1 className="text-[55px] font-bold max-md:text-[40px]">
              <span className="text-primary">Goodbye</span> Paper Menus,
              <br />
              <span className="text-primary">Hello</span> QR Codes
            </h1>

            <p className="text-base leading-6 text-gray-700 mt-4">
              Eliminate physical menus' costs, wear and tear, and hygiene concerns with our QR Code
              Menu Generator.
            </p>

            <div className="flex gap-2 mt-8">
              <Button onClick={goToRegisterPage}>Get Started</Button>
              <Button inverted>Learn More</Button>
            </div>
          </div>

          <img
            className="w-[750px] mr-10 max-lg:mt-14 max-lg:w-[600px] max-lg:mx-auto"
            src={HeroImg}
            alt="hero-image"
          />
        </section>

        <section className="pt-32 flex flex-col items-center">
          <h2 className="text-primary max-w-[615px] text-center text-[36px] font-fredoka leading-10 font-bold max-md:text-[26px]">
            Enhance your restaurant's potential with modern solutions
          </h2>

          <div className="mt-16 flex gap-12 max-md:flex-col">
            {benefits.map((benefit) => (
              <div className="flex flex-col justify-center text-center items-center gap-4 min-h-[240px] w-[240px] max-md:w-[280px] max-md:h-[280px] rounded-md bg-white p-4 shadow-4.58209 shadow-18.32836 shadow-54.98507 shadow-0 rgba-178-178-178-15">
                <img src={benefit.image} alt="money" className="w-[65px] h-[65px]" />
                <h3 className="text-[#2B2B2B] text-[24px] font-normal">{benefit.title}</h3>
                <p className="text-[#777] text-sm">{benefit.content}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="pt-32 flex flex-col items-center w-[100%]">
          <h2 className="text-primary max-w-[615px] text-center text-[36px] font-fredoka leading-10 font-bold max-md:text-[26px]">
            How twigg works
          </h2>
        </div>
        <Section
          image={BenefitCard1}
          title="Create your menu"
          content="Effortlessly add, edit, or remove dishes, drinks, and daily specials with our user-friendly platform. Maintain full control to showcase your restaurant's unique offerings."
          hasButton
        />

        <Section
          image={BenefitCard2}
          title="Generate QR Codes"
          content="Once your menu is set, our system instantly generates unique QR codes for each menu item. These QR codes are tailored to your restaurant, linking directly to the respective item's details."
        />

        <Section
          image={BenefitCard3}
          title="Print and display"
          content="Choose how you'd like to present your QR codes. Whether it's printed QR codes on tabletops or displayed on digital screens for customers to scan and browse the menu. The choice is yours"
        />
      </div>

      <section className="bg-primary mt-8 relative overflow-hidden">
        <div className="flex flex-row max-container h-[424px] max-md:h-[496px] items-center justify-between overflow-hidden z-[2] max-md:flex-col max-md:items-center max-md:justify-center">
          <div className="w-[602px] z-[2] max-md:w-auto max-md:text-center">
            <h2 className="text-[48px] font-bold leading-[64.8px] text-white max-md:text-[26px] max-md:leading-[35.1px]">
              Ready to modernize your restaurant's menu?
            </h2>

            <div className="w-[160px] mt-8 z-50 max-md:mx-auto">
              <Button bgColor="bg-white" textColor="text-primary" onClick={goToRegisterPage}>
                Get Started
              </Button>
            </div>
          </div>
          <div className="z-50">
            <img
              src={Woman}
              alt="woman-image"
              className="translate-y-6 mr-12 z-[2] max-md:w-[238px] max-md:h-[238px] max-md:translate-y-14"
            />
          </div>
        </div>

        <img
          src={Circle}
          alt="circle"
          className="w-[342px] h-[342px] absolute -bottom-36 -left-28 z-[1]"
        />

        <img
          src={Circle}
          alt="circle"
          className="w-[342px] h-[342px] absolute -bottom-16 right-0 z-[1] max-md:w-[196px] max-md:h-[196px]"
        />

        <img
          src={Circle}
          alt="circle"
          className="w-[214px] h-[214px] absolute -top-6 -right-16 z-[1] max-md:w-[138px] max-md:h-[138px]"
        />
      </section>

      <Footer />
    </div>
  );
}
