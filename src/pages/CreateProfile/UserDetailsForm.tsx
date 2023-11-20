import Field from "../../components/Form/Field";
import Dropdown from "../../components/Form/Dropdown";
import TextInput from "../../components/Form/TextInput";
import Button from "../../components/Button";
import PhoneInput from "../../components/Form/PhoneInput";
import { useEffect, useState } from "react";
import { Contact } from "../../types/auth";
import { useValidator } from "../../hooks/useValidator";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { authActions } from "../../redux/slices/authSlice";
import { ICountry } from "country-state-city";
import * as yup from "yup";

const contactSchema = yup.object({
  contactRole: yup.string().required("Onwership is a required field"),
  contactName: yup.string().required("Full Name is a required field"),
  contactEmail: yup
    .string()
    .email("Email must be a valid email")
    .required("Email Address is a required field"),
  contactNumber: yup.string().required("Phone Number is a required field"),
});

interface UserDetailsFormProps {
  onSubmit: () => void;
  prev: () => void;
}

export default function UserDetailsForm({ onSubmit, prev }: UserDetailsFormProps) {
  const dispatch = useAppDispatch();
  const profileData = useAppSelector((state) => state.auth.profileData);
  const [formData, setFormData] = useState<Partial<Contact>>(profileData);

  useEffect(() => {
    setFormData(profileData);
  }, [profileData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
    clearErrOnFocus({ target: { name } } as unknown as React.FocusEvent<HTMLInputElement>);
  };

  const { errors, validate, clearErrOnFocus } = useValidator(formData, contactSchema);

  const handleButtonClick = async () => {
    if (await validate()) {
      dispatch(authActions.updateProfileData(formData));
      onSubmit();
    }
  };

  return (
    <>
      <div className="mt-4">
        <Field label="Ownership" error={errors.contactRole}>
          <Dropdown
            placeholder="Select your role in the business"
            dropdownItems={["Owner", "Manager", "Employee"]}
            name="contactRole"
            onSelect={handleSelectChange}
            value={formData.contactRole}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Full Name" error={errors.contactName}>
          <TextInput
            placeholder="ex. John Doe"
            name="contactName"
            value={formData.contactName}
            onChange={handleInputChange}
            onFocus={clearErrOnFocus}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Email Address" error={errors.contactEmail}>
          <TextInput
            placeholder="ex. johndoe@email.com"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleInputChange}
            onFocus={clearErrOnFocus}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Phone Number" error={errors.contactNumber}>
          <PhoneInput
            code={(profileData.country as ICountry).phonecode}
            flag={(profileData.country as ICountry).flag}
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            onFocus={clearErrOnFocus}
          />
        </Field>
      </div>

      <div className="mt-10">
        <Button onClick={handleButtonClick} alternateFont="nunito">
          Continue
        </Button>

        <div onClick={prev} className="text-center mt-5 cursor-pointer">
          <p className="font-nunito text-base text-primary underline">Previous</p>
        </div>
      </div>
    </>
  );
}
