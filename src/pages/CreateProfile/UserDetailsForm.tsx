import Field from "../../components/Form/Field";
import Dropdown from "../../components/Form/Dropdown";
import TextInput from "../../components/Form/TextInput";

export default function UserDetailsForm() {
  return (
    <>
      <div className="mt-4">
        <Field label="Ownership">
          <Dropdown
            placeholder="Select your role in the business"
            dropdownItems={["Owner", "Co-Owner", "Admin"]}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Full Name">
          <TextInput placeholder="ex. John Doe" />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Email Address">
          <TextInput placeholder="ex. johndoe@email.com" />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Phone Number">
          <TextInput placeholder="+234" />
        </Field>
      </div>
    </>
  );
}
