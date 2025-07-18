import { useCallback, useEffect, useId, useRef, useState } from "react";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { NavLink } from "react-router";
import Cardtile from "@/components/cardTile.tsx";
import { MapSection } from "@/components/Map";
import Policies from "@/components/Policies";
import ReviewComponent from "@/components/Review";
import SearchBar from "@/components/searchBar.tsx";

type Tab = "Overview" | "Facilities" | "Rooms" | "Policies" | "Reviews" | "Map";

const HotelDetailsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guestDropdownOpen, setGuestDropdownOpen] = useState(false);
  const [guests, setGuests] = useState("2 Adults, 0 Children");

  const sectionRefs = useRef<Record<Tab, HTMLElement | null>>({
    Overview: null,
    Facilities: null,
    Rooms: null,
    Policies: null,
    Reviews: null,
    Map: null,
  });

  // Type-safe ref callback
  const setSectionRef = useCallback(<T extends Tab>(tab: T) => {
    return (el: HTMLElement | null) => {
      sectionRefs.current[tab] = el;
    };
  }, []);

  const tabContent: Record<Tab, string> = {
    Overview: "Overview",
    Facilities: "Facilities",
    Rooms: "Rooms",
    Policies: "Policies",
    Reviews: "Reviews",
    Map: "Map",
  };

  const handleTabClick = (tab: Tab) => {
    const section = sectionRefs.current[tab];
    if (section) {
      const offset = 100; // Adjust for any sticky headers
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveTab(tab);
    }
  };

  useEffect(() => {
    const refs = {} as Record<Tab, HTMLElement | null>;
    for (const tab of Object.keys(tabContent)) {
      refs[tab as Tab] = document.getElementById(tab);
    }
    sectionRefs.current = refs;

    const handleScroll = () => {
      const scrollMargin = 120;
      let closestTab: Tab = "Overview";
      let minDistance = Number.POSITIVE_INFINITY;

      for (const tab of Object.keys(tabContent)) {
        const section = sectionRefs.current[tab as Tab];
        if (!section) {
          continue;
        }

        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - scrollMargin);

        if (rect.top - scrollMargin <= 0 && distance < minDistance) {
          minDistance = distance;
          closestTab = tab as Tab;
        }
      }

      setActiveTab(closestTab);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const overviewId = useId();
  const facilitiesId = useId();
  const roomsId = useId();
  const policiesId = useId();
  const reviewsId = useId();
  const mapId = useId();

  return (
    <div className="flex flex-col gap-8 py-6">
      {/* Enhanced Tabs */}
      <div className="sticky top-0 z-50 bg-white">
        <div className="no-scrollbar flex overflow-x-auto border-b">
          {Object.keys(tabContent).map((tab) => (
            <button
              type="button"
              key={tab}
              onClick={() => handleTabClick(tab as Tab)}
              onKeyUp={(e) => e.key === "Enter" && handleTabClick(tab as Tab)}
              onKeyDown={(e) => e.key === " " && handleTabClick(tab as Tab)}
              className={`relative px-4 py-3 font-medium text-sm transition-colors ${
                activeTab === tab ? "text-primaryBlue" : "text-gray-600"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primaryBlue" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Main Content */}
        <div className="flex-1">
          <section
            id={overviewId}
            title="Overview"
            ref={setSectionRef("Overview")}
            className="scroll-mt-32"
          >
            <h1 className="mb-1 font-bold text-2xl">Labadi Beach Hotel</h1>
            <p className="mb-2 text-gray-600">📍 Labadi, Accra</p>
            <p className="mb-2 text-gray-600">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
            <div className="mb-4 text-gray-600" />
          </section>

          <section
            id={facilitiesId}
            title="Facilities"
            ref={setSectionRef("Facilities")}
            className="scroll-mt-32"
          >
            <div className="mb-6 rounded-lg border border-gray-200 bg-white p-4">
              <h2 className="mb-2 font-semibold text-gray-800">Facilities</h2>
              <div className="flex flex-wrap gap-2">
                {new Array(6).fill("Fitness Center").map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-gray-300 bg-gray-100 px-3 py-1 text-gray-700 text-sm"
                  >
                    🏋️‍♂️ {item}
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="mt-2 cursor-pointer text-primaryBlue text-sm"
              >
                See more
              </button>
            </div>
          </section>
        </div>

        {/* Price and Form Section (kept exactly the same) */}
        <div className="w-full rounded-xl border border-gray-300 p-4 lg:w-[340px]">
          <div className="font-bold text-xl">
            $115{" "}
            <span className="font-normal text-gray-500 text-sm">/night</span>
          </div>

          <div className="mt-4">
            <label
              htmlFor="Check-In"
              className="font-medium text-gray-700 text-sm"
            >
              Check-In
            </label>
            <div className="relative mt-1 flex items-center">
              <FaCalendarAlt className="absolute left-3 text-gray-400" />
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full rounded-md border px-2 py-1 pl-10 text-sm outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="Check-Out"
              className="font-medium text-gray-700 text-sm"
            >
              Check-Out
            </label>
            <div className="relative mt-1 flex items-center">
              <FaCalendarAlt className="absolute left-3 text-gray-400" />
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full rounded-md border px-2 py-1 pl-10 text-sm outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <div className="relative mt-4">
            <label
              htmlFor="Guests"
              className="font-medium text-gray-700 text-sm"
            >
              Guests
            </label>
            <button
              type="button"
              className="mt-1 flex w-full items-center rounded-md border px-2 py-1 text-left"
              onClick={() => setGuestDropdownOpen(!guestDropdownOpen)}
              onKeyUp={(e) =>
                e.key === "Enter" && setGuestDropdownOpen(!guestDropdownOpen)
              }
              onKeyDown={(e) =>
                e.key === " " && setGuestDropdownOpen(!guestDropdownOpen)
              }
            >
              <FaUser className="mr-2 text-gray-400" />
              <span className="text-gray-700 text-sm">{guests}</span>
            </button>

            {guestDropdownOpen && (
              <div className="absolute z-10 mt-1 w-full rounded-md border bg-white shadow-md">
                {[
                  "1 Adult",
                  "2 Adults",
                  "2 Adults, 1 Child",
                  "2 Adults, 2 Children",
                ].map((option) => (
                  <button
                    type="button"
                    key={option}
                    onClick={() => {
                      setGuests(option);
                      setGuestDropdownOpen(false);
                    }}
                    onKeyUp={(e) => {
                      if (e.key === "Enter") {
                        setGuests(option);
                        setGuestDropdownOpen(false);
                      }
                    }}
                    className="w-full px-3 py-2 text-left text-sm hover:bg-gray-100"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="mt-6 rounded-md border p-4 text-gray-700 text-sm">
            <div className="flex justify-between">
              <span>1 night</span>
              <span>$299.00</span>
            </div>
            <div className="mt-2 flex justify-between">
              <span>Taxes and Fees</span>
              <span>$20.00</span>
            </div>
            <div className="mt-2 flex justify-between border-t pt-2 font-semibold">
              <span>Total</span>
              <span>$329.00</span>
            </div>
          </div>

          <NavLink
            to="/checkout"
            className="mt-4 block w-full rounded-md bg-primaryBlue py-2 text-center font-semibold text-sm text-white transition hover:bg-blue-700"
          >
            Reserve
          </NavLink>
        </div>
      </div>

      {/* All other sections with proper section tags and refs */}
      <section
        id={roomsId}
        title="Rooms"
        ref={setSectionRef("Rooms")}
        className="flex-1 scroll-mt-32"
      >
        <h1 className="mr-250 font-bold text-gray-800">Rooms</h1>
        <SearchBar />
        <Cardtile />
      </section>

      <section
        id={policiesId}
        title="Policies"
        ref={setSectionRef("Policies")}
        className="w-full scroll-mt-32"
      >
        <Policies />
      </section>

      <section
        id={reviewsId}
        title="Reviews"
        ref={setSectionRef("Reviews")}
        className="flex-1 scroll-mt-32"
      >
        <h1 className="mr-250 font-bold text-gray-800 text-lg">Reviews</h1>
        <div className="w-full">
          <ReviewComponent />
        </div>
      </section>

      <section
        id={mapId}
        ref={setSectionRef("Map")}
        className="flex-1 scroll-mt-32"
      >
        <h1 className="mr-250 font-bold text-gray-800 text-lg">Maps</h1>
        <MapSection />
      </section>

      <div className="flex-1">
        <h1 className="mr-250 font-bold text-gray-800 text-lg">
          Similar Places
        </h1>
        <div className="w-auto gap-2">
          <Cardtile />
        </div>
      </div>
    </div>
  );
};

export default HotelDetailsSection;
