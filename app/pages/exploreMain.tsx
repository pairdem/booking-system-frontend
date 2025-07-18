import { format } from "date-fns";
import { motion } from "framer-motion";
import { Globe, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { FaCalendarAlt, FaSearch, FaUser } from "react-icons/fa";
import { NavLink } from "react-router";
import CardsFilters from "@/components/cardsFilters";
import Footer from "@/components/Footer";
import { Calendar } from "@/components/shadcn/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn/popover";
import SortControls from "@/components/sortControls";

export default function Explore() {
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
    <div className="flex flex-col items-center border-gray-300 border-b px-4 pt-4 md:mx-12 md:px-12">
      {/* Navbar */}
      <div className="flex w-full flex-wrap items-center justify-between md:flex-nowrap">
        {/* Logo */}
        <NavLink to="/home" className="mb-2 md:mb-0">
          <h1 className="font-bold text-2xl text-deepBlue">tiaAfrika</h1>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="ml-0 hidden space-x-6 text-primaryText md:ml-30 md:flex">
          <NavLink to="/" className="hover:text-primaryBlue">
            Home
          </NavLink>
          <NavLink
            to="/explore"
            className="border-primaryBlue border-b-2 font-semibold text-primaryBlue hover:text-primaryBlue"
          >
            Explore
          </NavLink>
          <NavLink to="/book" className="hover:text-primaryBlue">
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
        <div className="relative hidden items-center gap-4 md:flex">
          <button
            type="button"
            className="rounded-full border p-2 text-primaryText hover:shadow-md"
          >
            <Globe className="h-5 w-5" />
          </button>
          <NavLink
            to="/language"
            className="text-primaryText hover:text-primary"
          >
            Language
          </NavLink>
          <NavLink
            to="/register"
            className="rounded-lg border border-PrimaryText p-2 text-primaryBlue hover:text-blue-950"
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
            <NavLink to="/" className="hover:text-primaryBlue">
              Home
            </NavLink>
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

                {searchTerm && _suggestions.length > 0 && (
                  <ul className="absolute top-full right-0 left-0 z-10 mt-1 rounded-md border border-gray-200 bg-white p-2 shadow-lg">
                    {_suggestions.map((suggestion) => (
                      <li key={suggestion}>
                        <button
                          type="button"
                          className="w-full cursor-pointer px-4 py-2 text-left text-sm hover:bg-gray-100"
                          onClick={() => {
                            setSearchTerm(suggestion);
                            setSuggestions([]);
                          }}
                        >
                          {suggestion}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Conditionally hide on mobile (small screen) */}
              <div className="hidden w-full flex-wrap gap-4 sm:flex sm:w-auto">
                {/* Check-in */}
                <div className="relative min-w-[180px] border-gray-200 border-b p-3 sm:min-w-[250px] sm:border-r sm:border-b-0">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="shrink-0 text-gray-400" />
                    <div className="w-full">
                      <div className="mb-1 text-primaryText text-xs">
                        Check-in
                      </div>
                      <Popover>
                        <PopoverTrigger asChild={true}>
                          <button
                            type="button"
                            className="w-full truncate text-left font-medium text-primaryText text-sm"
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
                            className="w-full truncate text-left font-medium text-primaryText text-sm"
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
                        className="w-full truncate text-left font-medium text-primaryText text-sm"
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
                          key={num}
                          type="button"
                          className="w-full px-3 py-1 text-left text-sm hover:bg-gray-100"
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
                <div className="flex min-w-[10px] items-center justify-center sm:min-w-[10px]">
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
      <div className="mt-2 flex w-screen max-w-screen-xl items-center justify-between">
        {/* Location */}
        <h2 className="pl-2 font-semibold text-gray-900 text-sm">
          Greater Accra ▶ Osu
        </h2>

        {/* Sort Controls */}
        <div className="flex justify-end px-12 pl-10">
          <SortControls
            onSortChange={(option) => console.log("Sort by:", option)}
          />
        </div>
      </div>

      {/* Filter & Cards Section */}
      <div className="mb-20 flex w-auto pl-10">
        <CardsFilters />
      </div>

      <div className="inset-x-0 bottom-0 z-10 w-screen">
        <Footer />
      </div>
    </div>
  );
}
