import Field from "../../components/Form/Field";
import Dropdown from "../../components/Form/Dropdown";
import TextInput from "../../components/Form/TextInput";

export default function BusinessDetailsForm() {
  return (
    <>
      {/* <div className="mt-4">
        <Field label="Business Name">
          <TextInput placeholder="ex. The Bistro Delight" />
        </Field>
      </div> */}

      <div className="mt-5">
        <Field label="Country">
          <Dropdown
            placeholder="Select your country"
            dropdownItems={["Nigeria", "USA", "United Kingdom", "South Korea", "China", "Korea"]}
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

      {/* <div className="mt-5">
        <Field label="Business Email">
          <TextInput placeholder="ex. info@bistrodelightrestaurant.com" />
        </Field>
      </div> */}

      <div className="mt-5">
        <Field label="Business Phone Number">
          <TextInput placeholder="+234" />
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
