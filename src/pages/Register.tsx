import Logo from "../assets/logo.svg";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Eye from "../assets/eye.svg";
import EyeShut from "../assets/eye-shut.svg";
import { useState } from "react";

export default function Register() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#FCFCFC]">
      <div className="flex flex-col max-md:items-center justify-center">
        <img src={Logo} alt="twigg-logo" className="max-md:mt-4 w-[90px]" />

        <div className="h-[710px] w-[522px] max-md:w-[95vw] py-8 md:px-10 bg-white md:shadow-md rounded-md mt-4">
          <div className="w-[422px] max-md:w-[100%] mx-auto">
            <h2 className="text-primary text-[26px] text-[500] max-md:text-center">
              Create your twigg account
            </h2>

            <div className="mt-8">
              <TextInput placeholder="ex. The Bistro Delight" label="Business Name" />
            </div>

            <div className="mt-5">
              <TextInput
                placeholder="ex. info@bistrodelightrestaurant.com"
                label="Business Email"
              />
            </div>

            <div className="mt-5">
              <TextInput
                placeholder=""
                label="Password"
                secure
                rightIcon={passwordVisible ? Eye : EyeShut}
                showPass={passwordVisible}
                onRightIconClick={() => setPasswordVisible((prev) => !prev)}
              />
            </div>

            <div className="mt-5">
              <TextInput
                placeholder=""
                label="Confirm Password"
                secure
                rightIcon={confirmPasswordVisible ? Eye : EyeShut}
                showPass={confirmPasswordVisible}
                onRightIconClick={() => setConfirmPasswordVisible((prev) => !prev)}
              />
            </div>

            <div className="mt-10">
              <Button>Create Account</Button>
            </div>

            <div className="mt-10">
              <p className="font-nunito text-sm text-center">
                Already have an account?{" "}
                <span className="text-[#05A2FA]">
                  <Link to="/login">Sign in</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
