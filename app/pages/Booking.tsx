// External libraries
import { format } from "date-fns";
import { motion } from "framer-motion";
import { Globe, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { FaCalendarAlt, FaSearch, FaUser } from "react-icons/fa";
import { NavLink } from "react-router";
// Icons
import homeicon from "@/assets/icons/home.avif";
import loveicon from "@/assets/icons/Icon Button.avif";
import shareicon from "@/assets/icons/Icon Button (1).avif";
import bookingimg3 from "@/assets/images/d-suite.avif";
import bookingimg1 from "@/assets/images/d-suite1.avif";
// Images and assets
import bookingimg from "@/assets/images/go2africa.avif";
import bookingimg2 from "@/assets/images/travel.avif";
// Relative project components
import HotelDetailsSection from "@/components/bookingSection";
import Footer from "@/components/Footer";
// Absolute internal components
import { Calendar } from "@/components/shadcn/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn/popover";

export default function Booking() {
  const [searchTerm, setSearchTerm] = useState("");
  const [guests, setGuests] = useState("");
  const [isGuestDropdownOpen, setGuestDropdownOpen] = useState(false);
  const [_suggestions, setSuggestions] = useState<string[]>([]);
  const locations = ["Accra", "Cape Coast", "Kumasi", "Takoradi", "Tamale"];
  const [_scrolling, setScrolling] = useState(false); // Track scroll state
  const [checkIn, setCheckIn] = useState<Date | undefined>();
  const [checkOut, setCheckOut] = useState<Date | undefined>();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSuggestions(
      locations.filter((loc) =>
        loc.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  };

  return (
    <div className="mx-2 flex flex-col items-center border-gray-300 border-b px-4 pt-4 md:mx-8 md:px-12">
      {/* Navbar */}
      <div className="flex w-full flex-wrap items-center justify-between md:flex-nowrap">
        {/* Logo */}
        <NavLink to="/home" className="mb-2 md:mb-0">
          <h1 className="font-bold text-2xl text-deepBlue">tiaAfrika</h1>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="ml-0 hidden space-x-6 text-gray-600 md:ml-40 md:flex">
          <NavLink to="/" className="hover:text-primaryBlue">
            Home
          </NavLink>
          <NavLink to="/explore" className="hover:text-primaryBlue">
            Explore
          </NavLink>
          <NavLink
            to="/book"
            className="border-primaryBlue border-b-2 font-semibold text-primaryBlue hover:text-primaryBlue"
          >
            Make a Booking
          </NavLink>
          <NavLink to="/about" className="hover:text-primaryBlue">
            About Us
          </NavLink>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-md border p-2"
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* User Actions */}
        <div className="relative hidden items-center gap-6 md:flex">
          <button
            type="button"
            className="rounded-full border p-2 hover:shadow-md"
          >
            <Globe className="h-5 w-5" />
          </button>
          <NavLink to="/language" className="hover:text-primaryBlue">
            Language
          </NavLink>
          <NavLink
            to="/register"
            className="text-primaryBlue hover:text-blue-950"
          >
            Register
          </NavLink>
          <button
            type="button"
            className="rounded-lg bg-primaryBlue p-2 text-sm text-white hover:bg-blue-950"
          >
            SIGN IN
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="mt-4 flex w-full flex-col gap-4 text-gray-600 md:hidden">
            <NavLink to="/explore" className="hover:text-primaryBlue">
              Explore
            </NavLink>
            <NavLink to="/book" className="hover:text-primaryBlue">
              Make a Booking
            </NavLink>
            <NavLink to="/about" className="hover:text-primaryBlue">
              About Us
            </NavLink>
            <div className="mt-2 flex items-center gap-4">
              <button
                type="button"
                className="rounded-full border p-2 hover:shadow-md"
              >
                <Globe className="h-5 w-5" />
              </button>
              <NavLink to="/language" className="hover:text-primaryBlue">
                Language
              </NavLink>
              <NavLink
                to="/register"
                className="text-primaryBlue hover:text-blue-950"
              >
                Register
              </NavLink>
              <button
                type="button"
                className="rounded-lg bg-primaryBlue p-2 text-sm text-white hover:bg-blue-950"
              >
                SIGN IN
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="relative w-full">
        <div className="mx-auto w-full max-w-6xl px-4 py-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl border border-gray-200 bg-white shadow-lg"
          >
            <div className="flex flex-col items-center sm:flex-row sm:items-stretch">
              {/* Where to? Search input */}
              <div className="relative flex w-full items-center gap-2 border-gray-200 border-b p-3 sm:mr-4 sm:w-auto sm:border-r sm:border-b-0">
                <FaSearch className="shrink-0 text-gray-400" />
                <div className="w-full">
                  <div className="mb-1 text-gray-500 text-xs">Where to?</div>
                  <input
                    type="text"
                    placeholder="Search destinations"
                    className="w-full truncate font-medium text-sm outline-none"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>
              </div>

              {/* Conditionally hide on mobile (small screen) */}
              <div className="hidden w-full flex-wrap gap-4 sm:flex sm:w-auto">
                {/* Check-in */}
                <div className="relative min-w-[180px] border-gray-200 border-b p-3 sm:min-w-[250px] sm:border-r sm:border-b-0">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="shrink-0 text-gray-400" />
                    <div className="w-full">
                      <div className="mb-1 text-gray-500 text-xs">Check-in</div>
                      <Popover>
                        <PopoverTrigger asChild={true}>
                          <button
                            type="button"
                            className="w-full truncate text-left font-medium text-sm"
                          >
                            {checkIn ? format(checkIn, "MMM d") : "Add date"}
                          </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={checkIn}
                            onSelect={setCheckIn}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </div>

                {/* Check-out */}
                <div className="min-w-[180px] border-gray-200 border-b p-3 sm:min-w-[250px] sm:border-r sm:border-b-0">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="shrink-0 text-gray-400" />
                    <div className="w-full">
                      <div className="mb-1 text-gray-500 text-xs">
                        Check-out
                      </div>
                      <Popover>
                        <PopoverTrigger asChild={true}>
                          <button
                            type="button"
                            className="w-full truncate text-left font-medium text-sm"
                          >
                            {checkOut ? format(checkOut, "MMM d") : "Add date"}
                          </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={checkOut}
                            onSelect={setCheckOut}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </div>

                {/* Guests */}
                <div className="relative min-w-[100px] border-gray-200 border-b p-3 sm:min-w-[200px] sm:border-r sm:border-b-0">
                  <div className="flex items-center gap-2">
                    <FaUser className="shrink-0 text-gray-400" />
                    <div className="w-full">
                      <div className="mb-1 text-gray-500 text-xs">Guests</div>
                      <button
                        type="button"
                        className="w-full truncate text-left font-medium text-sm"
                        onClick={() =>
                          setGuestDropdownOpen(!isGuestDropdownOpen)
                        }
                      >
                        {guests} {guests === "1" ? "guest" : "guests"}
                      </button>
                    </div>
                  </div>
                  {isGuestDropdownOpen && (
                    <div className="absolute top-full right-0 left-0 z-10 mt-1 rounded-md border border-gray-200 bg-white p-2 shadow-lg">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <button
                          type="button"
                          key={num}
                          className={`w-full rounded p-2 text-left text-sm ${guests === num.toString() ? "bg-blue-50 text-primaryBlue" : "hover:bg-gray-50"}`}
                          onClick={() => {
                            setGuests(num.toString());
                            setGuestDropdownOpen(false);
                          }}
                        >
                          {num} {num === 1 ? "guest" : "guests"}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Search Button with Blue Background */}
                <div className="ml-4 flex min-w-[10px] items-center justify-center border-gray-200 border-b sm:min-w-[10px] sm:border-b-0">
                  <button
                    type="button"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-primaryBlue text-white transition-colors hover:bg-blue-700"
                    onClick={() => {
                      /* Trigger your search functionality here */
                    }}
                  >
                    <FaSearch />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Location and Result Count */}
      <div className="mt-2 flex w-full justify-between">
        {/* Location - absolutely positioned at 418px from left */}
        <h2 className="flex items-center gap-2">
          <span>
            <img src={homeicon} alt="homeicon" className="h-4 w-4" />
          </span>
          <span className="text-xs">Greater Accra ▶ Osu</span>
          <span className="text-xs"> ▶ Apartment 1</span>
        </h2>
        <div className="flex gap-2">
          <img src={shareicon} alt="Share" className="h-8 w-8" />
          <img src={loveicon} alt="Love" className="h-8 w-8" />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-4 lg:flex-row">
        {/* Left Main Image - Full width on mobile, fixed on desktop */}
        <div className="group relative w-full lg:w-[65%]">
          <img
            src={bookingimg}
            alt="Main booking_image"
            className="h-auto w-full rounded-[10px] object-cover transition-transform duration-300 group-hover:scale-[1.01] lg:h-[467px]"
          />
          <div className="absolute inset-0 rounded-[10px] bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {" "}
          </div>
        </div>

        {/* Right Column - Stacks under main image on mobile */}
        <div className="flex w-full flex-col gap-4 lg:w-[35%]">
          {/* Top Right Image */}
          <div className="group relative">
            <img
              src={bookingimg1}
              alt="Secondary booking_image"
              className="h-auto w-full rounded-[10px] object-cover transition-transform duration-300 group-hover:scale-[1.02] lg:h-[298px]"
            />
            <div className="absolute inset-0 rounded-[10px] bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {" "}
            </div>
          </div>

          {/* Bottom Right Two Images */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="group relative w-full sm:w-1/2">
              <img
                src={bookingimg2}
                alt="Small booking image_1"
                className="h-auto w-full rounded-[10px] object-cover transition-transform duration-300 group-hover:scale-[1.03] lg:h-[149px]"
              />
              <div className="absolute inset-0 rounded-[10px] bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {" "}
              </div>
            </div>

            <div className="group relative w-full sm:w-1/2">
              <img
                src={bookingimg3}
                alt="Smallbooking_image_1"
                className="h-auto w-full rounded-[10px] object-cover transition-transform duration-300 group-hover:scale-[1.03] lg:h-[149px]"
              />
              <div className="absolute inset-0 flex items-center justify-center rounded-[10px] bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <NavLink
                  to="/images"
                  className="rounded-lg bg-primaryBlue px-4 py-2 font-medium text-lg text-white transition-colors hover:bg-blue-700"
                >
                  View More
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        {/* Hotel Details Section - Constrained width on large screens, full width on mobile */}
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <HotelDetailsSection />
        </div>
      </div>
      <div className="inset-x-0 bottom-0 z-10 w-screen">
        <Footer />
      </div>
    </div>
  );
}
