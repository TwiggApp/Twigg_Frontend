import Field from "../../components/Form/Field";
import TextInput from "../../components/Form/TextInput";
import Button from "../../components/Button";

interface SocialsFormProps {
  onSubmit: () => void;
  prev: () => void;
  loading: boolean;
}

export default function SocialsForm({ prev, loading, onSubmit }: SocialsFormProps) {
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

      <div className="mt-10">
        <Button onClick={onSubmit} alternateFont="nunito" loading={loading}>
          Submit
        </Button>

        <div onClick={prev} className="text-center mt-5 cursor-pointer">
          <p className="font-nunito text-base text-primary underline">Previous</p>
        </div>
      </div>
    </>
  );
}
