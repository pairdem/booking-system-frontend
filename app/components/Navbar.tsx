import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { LuGlobe } from "react-icons/lu";
import { NavLink } from "react-router";
import type { NavbarProps } from "@/components/navbar.types";
import ProfileModal from "@/components/profileModal";

export default function Navbar({
  openSignInModal,
  openRegisterModal,
  isLoggedIn,
}: NavbarProps) {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const openProfileModal = () => setIsProfileModalOpen(true);
  const closeProfileModal = () => setIsProfileModalOpen(false);

  const handleLoginWithDifferentAccount = () => {
    closeProfileModal();
    openSignInModal();
  };

  const handleSignUp = () => {
    closeProfileModal();
    openRegisterModal();
  };

  return (
    <>
      <section className="bg-white px-9">
        <nav className="flex flex-col gap-4 bg-white p-4">
          {/* Top Navigation Bar */}
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-2xl text-deepBlue">This Is Africa</h1>
            <ul className="ml-0 hidden space-x-6 text-gray-600 md:ml-40 md:flex">
              <NavLink to="/">
                <li className="cursor-pointer border-primaryBlue border-b-2 font-semibold text-primaryBlue hover:text-black">
                  Home
                </li>
              </NavLink>
              <NavLink to="/explore">
                <li className="cursor-pointer hover:text-black">Explore</li>
              </NavLink>
              <NavLink to="/book">
                <li className="cursor-pointer hover:text-black">
                  Make a Booking
                </li>
              </NavLink>
              <NavLink to="/about">
                <li className="cursor-pointer hover:text-black">About Us</li>
              </NavLink>
            </ul>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 rounded-full border px-3 py-1">
                <LuGlobe className="text-gray-800" />
                <span className="text-gray-600">Language</span>
              </div>

              {isLoggedIn ? (
                <>
                  <NavLink
                    to="/"
                    className="rounded-lg border border-primaryBlue bg-primaryBlue px-3 py-2 text-sm text-white transition-all duration-200 hover:scale-95 hover:bg-cyan-700 hover:shadow-sm"
                  >
                    Dashboard
                  </NavLink>
                  <button
                    onClick={() => {
                      localStorage.removeItem("access_token");
                      localStorage.removeItem("user");
                      window.location.reload();
                    }}
                    className="rounded-lg border border-red-500 bg-white px-3 py-2 text-red-500 text-sm transition-all duration-200 hover:scale-95 hover:shadow-sm"
                    type="button"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={openRegisterModal}
                    className="rounded-lg border border-cyan-800 bg-primaryBlue px-3 py-2 text-sm text-white transition-all duration-200 hover:scale-95 hover:bg-cyan-700 hover:shadow-sm"
                    type="button"
                  >
                    REGISTER
                  </button>
                  <button
                    onClick={openSignInModal}
                    className="rounded-lg border border-primaryBlue bg-white px-3 py-2 text-primaryBlue text-sm transition-all duration-200 hover:scale-95 hover:bg-white hover:shadow-sm"
                    type="button"
                  >
                    SIGN IN
                  </button>
                </>
              )}

              <button
                type="button"
                onClick={openProfileModal}
                className="text-gray-800 transition-colors duration-200 hover:text-gray-600"
              >
                <CgProfile className="text-gray-800" size={24} />
              </button>
            </div>
          </div>
        </nav>
      </section>

      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={closeProfileModal}
        onLoginWithDifferentAccount={handleLoginWithDifferentAccount}
        onSignUp={handleSignUp}
      />
    </>
  );
}
