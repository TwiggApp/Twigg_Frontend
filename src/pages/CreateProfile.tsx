import Field from "../components/Form/Field";
import TextInput from "../components/Form/TextInput";
import Button from "../components/Button";
import Logo from "../assets/logo.svg";
import Dropdown from "../components/Form/Dropdown";

export default function CreateProfile() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-bg">
      <div className="flex flex-col max-md:items-center justify-center -translate-y-6">
        <img src={Logo} alt="twigg-logo" className="max-md:mt-4 w-[90px]" />

        <div className="min-h-[528px] w-[522px] max-md:w-[95vw] py-8 md:px-10 max-md:px-6 bg-white max-md:bg-gray-bg md:shadow-md rounded-md mt-4">
          <div className="w-[422px] max-md:w-[100%] mx-auto">
            <h2 className="text-primary text-[26px] text-[500] max-md:text-center">
              Create your profile
            </h2>

            <div className="mt-8">
              <Field label="Business Email">
                <TextInput placeholder="ex. info@bistrodelightrestaurant.com" />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Country">
                <Dropdown
                  placeholder="Select your country"
                  dropdownItems={[
                    "Nigeria",
                    "USA",
                    "United Kingdom",
                    "South Korea",
                    "China",
                    "Korea",
                  ]}
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="State">
                <Dropdown
                  placeholder="Select your state"
                  dropdownItems={["Alabama", "Chicago", "Jericho"]}
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Business Email">
                <TextInput placeholder="ex. info@bistrodelightrestaurant.com" />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Business Phone Number">
                <TextInput placeholder="+234" />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Business Logo">
                <div>
                  <div></div>
                  <p>file name</p>
                </div>
              </Field>
            </div>

            <div className="mt-10">
              <Button>Continue</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
