import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface OtpModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    email: string;
    full_name: string;
    phone: string;
    password: string;
  } | null;
}

const DIGIT_REGEX: RegExp = /^\d?$/;

export default function OtpModal({ isOpen, onClose, data }: OtpModalProps) {
  const [otp, setOtp] = useState(
    Array.from({ length: 6 }, () => ({ id: uuidv4(), value: "" })),
  );
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(30);
  const [debugInfo, setDebugInfo] = useState<string>("");
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timer > 0 && isOpen) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer, isOpen]);

  // inside component or function
  // use DIGIT_REGEX instead

  const handleChange = (index: number, newValue: string) => {
    if (!DIGIT_REGEX.test(newValue)) {
      return;
    }

    setOtp((prevOtp) =>
      prevOtp.map((digit, i) =>
        i === index ? { ...digit, value: newValue } : digit,
      ),
    );

    if (newValue && index < otp.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const otpCode = otp.map((digit) => digit.value).join("");
    setDebugInfo(""); // Reset debug info

    if (otpCode.length < 6) {
      setError("Please enter the full 6-digit code.");
      return;
    }

    if (!data) {
      setError("No registration data available.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Debug: Log what's being sent to the API
      const requestPayload = {
        email: data.email,
        full_name: data.full_name,
        phone: data.phone,
        password: "[REDACTED]", // Don't log actual password
        otp: otpCode,
      };
      setDebugInfo(`Request payload: ${JSON.stringify(requestPayload)}`);
      setDebugInfo(`Request payload: ${JSON.stringify(requestPayload)}`);

      const response = await fetch("/api/v1/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          full_name: data.full_name,
          phone: data.phone,
          password: data.password,
          otp: otpCode,
        }),
      });

      const responseData = await response.json();

      setDebugInfo(
        `Response: ${response.status} - ${JSON.stringify(responseData)}`,
      );

      if (!response.ok) {
        throw new Error(
          responseData.message || "Verification failed. Please try again.",
        );
      }

      alert("OTP verified successfully!");
      onClose();
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "An unknown error occurred during verification";
      setError(errorMessage);

      setDebugInfo(`Error: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    if (timer === 0 && data) {
      setIsLoading(true);
      setError(null);
      setDebugInfo("Attempting to resend OTP...");

      try {
        const response = await fetch("/api/v1/resend_otp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data.email,
            phone: data.phone,
          }),
        });

        const responseData = await response.json();

        setDebugInfo(`Resend response: ${JSON.stringify(responseData)}`);

        if (!response.ok) {
          throw new Error(
            responseData.message || "Failed to resend OTP. Please try again.",
          );
        }

        setTimer(30);
        setOtp(Array.from({ length: 6 }, () => ({ id: uuidv4(), value: "" })));
        alert("New OTP sent to your email.");
      } catch (err) {
        const errorMessage =
          err instanceof Error
            ? err.message
            : "An unknown error occurred while resending OTP";
        setError(errorMessage);

        setDebugInfo(`Resend error: ${errorMessage}`);
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (!(isOpen && data)) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-[500px] rounded-2xl bg-white p-6 shadow-xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X size={24} />
        </button>

        <h2 className="mb-4 text-center font-medium text-2xl text-black">
          Enter Verification Code
        </h2>
        <p className="mb-6 text-center text-gray-600">
          We've sent a verification code to {data.email}
        </p>

        <div className="mb-4 flex justify-center gap-2">
          {otp.map((digit, index) => (
            <input
              key={digit.id}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              value={digit.value}
              ref={(el) => {
                if (el) {
                  inputsRef.current[index] = el;
                }
              }}
              onChange={(e) => {
                const value = e.target.value;
                if (value === "" || DIGIT_REGEX.test(value)) {
                  handleChange(index, value);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Backspace" && !digit.value && index > 0) {
                  inputsRef.current[index - 1]?.focus();
                }
              }}
              className="h-12 w-12 rounded-md border border-gray-300 text-center font-medium text-cyan-800 text-lg focus:outline-none focus:ring-2 focus:ring-primaryBlue"
              disabled={isLoading}
            />
          ))}
        </div>

        {error && (
          <p className="mb-2 text-center text-red-500 text-sm">{error}</p>
        )}

        <button
          type="button"
          onClick={handleVerify}
          className="w-full rounded-lg bg-cyan-600 py-3 font-medium text-sm text-white transition-colors duration-200 hover:bg-cyan-700 disabled:opacity-70"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg
                className="-ml-1 mr-2 h-4 w-4 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                role="img" // Indicates this is an image
                aria-label="Loading spinner" // Text alternative for screen readers
              >
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
              Verifying...
            </span>
          ) : (
            "Verify the code"
          )}
        </button>

        <button
          type="button"
          className={`mt-4 w-full cursor-pointer border-none bg-transparent text-center text-sm ${
            timer === 0
              ? "text-cyan-600 hover:underline"
              : "cursor-not-allowed text-gray-400"
          }`}
          onClick={handleResendCode}
          disabled={timer > 0 || isLoading}
        >
          {timer === 0 ? "Resend code" : `Resend in ${timer}s`}
        </button>

        {/* Debug information (visible in development) */}
        {process.env.NODE_ENV === "development" && (
          <div className="mt-4 rounded-lg bg-gray-100 p-3 text-gray-600 text-xs">
            <p className="font-semibold">Debug Information:</p>
            <pre className="whitespace-pre-wrap">{debugInfo}</pre>
            <p className="mt-2">Full data object:</p>
            <pre className="whitespace-pre-wrap">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
