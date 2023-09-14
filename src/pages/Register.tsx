import Logo from "../assets/logo.svg";
import TextInput from "../components/Form/TextInput";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import Eye from "../assets/eye.svg";
import EyeShut from "../assets/eye-shut.svg";
import { useState } from "react";
import Field from "../components/Form/Field";

export default function Register() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-bg">
      <div className="flex flex-col max-md:items-center justify-center">
        <img src={Logo} alt="twigg-logo" className="max-md:mt-4 w-[90px]" />

        <div className="h-[710px] w-[522px] max-md:w-[95vw] py-8 bg-white max-md:bg-gray-bg max-md:px-6 md:shadow-md rounded-md mt-4">
          <div className="w-[422px] max-md:w-[100%] mx-auto">
            <h2 className="text-primary text-[26px] text-[500]">Create your twigg account</h2>

            <div className="mt-8">
              <Field label="Business Name">
                <TextInput placeholder="ex. The Bistro Delight" />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Business Email">
                <TextInput placeholder="ex. info@bistrodelightrestaurant.com" />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Password">
                <TextInput
                  placeholder=""
                  secure
                  rightIcon={passwordVisible ? Eye : EyeShut}
                  showPass={passwordVisible}
                  onRightIconClick={() => setPasswordVisible((prev) => !prev)}
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Confirm Password">
                <TextInput
                  placeholder=""
                  secure
                  rightIcon={confirmPasswordVisible ? Eye : EyeShut}
                  showPass={confirmPasswordVisible}
                  onRightIconClick={() => setConfirmPasswordVisible((prev) => !prev)}
                />
              </Field>
            </div>

            <div className="mt-10">
              <Button onClick={() => navigate("/create-profile")}>Create Account</Button>
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
