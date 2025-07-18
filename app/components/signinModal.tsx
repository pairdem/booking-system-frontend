import { X } from "lucide-react";
import facebook from "@/assets/images/facebook.avif";
import google from "@/assets/images/google.avif";
import type { SignInModalProps } from "@/components/signinModal.types";
import generateRandomState from "./RandomGenerator";

export default function SignInModal({
  isOpen,
  onClose,
  openLoginModal,
}: SignInModalProps) {
  if (!isOpen) {
    return null;
  }

  // Function to handle both opening the login modal and closing the sign-in modal
  const handleOpenLoginModal = () => {
    openLoginModal(); // Open the login modal
    onClose(); // Close the sign-in modal
  };

  const fstate = generateRandomState();

  const handleGoogleLogin = () => {
    // Redirect to your backend OAuth endpoint
    window.location.href = `https://booking-system-backend-1.onrender.com/api/v1/oauth/google?fstate=${fstate}`;
    localStorage.setItem("fstate", fstate);
  };

  const handleFacebookLogin = () => {
    // Redirect to your backend OAuth endpoint
    window.location.href = `https://booking-system-backend-1.onrender.com/api/v1/oauth/facebook?fstate=${fstate}`;
    localStorage.setItem("fstate", fstate);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      {/* Modal Box */}
      <div className="relative h-[500px] w-[480px] rounded-2xl bg-white p-6 shadow-xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <X size={24} />
        </button>

        {/* Profile Placeholder */}
        <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-gray-200" />

        {/* Title */}
        <h2 className="text-center font-normal text-3xl text-black">
          Book affordable hotels, <br /> apartments and many more
        </h2>

        {/* Subtitle */}
        <p className="mt-1 text-center text-gray-500 text-sm">
          Sign up to see more
        </p>

        {/* Sign-Up Buttons */}
        <div className="mt-6 space-y-3">
          <button
            type="button"
            className="w-full rounded-lg bg-primaryBlue py-3 text-sm text-white hover:bg-lightBlue"
            onClick={handleOpenLoginModal}
          >
            Continue with email
          </button>
          <button
            onClick={handleFacebookLogin}
            type="button"
            className="flex w-full items-center justify-center rounded-lg border border-gray-300 py-3 text-black text-sm"
          >
            <div
              className="mr-2 h-6 w-7 bg-center bg-cover"
              style={{ backgroundImage: `url(${facebook})` }}
            />
            Continue with Facebook
          </button>
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="flex w-full items-center justify-center rounded-lg border border-gray-300 py-3 text-black text-sm"
          >
            <div
              className="mr-2 h-5 w-5 bg-center bg-cover"
              style={{ backgroundImage: `url(${google})` }}
            />
            Continue with Google
          </button>
        </div>

        {/* Terms & Conditions */}
        <p className="mt-4 text-center text-gray-500 text-xs">
          By continuing, you agree to the
          <span className="text-primaryBlue">Terms of Service</span> and
          acknowledge you've read our
          <span className="text-primaryBlue">Privacy Policy</span>.
        </p>

        {/* Already a Member */}
        <p className="mt-3 text-center text-gray-500 text-sm">
          Already a member?
          <button
            type="button"
            className="cursor-pointer border-none bg-transparent p-0 font-medium text-black"
            onClick={handleOpenLoginModal} // Updated handler to close SignInModal
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}
