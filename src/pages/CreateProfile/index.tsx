import Button from "../../components/Button";
import Logo from "../../assets/logo.svg";
import Stepper from "../../components/Stepper";
import BusinessDetailsForm from "./BusinessDetailsForm";
import UserDetailsForm from "./UserDetailsForm";
import SocialsForm from "./SocialsForm";
import FadeIn from "react-fade-in/lib/FadeIn";
import { useMultiStep } from "../../hooks/useMultiStep";

export default function CreateProfile() {
  const pages = [<BusinessDetailsForm />, <UserDetailsForm />, <SocialsForm />];

  const { next, prev, step, isFirstStep, isLastStep, currentStepIndex } = useMultiStep(pages);

  return (
    <div className="w-full min-h-screen overflow-y-auto my-4 flex items-center justify-center bg-gray-bg max-md:items-start max-md:mt-12 max-md:bg-white">
      <div className="flex flex-col justify-center -translate-y-6">
        <img src={Logo} alt="twigg-logo" className="max-md:mt-4 w-[90px] max-md:mx-6" />

        <div className="h-[760px] w-[522px] max-md:w-[95vw] py-8 md:px-10 max-md:px-6 bg-white md:shadow-md rounded-md mt-4">
          <div className="w-[422px] max-md:w-[100%] mx-auto">
            <h2 className="text-primary text-[26px] text-[500] mb-6">Create your profile</h2>

            <FadeIn>
              <Stepper
                pagesLength={pages.length}
                currrentPageIndex={currentStepIndex}
                pagesText={["Business Details", "Contact Details", "Social Media"]}
              />

              <div className="mb-6 mt-16">{step}</div>
            </FadeIn>

            <div className="mt-10">
              <Button onClick={next} alternateFont="nunito">
                {isLastStep ? "Submit" : "Continue"}
              </Button>

              {!isFirstStep && (
                <div onClick={prev} className="text-center mt-5 cursor-pointer">
                  <p className="font-nunito text-base text-primary underline">Previous</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
