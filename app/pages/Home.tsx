import { useEffect, useState } from "react";
import About from "@/components/About";
import CTA from "@/components/Cta";
import Event from "@/components/Event";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LoginModal from "@/components/loginModal";
import Navbar from "@/components/Navbar";
import OtpModal from "@/components/Otp";
import PopularListings from "@/components/popularListings";
import RegisterModal from "@/components/registerModal";
import SignInModal from "@/components/signinModal";

function Home() {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [otpData, setOtpData] = useState<{
    email: string;
    full_name: string;
    phone: string;
    password: string;
  } | null>(null);

  // ✅ Correct place to get token on render
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setIsLoggedIn(!!token);
  }, []);

  const closeSignInModal = () => setIsSignInModalOpen(false);

  const openRegisterModal = () => setIsRegisterModalOpen(true);
  const closeRegisterModal = () => setIsRegisterModalOpen(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const openOtpModal = (data: {
    email: string;
    full_name: string;
    phone: string;
    password: string;
  }) => {
    setOtpData(data);
    setIsOtpModalOpen(true);
  };

  const closeOtpModal = () => {
    setIsOtpModalOpen(false);
    setOtpData(null);
  };

  const openSignInModal = () => {
    // Save current page path before opening modal
    localStorage.setItem("redirect_path", window.location.href);
    setIsSignInModalOpen(true);
  };

  return (
    <>
      <Navbar
        openSignInModal={openSignInModal}
        openRegisterModal={openRegisterModal}
        isLoggedIn={isLoggedIn}
      />
      <Hero />
      <About />
      <Event />
      <PopularListings />
      <CTA />
      <Footer />

      {/* Sign In Modal */}
      <SignInModal
        isOpen={isSignInModalOpen}
        onClose={closeSignInModal}
        openLoginModal={openLoginModal}
      />

      {/* Register Modal */}
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={closeRegisterModal}
        openOtpModal={openOtpModal}
        openLoginModal={() => {
          closeRegisterModal();
          openLoginModal();
        }}
      />

      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />

      {/* OTP Modal */}
      <OtpModal
        isOpen={isOtpModalOpen}
        onClose={closeOtpModal}
        data={otpData}
      />
    </>
  );
}

export default Home;
