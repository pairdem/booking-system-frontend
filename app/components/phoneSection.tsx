import { useRef, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { useFormContext } from "react-hook-form";

interface CountryCode {
  code: string;
  name: string;
  dialCode: string;
}

const countryCodes: CountryCode[] = [
  { code: "US", name: "United States", dialCode: "+1" },
  { code: "GB", name: "United Kingdom", dialCode: "+44" },
  { code: "CA", name: "Canada", dialCode: "+1" },
  { code: "AU", name: "Australia", dialCode: "+61" },
  { code: "DE", name: "Germany", dialCode: "+49" },
  { code: "FR", name: "France", dialCode: "+33" },
  { code: "NG", name: "Nigeria", dialCode: "+234" },
  { code: "GH", name: "Ghana", dialCode: "+233" },
];

interface PhoneInputProps {
  name?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  name = "phone",
  defaultValue = "",
  onChange,
}) => {
  const formContext = useFormContext();
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(
    countryCodes[0],
  );
  const selectRef = useRef<HTMLSelectElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCode = e.target.value;
    const country =
      countryCodes.find((c) => c.code === selectedCode) || countryCodes[0];
    setSelectedCountry(country);
    if (formContext) {
      formContext.setValue("countryCode", country.dialCode, {
        shouldValidate: true,
      });
    }
    inputRef.current?.focus();
  };

  const handleSelectClick = () => {
    selectRef.current?.focus();
    selectRef.current?.click();
  };

  const getRegisterProps = () => {
    if (formContext) {
      return formContext.register(name);
    }

    return {
      name,
      defaultValue,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
          onChange(e.target.value);
        }
      },
    };
  };

  const registerProps = getRegisterProps();
  return (
    <div className="mb-4">
      <label htmlFor={name} className="mb-1 block text-gray-700 text-sm">
        Phone number
      </label>
      <div className="flex items-center rounded-lg border text-gray-700">
        <div className="relative flex items-center">
          {/* Hidden native select element */}
          <select
            ref={selectRef}
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            value={selectedCountry.code}
            onChange={handleCountryChange}
            aria-label="Country code"
          >
            {countryCodes.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name} ({country.dialCode})
              </option>
            ))}
          </select>

          {/* Custom styled select presentation */}
          <button
            type="button"
            className="flex items-center rounded-l-lg px-2 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleSelectClick}
            aria-haspopup="listbox"
          >
            <ReactCountryFlag
              countryCode={selectedCountry.code}
              svg={true}
              style={{ width: "20px", height: "15px" }}
              aria-hidden="true"
            />
            <span className="ml-1 text-gray-700 text-sm">
              {selectedCountry.dialCode}
            </span>
            <svg
              className="ml-1 h-4 w-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        <input
          id={name}
          type="tel"
          className="w-full px-3 py-2 text-gray-700 text-sm focus:outline-none"
          ref={inputRef}
          {...registerProps}
        />
      </div>
    </div>
  );
};

export default PhoneInput;
