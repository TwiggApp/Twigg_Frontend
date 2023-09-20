import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import TextInput from "../components/Form/TextInput";
import Button from "../components/Button";
import Eye from "../assets/eye.svg";
import EyeShut from "../assets/eye-shut.svg";
import Field from "../components/Form/Field";
import * as yup from "yup";
import { useValidator } from "../hooks/useValidator";
import { apiClient } from "../api/apiClient";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const userSchema = yup.object({
  name: yup.string().required("Business name is required"),
  email: yup.string().email("Email must be a valid email").required("Business email is required"),
  password: yup
    .string()
    .min(6, "Password should not be less than 7 characters")
    .required("Password is required"),
  confirmPassword: yup.string().equals([yup.ref("password")], "Passwords must match"),
});

export default function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { errors, validate, clearErrOnFocus } = useValidator(formData, userSchema);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    if (await validate()) {
      try {
        setLoading(true);
        const response = await apiClient.post("/auth/signup", formData);
        console.log(response);
        navigate("/create-profile");
      } catch (err) {
        // console.log(err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-bg max-md:bg-white">
      <div className="flex flex-col max-md:items-center justify-center">
        <img src={Logo} alt="twigg-logo" className="max-md:mt-4 w-[90px]" />

        <div className="min-h-[710px] w-[522px] max-md:w-[95vw] py-8 bg-white max-md:px-6 md:shadow-md rounded-md mt-4">
          <form className="w-[422px] max-md:w-[100%] mx-auto">
            <h2 className="text-primary text-[26px] text-[500]">Create your twigg account</h2>

            <div className="mt-8">
              <Field label="Business Name*">
                <TextInput
                  placeholder="ex. The Bistro Delight"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={clearErrOnFocus}
                  error={errors.name}
                />
              </Field>
            </div>

            <div className="mt-4">
              <Field label="Business Email*">
                <TextInput
                  placeholder="ex. info@bistrodelightrestaurant.com"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={clearErrOnFocus}
                  error={errors.email}
                />
              </Field>
            </div>

            <div className="mt-4">
              <Field label="Password">
                <TextInput
                  placeholder=""
                  secure
                  rightIcon={passwordVisible ? Eye : EyeShut}
                  showPass={passwordVisible}
                  onRightIconClick={() => setPasswordVisible((prev) => !prev)}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  onFocus={clearErrOnFocus}
                  error={errors.password}
                />
              </Field>
            </div>

            <div className="mt-4">
              <Field label="Confirm Password">
                <TextInput
                  placeholder=""
                  secure
                  rightIcon={confirmPasswordVisible ? Eye : EyeShut}
                  showPass={confirmPasswordVisible}
                  onRightIconClick={() => setConfirmPasswordVisible((prev) => !prev)}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  onFocus={clearErrOnFocus}
                  error={errors.confirmPassword}
                />
              </Field>
            </div>

            <div className="mt-10">
              <Button onClick={handleSubmit} loading={loading}>
                Create Account
              </Button>
            </div>

            <div className="mt-10">
              <p className="font-nunito text-sm text-center">
                Already have an account?{" "}
                <span className="text-[#05A2FA]">
                  <Link to="/login">Sign in</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
