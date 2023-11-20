import { useEffect, useState } from "react";
import { useValidator } from "../../hooks/useValidator";
import { BusinessDetails } from "../../types/auth";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { authActions } from "../../redux/slices/authSlice";
import { getBase64FileSize, getBase64Type } from "../../utils/files";
import { Country, ICountry, State } from "country-state-city";
import Field from "../../components/Form/Field";
import Dropdown from "../../components/Form/Dropdown";
import Button from "../../components/Button";
import CountrySelect from "../../components/Form/CountrySelect";
import PhoneInput from "../../components/Form/PhoneInput";
import * as yup from "yup";

interface BusinessDetailsFormProps {
  onSubmit: () => void;
}

const businessProfileSchema = yup.object({
  country: yup.object().test("country", "Country is a required field", (value) => {
    if (Object.keys(value).length) return true;
    return false;
  }),
  state: yup.string(),
  businessPhoneNumber: yup.string(),
  logo: yup
    .mixed()
    .required("Logo is required")
    .test("fileSize", "File size is too large", (value) => {
      if (!value) {
        return true;
      }
      return getBase64FileSize(value as string).megabytes <= 3;
    })
    .test("fileType", "Invalid file type", (value) => {
      if (!value) {
        return true;
      }
      const allowedTypes = ["image/jpeg", "image/png"];
      const mimeType = getBase64Type(value as string);
      return allowedTypes.includes(`${mimeType}`);
    }),
  backgroundImage: yup
    .mixed()
    .nullable()
    .test("fileSize", "File size is too large", (value) => {
      if (!value) return true;
      return getBase64FileSize(value as string).megabytes <= 5;
    })
    .test("fileType", "Invalid file type", (value) => {
      if (!value) return true;
      const allowedTypes = ["image/jpeg", "image/png"];
      const mimeType = getBase64Type(value as string);
      return allowedTypes.includes(`${mimeType}`);
    }),
});

export default function BusinessDetailsForm({ onSubmit }: BusinessDetailsFormProps) {
  const dispatch = useAppDispatch();
  const profileData = useAppSelector((state) => state.auth.profileData);

  const [formData, setFormData] = useState<Partial<BusinessDetails>>(profileData);
  const { errors, validate, clearErrOnFocus } = useValidator(formData, businessProfileSchema);

  useEffect(() => {
    setFormData(profileData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;
    if (type === "file" && files) {
      // Read the file as blob and set in redux
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData({ ...formData, [name]: event.target?.result as string | Blob });
        dispatch(authActions.updateLogoData(event.target?.result as string | Blob));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
      dispatch(authActions.updateProfileData({ [name]: value }));
    }
  };

  const handleSelectChange = (name: string, value: string | ICountry) => {
    setFormData({ ...formData, [name]: value });
    dispatch(authActions.updateProfileData({ [name]: value }));
    clearErrOnFocus({ target: { name } } as unknown as React.FocusEvent<HTMLInputElement>);
  };

  const handleButtonClick = async () => {
    if (await validate()) {
      onSubmit();
    }
  };

  return (
    <>
      <div className="mt-5">
        <Field label="Country" error={errors.country as string}>
          <CountrySelect
            placeholder="Select your country"
            dropdownItems={Country.getAllCountries()}
            name="country"
            value={formData.country as ICountry}
            onSelect={handleSelectChange}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="State" error={errors.state}>
          <Dropdown
            name="state"
            value={formData.state}
            placeholder="Select your state"
            dropdownItems={State.getStatesOfCountry((formData?.country as ICountry)?.isoCode).map(
              (state) => state.name
            )}
            onSelect={handleSelectChange}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Business Phone Number" error={errors.businessPhoneNumber}>
          <PhoneInput
            code={(formData?.country as ICountry)?.phonecode}
            flag={(formData?.country as ICountry)?.flag}
            name="businessPhoneNumber"
            value={formData.businessPhoneNumber}
            onChange={handleInputChange}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Business Logo">
          <input
            type="file"
            className="font-nunito block"
            name="logo"
            accept=".png,.jpg,.jpeg"
            onChange={(e) => {
              handleInputChange(e);
              if (errors.logo) {
                clearErrOnFocus({
                  target: { name: "logo" },
                } as unknown as React.FocusEvent<HTMLInputElement>);
              }
            }}
          />
          {errors.logo && <small className="text-red-500">{errors.logo.toString()}</small>}
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Background Image (Optional)">
          <input
            type="file"
            className="font-nunito block"
            name="backgroundImage"
            accept=".png,.jpg,.jpeg"
            onChange={(e) => {
              handleInputChange(e);
              if (errors.logo) {
                clearErrOnFocus({
                  target: { name: "backgroundImage" },
                } as unknown as React.FocusEvent<HTMLInputElement>);
              }
            }}
          />
          {errors.backgroundImage && (
            <small className="text-red-500">{errors.backgroundImage.toString()}</small>
          )}
        </Field>
      </div>

      <div className="mt-10">
        <Button onClick={handleButtonClick} alternateFont="nunito">
          Continue
        </Button>
      </div>
    </>
  );
}
