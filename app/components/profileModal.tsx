import { X } from "lucide-react";

import google from "@/assets/images/google.avif";
import profile from "@/assets/images/profile.avif";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginWithDifferentAccount: () => void;
  onSignUp: () => void;
}

export default function ProfileModal({
  isOpen,
  onClose,
  onLoginWithDifferentAccount,
  onSignUp,
}: ProfileModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50">
      {/* Modal Box */}
      <div className="absolute top-0 right-0 m-4 w-[400px] rounded-[20px] bg-white p-5 shadow-xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h2 className="mt-4 text-center font-medium text-2xl text-black">
          Welcome back, Hamza
        </h2>

        {/* Profile Picture */}
        <div className="mx-auto mt-4 h-12 w-12 overflow-hidden rounded-full">
          <div
            style={{
              backgroundImage: `url(${profile})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Continue with Google Button */}
        <button
          type="button"
          className="mt-4 flex w-full items-center justify-center rounded-[20px] border border-gray-300 py-2 text-black text-sm transition-colors duration-200 hover:bg-gray-100"
        >
          <div
            className="mr-2 h-5 w-5 bg-center bg-cover"
            style={{ backgroundImage: `url(${google})` }}
          />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="my-4 mt-4 flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Text Links */}
        <p className="mt-6 text-center text-gray-500 text-xs">
          Not you?
          <button
            type="button"
            onClick={onLoginWithDifferentAccount}
            className="cursor-pointer border-none bg-transparent p-0 font-medium text-black"
          >
            Log in with a different account
          </button>
        </p>
        <p className="mt-2 text-center text-gray-500 text-xs">
          Need an account?
          <button
            type="button"
            onClick={onSignUp}
            className="cursor-pointer border-none bg-transparent p-0 font-medium text-black"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}
