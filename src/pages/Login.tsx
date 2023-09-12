import Logo from "../assets/logo.svg";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Eye from "../assets/eye.svg";
import EyeShut from "../assets/eye-shut.svg";
import { useState } from "react";

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#FCFCFC]">
      <div className="flex flex-col max-md:items-center justify-center">
        <img src={Logo} alt="twigg-logo" className="max-md:mt-4 w-[90px]" />

        <div className="h-[528px] w-[522px] max-md:w-[95vw] py-8 md:px-10 bg-white md:shadow-md rounded-md mt-4">
          <div className="w-[422px] max-md:w-[100%] mx-auto">
            <h2 className="text-primary text-[26px] text-[500] max-md:text-center">
              Sign in to your account
            </h2>

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

            <p className="text-primary my-4">
              <Link to="/forgot-password">Forgot Password</Link>
            </p>

            <div className="mt-10">
              <Button>Sign in</Button>
            </div>

            <div className="mt-10">
              <p className="font-nunito text-sm text-center">
                Don't have an account?{" "}
                <span className="text-[#05A2FA]">
                  <Link to="/login">Sign up</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
