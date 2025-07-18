import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import PhoneInput from "@/components/phoneSection";

const registerSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password must not exceed 32 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/, {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    }),
  gender: z.string().optional(),
  dob: z.object({
    month: z.string().min(1, "Month is required"),
    day: z.string().min(1, "Day is required"),
    year: z.string().min(1, "Year is required"),
  }),
  agreeToMarketing: z.boolean(),
});

type RegisterFormData = z.infer<typeof registerSchema>;

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  openOtpModal: (data: {
    email: string;
    full_name: string;
    phone: string;
    password: string;
  }) => void;
  openLoginModal: () => void;
}

export default function RegisterModal({
  isOpen,
  onClose,
  openOtpModal,
  openLoginModal,
}: RegisterModalProps) {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const firstnameId = useId();
  const lastnameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
    trigger,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      dob: { month: "", day: "", year: "" },
      agreeToMarketing: false,
    },
  });

  const formData = watch();

  const handleNext = async () => {
    const isValid = await trigger([
      "firstName",
      "lastName",
      "email",
      "phone",
      "password",
    ]);
    if (isValid) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1959 }, (_, i) =>
    (currentYear - i).toString(),
  );

  const handleRegister = async (data: RegisterFormData) => {
    setIsLoading(true);
    setApiError(null);

    try {
      const response = await fetch("/api/v1/signup/send_otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          full_name: `${data.firstName} ${data.lastName}`,
          phone: data.phone,
          password: data.password,
        }),
      });

      const responseData = await response.json();
      if (!response.ok) {
        if (responseData.message?.includes("OTP")) {
          throw new Error(
            "Failed to send verification code. Please try again.",
          );
        }
        throw new Error(
          responseData.message || "Registration failed. Please try again.",
        );
      }

      // Pass all required data to OTP modal
      openOtpModal({
        email: data.email,
        full_name: `${data.firstName} ${data.lastName}`,
        phone: data.phone,
        password: data.password,
      });
      reset();
      onClose();
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("Failed to send OTP")) {
          setApiError(
            "We couldn't send the verification code. Please check your phone number and try again.",
          );
        } else if (error.message.includes("500")) {
          setApiError("Server error. Please try again later.");
        } else {
          setApiError(error.message);
        }
      } else {
        setApiError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative h-[530px] w-[480px] rounded-2xl bg-white p-6 shadow-xl">
        <button
          type="button"
          onClick={() => {
            reset();
            onClose();
          }}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X size={20} />
        </button>

        <h2 className="text-center font-semibold text-black text-xl">
          Sign up
        </h2>
        <p className="mt-1 text-center text-gray-500 text-xs">
          Step {step} of 2
        </p>

        {step === 1 && (
          <div className="mt-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-1 block text-gray-700 text-sm"
                >
                  First name
                </label>
                <input
                  id={firstnameId}
                  type="text"
                  className={`w-full rounded-lg border px-3 py-2 text-gray-700 text-sm ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="firstname"
                  {...register("firstName")}
                />
                {errors.firstName && (
                  <p className="mt-1 text-red-600 text-sm">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="mb-1 block text-gray-700 text-sm"
                >
                  Last name
                </label>
                <input
                  id={lastnameId}
                  type="text"
                  className={`w-full rounded-lg border px-3 py-2 text-gray-700 text-sm ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="lastname"
                  {...register("lastName")}
                />
                {errors.lastName && (
                  <p className="mt-1 text-red-600 text-sm">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-gray-700 text-sm"
              >
                Email
              </label>
              <input
                id={emailId}
                type="email"
                className={`w-full rounded-lg border px-3 py-2 text-gray-700 text-sm ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your email address"
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-red-600 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <PhoneInput />
            </div>

            <div className="relative">
              <label
                htmlFor="password"
                className="mb-1 block text-gray-700 text-sm"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id={passwordId}
                  type={showPassword ? "text" : "password"}
                  className={`w-full rounded-lg border px-3 py-2 pr-10 text-gray-700 text-sm ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your password"
                  {...register("password")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="-translate-y-1/2 absolute top-1/2 right-3 transform text-gray-500 text-sm hover:text-black"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-red-600 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <p className="text-gray-400 text-xs">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </p>

            <button
              type="button"
              onClick={handleNext}
              className="w-full rounded-[20px] bg-lightBlue py-2 font-medium text-gray-800 text-sm transition-colors duration-200 hover:bg-primaryBlue"
              disabled={isLoading}
            >
              Next
            </button>

            <p className="text-center text-gray-500 text-xs">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => {
                  openLoginModal(); // Open login modal
                  onClose(); // Close register modal
                }}
                className="ml-1 cursor-pointer border-none bg-transparent p-0 font-medium text-black"
              >
                Log in
              </button>
            </p>
          </div>
        )}

        {step === 2 && (
          <form
            onSubmit={handleSubmit(handleRegister)}
            className="mt-6 space-y-4 text-black"
          >
            <button
              type="button"
              onClick={handleBack}
              className="absolute top-4 left-4 text-gray-500 text-sm hover:text-black"
            >
              back
            </button>

            <div className="flex flex-col gap-2">
              <label htmlFor="gender" className="text-gray-700 text-sm">
                What's your gender? (optional)
              </label>
              <div className="flex gap-4">
                {["Male", "Female", "Non-binary"].map((gender) => (
                  <label
                    key={gender}
                    className="flex items-center gap-2 text-sm"
                  >
                    <input
                      type="radio"
                      {...register("gender")}
                      value={gender}
                      className="h-4 w-4 appearance-none rounded-full border-2 border-gray-600 checked:border-black checked:bg-cyan-400 focus:ring-0"
                    />
                    <span>{gender}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="dob" className="text-gray-700 text-sm">
                What's your date of birth?
              </label>
              <div className="grid grid-cols-3 gap-4">
                <select
                  value={formData.dob.month}
                  onChange={(e) => setValue("dob.month", e.target.value)}
                  className={`w-full rounded-lg border px-3 py-2 text-sm ${
                    errors.dob?.month ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Month</option>
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                <select
                  value={formData.dob.day}
                  onChange={(e) => setValue("dob.day", e.target.value)}
                  className={`w-full rounded-lg border px-3 py-2 text-sm ${
                    errors.dob?.day ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Date</option>
                  {days.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
                <select
                  value={formData.dob.year}
                  onChange={(e) => setValue("dob.year", e.target.value)}
                  className={`w-full rounded-lg border px-3 py-2 text-sm ${
                    errors.dob?.year ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Year</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              {(errors.dob?.month || errors.dob?.day || errors.dob?.year) && (
                <p className="mt-1 text-red-600 text-sm">
                  Date of birth is required
                </p>
              )}
            </div>

            <label className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                {...register("agreeToMarketing")}
                className="mt-1 h-3 w-4 appearance-none rounded-sm border-2 border-gray-600 checked:border-black checked:bg-cyan-400 focus:ring-0"
              />
              <span>
                Share my registration data with our content providers for
                marketing purposes.
              </span>
            </label>

            <p className="text-gray-500 text-xs">
              By creating an account, you agree to the{" "}
              <span className="font-medium text-primaryBlue">Terms of use</span>
              and{" "}
              <span className="font-medium text-primaryBlue">
                Privacy Policy
              </span>
              .
            </p>

            {apiError && (
              <div className="rounded-lg bg-red-50 p-3 text-red-600 text-sm">
                {apiError}
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-[20px] bg-cyan-600 py-2 font-medium text-sm text-white transition-colors duration-200 hover:bg-cyan-700 disabled:opacity-70"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="-ml-1 mr-2 h-4 w-4 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <title>Loading indicator</title>
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Signing up...
                </span>
              ) : (
                "Sign up"
              )}
            </button>

            <p className="text-center text-gray-500 text-xs">
              Already have an account?{" "}
              <span className="font-medium text-black">Log in</span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
