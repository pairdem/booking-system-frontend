import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { object, string } from "zod";

import facebook from "@/assets/images/facebook.avif";
import google from "@/assets/images/google.avif";

// Define validation schema with Zod
const loginSchema = object({
  email: string().email("Please enter a valid email address"),
  password: string()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password must not exceed 32 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/, {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    }),
});

type LoginFormData = z.infer<typeof loginSchema>;

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const emailId = useId();
  const passwordId = useId();

  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = async (data: LoginFormData) => {
    setIsLoading(true);
    setApiError(null);

    try {
      const response = await fetch("/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || "Login failed");
      }

      alert("Login successful!");
      reset(); // Reset form fields
      onClose(); // Close login modal
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "An unexpected error occurred";
      setApiError(message);
      alert(`Login failed: ${message}`);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <button
          type="button"
          onClick={() => {
            reset();
            onClose();
          }}
          className="absolute top-4 right-4 text-gray-500 transition-colors hover:text-black"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <h2 className="mb-6 text-center font-medium text-2xl text-black">
          Log in
        </h2>

        <div className="space-y-4">
          <button
            type="button"
            className="flex w-full items-center justify-center rounded-full border border-gray-300 py-3 font-medium text-black text-sm"
            disabled={isLoading}
          >
            <div
              className="mr-2 h-5 w-5 bg-center bg-cover"
              style={{ backgroundImage: `url(${facebook})` }}
            />
            Log in with Facebook
          </button>
          <button
            type="button"
            className="flex w-full items-center justify-center rounded-full border border-gray-300 py-3 font-medium text-black text-sm"
            disabled={isLoading}
          >
            <div
              className="mr-2 h-5 w-5 bg-center bg-cover"
              style={{ backgroundImage: `url(${google})` }}
            />
            Log in with Google
          </button>

          <div className="my-4 flex items-center">
            <hr className="flex-grow border-gray-300" />
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="mb-1 block font-medium text-gray-700 text-sm"
              >
                Email address
              </label>
              <input
                id={emailId}
                type="email"
                className={`w-full rounded-lg border p-3 text-gray-700 text-sm ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="your.email@example.com"
                disabled={isLoading}
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-red-600 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1 block font-medium text-gray-700 text-sm"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id={passwordId}
                  type={showPassword ? "text" : "password"}
                  className={`w-full rounded-lg border p-3 pr-10 text-gray-700 text-sm ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="••••••••"
                  disabled={isLoading}
                  {...register("password")}
                />
                <button
                  type="button"
                  className="absolute top-3 right-3 text-gray-500 text-sm"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
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

            <div className="flex items-center justify-between">
              <button
                type="button"
                className="font-medium text-cyan-600 text-sm hover:text-cyan-700"
                disabled={isLoading}
              >
                Forgot password?
              </button>
            </div>

            {apiError && (
              <div className="rounded-lg bg-red-50 p-3 text-red-600 text-sm">
                {apiError}
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-lg bg-cyan-600 py-3 font-medium text-sm text-white transition-colors hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-70"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="-ml-1 mr-2 h-4 w-4 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
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
                  Logging in...
                </span>
              ) : (
                "Log in"
              )}
            </button>
          </form>

          <p className="text-center text-gray-600 text-sm">
            Don't have an account?{" "}
            <button
              type="button"
              className="font-medium text-cyan-600 hover:text-cyan-700"
              disabled={isLoading}
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
