import { format } from "date-fns";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaCalendarAlt, FaSearch, FaUser } from "react-icons/fa";
import { Button } from "@/components/shadcn/button";
import { Calendar } from "@/components/shadcn/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn/popover";

export default function SearchBar() {
  const [guests, setGuests] = useState("");
  const [isGuestDropdownOpen, setGuestDropdownOpen] = useState(false);
  const [checkIn, setCheckIn] = useState<Date | undefined>();
  const [checkOut, setCheckOut] = useState<Date | undefined>();
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <div className="border-gray-300">
      {/* Search Section */}
      <section className="relative flex h-auto items-center bg-cover py-4 sm:h-[168px] sm:py-0">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex w-full justify-center px-4"
        >
          <div className="flex h-auto w-full flex-col items-center gap-4 rounded-xl border border-gray-200 bg-white px-8 py-4 shadow-sm transition-all sm:h-[87px] sm:flex-row sm:gap-8 sm:px-10 sm:py-16">
            {/* Mobile Search Bar */}
            <div className="flex w-full items-center rounded-xl border border-gray-200 bg-white px-3 py-2 sm:hidden">
              <FaSearch className="flex-shrink-0 text-gray-400" />
              <span className="flex-1 text-gray-500 text-sm">
                Where are you going?
              </span>
              <button
                type="button"
                className="ml-2 rounded-lg bg-primaryBlue p-2 text-white"
                onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              >
                <FaSearch className="h-4 w-4" />
              </button>
              {mobileSearchOpen && (
                <div className="absolute top-full z-10 mt-2 w-full rounded-md bg-white shadow-md">
                  {/* Mobile Dropdown for Search */}
                  <div className="p-2">
                    {/* Add the dropdown content or search features here */}
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-300 p-2"
                      placeholder="Search destinations..."
                    />
                    <button
                      type="button"
                      className="mt-2 w-full rounded-lg bg-primaryBlue py-2 text-white"
                    >
                      Search
                    </button>
                  </div>
                </div>
              )}
            </div>
            {/* Desktop Form */}
            <div className="hidden w-full items-center gap-8 sm:flex sm:flex-row">
              {/* Check-In */}
              <div className="sm:flex-1">
                <label
                  htmlFor="Check-in"
                  className="mb-1 ml-2 block font-medium text-gray-700 text-sm"
                >
                  Check-In
                </label>
                <div className="flex w-full items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 sm:px-4 sm:py-1">
                  <FaCalendarAlt className="flex-shrink-0 text-gray-400" />
                  <Popover>
                    <PopoverTrigger asChild={true}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-left text-gray-700 text-sm outline-none"
                      >
                        {checkIn
                          ? format(checkIn, "MMM d, yyyy")
                          : "Select date"}
                      </Button>
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
              {/* Check-Out */}
              <div className="sm:flex-1">
                <label
                  htmlFor="Check-out"
                  className="mb-1 ml-2 block font-medium text-gray-700 text-sm"
                >
                  Check-Out
                </label>
                <div className="flex w-full items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 sm:px-4 sm:py-1">
                  <FaCalendarAlt className="flex-shrink-0 text-gray-400" />
                  <Popover>
                    <PopoverTrigger asChild={true}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-left text-gray-700 text-sm outline-none"
                      >
                        {checkOut
                          ? format(checkOut, "MMM d, yyyy")
                          : "Select date"}
                      </Button>
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
              {/* Guests */}
              <div className="relative sm:flex-1">
                <label
                  htmlFor="Guests"
                  className="mb-1 ml-2 block font-medium text-gray-700 text-sm"
                >
                  Guests
                </label>
                <div className="flex w-full items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 sm:px-4 sm:py-3">
                  <FaUser className="flex-shrink-0 text-gray-400" />
                  <button
                    type="button"
                    onClick={() => setGuestDropdownOpen(!isGuestDropdownOpen)}
                    className="w-full text-left text-gray-700 text-sm outline-none"
                  >
                    {guests} Guest{guests !== "1" && "s"}
                  </button>
                </div>
                {isGuestDropdownOpen && (
                  <div className="absolute top-full z-10 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg sm:w-[280px]">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        key={num}
                        type="button"
                        className="w-full rounded-md p-3 text-left text-sm hover:bg-gray-100"
                        onClick={() => {
                          setGuests(num.toString());
                          setGuestDropdownOpen(false);
                        }}
                      >
                        {num} Guest{num !== 1 && "s"}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {/* Search Button */}
              <button
                type="button"
                className="mt-2 w-full rounded-lg bg-primaryBlue px-3 py-3 font-medium text-white transition-all hover:bg-blue-700 sm:mt-0 sm:w-auto"
              >
                Search
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
