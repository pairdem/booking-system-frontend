import { useId } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaRegMoon } from "react-icons/fa";

import banner2 from "@/assets/images/sunsetpath.avif";

export default function Hero() {
  const hotelcityId = useId();
  const checkinId = useId();
  const durationId = useId();
  const guestsId = useId();

  return (
    <section className="bg-white px-2 py-12 md:px-8">
      {/* Main Container with Rounded Image */}
      <div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-center bg-cover p-12 md:p-16"
        style={{ backgroundImage: `url(${banner2})` }}
      >
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          {/* Left Section: Text & Button */}
          <div className="max-w-lg text-white">
            <h1 className="font-bold text-5xl leading-tight md:text-6xl">
              Where You Get Trapped in the Beauty of
            </h1>
            <p className="mt-4 text-gray-200 text-lg">
              At Tia, we believe that every journey is an opportunity for
              adventure, discovery, and unforgettable experiences.
            </p>
            <button
              type="button"
              className="mt-6 flex items-center gap-2 rounded-lg border border-cyan-800 bg-primaryBlue px-6 py-3 font-semibold text-lg text-white shadow-lg transition-all duration-200 hover:scale-95 hover:bg-cyan-700 hover:shadow-sm"
            >
              Book Now
            </button>
          </div>

          {/* Right Section: Find Hotels Form */}
          <div className="w-full rounded-2xl bg-white p-6 text-black shadow-lg md:w-96">
            <h2 className="flex items-center gap-2 font-semibold text-xl">
              Find Hotels
            </h2>
            <div className="mt-4 space-y-4">
              {/* City Input */}
              <div>
                <label
                  htmlFor="hotel-city"
                  className="block text-gray-500 text-sm"
                >
                  City or Hotel Name
                </label>
                <div className="mt-1 flex items-center gap-2 rounded-lg border border-gray-300 bg-gray-200 px-3 py-2">
                  {/*search icon*/}
                  <BiSearchAlt className="text-gray-500" />
                  <input
                    id={hotelcityId}
                    name="hotel-city"
                    type="text"
                    placeholder="Where are you going?"
                    className="w-full bg-transparent text-gray-700 outline-none"
                  />
                </div>
              </div>

              {/* Check-in & Duration */}
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label
                    htmlFor="check-in"
                    className="block text-gray-500 text-sm"
                  >
                    Check-in
                  </label>
                  <div className="mt-1 flex items-center gap-2 rounded-lg border border-gray-300 bg-gray-200 px-3 py-2">
                    {/*<span>📅</span>*/}
                    <input
                      id={checkinId}
                      name="check-in"
                      type="date"
                      className="w-full bg-transparent text-gray-700 outline-none"
                    />
                  </div>
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="duration"
                    className="block text-gray-500 text-sm"
                  >
                    Duration
                  </label>
                  <div className="mt-1 flex items-center gap-2 rounded-lg border border-gray-300 bg-gray-200 px-3 py-2">
                    <FaRegMoon className="text-gray-500" />
                    <input
                      id={durationId}
                      name="duration"
                      type="text"
                      placeholder="2 Nights"
                      className="w-full bg-transparent text-gray-700 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Guests & Rooms */}
              <div>
                <label htmlFor="guests" className="block text-gray-500 text-sm">
                  Guests and Rooms
                </label>
                <div className="mt-1 flex items-center gap-2 rounded-lg border border-gray-300 bg-gray-200 px-3 py-2">
                  {/*search icon*/}
                  <BiSearchAlt className="text-gray-500" />
                  <input
                    id={guestsId}
                    name="guests"
                    type="text"
                    placeholder="2 Adult, 1 Child, 1 Room"
                    className="w-full bg-transparent text-gray-700 outline-none"
                  />
                </div>
              </div>

              {/* Search Button */}
              <button
                type="button"
                className="mt-4 w-full rounded-lg border border-cyan-800 bg-primaryBlue py-3 font-semibold text-lg text-white transition-all duration-200 hover:scale-95 hover:bg-cyan-700 hover:shadow-sm"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
