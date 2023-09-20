import Field from "../../components/Form/Field";
import Dropdown from "../../components/Form/Dropdown";
import TextInput from "../../components/Form/TextInput";
// import { useState } from "react";
import { STATES, COUNTRIES } from "../../constants/data";

// interface IBusinessDetails {
//   country: string;
//   state: string;
//   phoneNumber: string;
//   file: "";
// }

export default function BusinessDetailsForm() {
  // const [formData, setFormData] = useState<IBusinessDetails>({
  //   country: "",
  //   state: "",
  //   phoneNumber: "",
  //   file: "",
  // });

  // const handleInputChange = (e: React.ChangeEvent<>) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  return (
    <>
      {/* <div className="mt-4">
        <Field label="Business Name">
          <TextInput placeholder="ex. The Bistro Delight" />
        </Field>
      </div> */}

      <div className="mt-5">
        <Field label="Country">
          <Dropdown placeholder="Select your country" dropdownItems={COUNTRIES} />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="State">
          <Dropdown placeholder="Select your state" dropdownItems={STATES} />
        </Field>
      </div>

      {/* <div className="mt-5">
        <Field label="Business Email">
          <TextInput placeholder="ex. info@bistrodelightrestaurant.com" />
        </Field>
      </div> */}

      <div className="mt-5">
        <Field label="Business Phone Number">
          <TextInput placeholder="+234" name="phoneNumber" />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Business Logo">
          <input type="file" className="font-nunito" />
        </Field>
      </div>
    </>
  );
}
