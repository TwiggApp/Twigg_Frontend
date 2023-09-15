import Field from "../../components/Form/Field";
import TextInput from "../../components/Form/TextInput";

export default function SocialsForm() {
  return (
    <>
      <div className="mt-4">
        <Field label="Instagram Handle">
          <TextInput placeholder="ex. the_bistrodelight" />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="WhatsApp Number">
          <TextInput placeholder="+234" />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="TikTok Handle">
          <TextInput placeholder="ex. the_bistrodelight" />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Facebook Handle">
          <TextInput placeholder="ex. the_bistrodelight" />
        </Field>
      </div>
    </>
  );
}
