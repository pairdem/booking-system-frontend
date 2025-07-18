import { ChevronDown, ChevronUp, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FaList, FaThLarge } from "react-icons/fa";

import HotelCard from "@/components/hotelCard";
import HotelCardtiles from "@/components/hotelCardsTiles";

export default function CardsFilters() {
  const [expanded, setExpanded] = useState({
    propertyType: true,
    budgetPerNight: true,
    popularFilters: true,
    amenities: true,
    bedrooms: true,
  });

  type FilterCategory = "propertyType" | "popularFilters" | "amenities";

  const isFilterCategory = (key: string): key is FilterCategory => {
    return ["propertyType", "popularFilters", "amenities"].includes(key);
  };

  type BedroomFilter = {
    minEnabled: boolean;
    maxEnabled: boolean;
    min: number;
    max: number;
  };

  type BudgetFilter = {
    min: number;
    max: number;
  };

  type SelectedFilters = {
    propertyType: string[];
    budgetPerNight: BudgetFilter;
    popularFilters: string[];
    amenities: string[];
    bedrooms: BedroomFilter;
  };

  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    propertyType: [],
    budgetPerNight: { min: 0, max: 0 },
    popularFilters: [],
    amenities: [],
    bedrooms: {
      minEnabled: false,
      maxEnabled: false,
      min: 0,
      max: 1000,
    },
  });

  const handleBedroomMinToggle = (enabled: boolean) => {
    setSelectedFilters((prev) => ({
      ...prev,
      bedrooms: {
        ...prev.bedrooms,
        minEnabled: enabled,
        min: enabled ? prev.bedrooms.min : 0,
      },
    }));
  };

  const handleBedroomMaxToggle = (enabled: boolean) => {
    setSelectedFilters((prev) => ({
      ...prev,
      bedrooms: {
        ...prev.bedrooms,
        maxEnabled: enabled,
        max: enabled ? prev.bedrooms.max : 10,
      },
    }));
  };

  const handleBedroomChange = (min: number, max: number) => {
    setSelectedFilters((prev) => ({
      ...prev,
      bedrooms: {
        ...prev.bedrooms,
        min: min,
        max: max,
      },
    }));
  };

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [viewType, setViewType] = useState("horizontal");

  // Handle mobile view detection
  useEffect(() => {
    const checkMobile = () => setIsMobileView(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Reset all filters
  const handleReset = () => {
    setSelectedFilters({
      propertyType: [],
      budgetPerNight: {
        min: 0,
        max: 1000,
      },
      popularFilters: [],
      amenities: [],
      bedrooms: {
        minEnabled: false,
        maxEnabled: false,
        min: 0,
        max: 1000,
      },
    });
  };

  // Toggle section expand/collapse
  const toggleSection = (section: string) => {
    setExpanded((prev) => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev],
    }));
  };

  // Handle selecting filters
  const handleFilterSelect = (
    category: Exclude<FilterCategory, "budgetPerNight">,
    label: string,
  ) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(label)
        ? prev[category].filter((item) => item !== label)
        : [...prev[category], label],
    }));
  };

  // Handle removing filters
  const handleRemoveFilter = (category: FilterCategory, label: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category].filter((item) => item !== label),
    }));
  };

  // Handle budget range change
  const handleBudgetChange = (min: number, max: number) => {
    setSelectedFilters((prev) => ({
      ...prev,
      budgetPerNight: { min, max },
    }));
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Filters Button */}
      <div className="flex items-center justify-between border-b p-4 lg:hidden">
        <button
          type="button"
          onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          className="flex items-center gap-2 text-primaryBlue"
        >
          <span>Filters</span>
          <ChevronDown
            className={`h-4 w-4 transform transition-transform ${mobileFiltersOpen ? "rotate-180" : ""}`}
          />
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="cursor-pointer font-medium text-primaryBlue text-sm hover:text-blue-800"
        >
          Reset
        </button>
      </div>

      {/* Filters Sidebar - Mobile */}
      {mobileFiltersOpen && (
        <div className="border-gray-200 border-b bg-white p-4 lg:hidden">
          <div className="divide-y divide-gray-200 text-sm">
            <FilterSection
              title="Property type"
              expanded={expanded.propertyType}
              onToggle={() => toggleSection("propertyType")}
            >
              <CheckboxItem
                label="Hotels"
                checked={selectedFilters.propertyType.includes("Hotels")}
                onChange={() => handleFilterSelect("propertyType", "Hotels")}
              />
              <CheckboxItem
                label="Apartments"
                checked={selectedFilters.propertyType.includes("Apartments")}
                onChange={() =>
                  handleFilterSelect("propertyType", "Apartments")
                }
              />
              <CheckboxItem
                label="Guesthouses"
                checked={selectedFilters.propertyType.includes("Guesthouses")}
                onChange={() =>
                  handleFilterSelect("propertyType", "Guesthouses")
                }
              />
              <CheckboxItem
                label="Rentals"
                checked={selectedFilters.propertyType.includes("Rentals")}
                onChange={() => handleFilterSelect("propertyType", "Rentals")}
              />
            </FilterSection>

            <FilterSection
              title="Popular filters"
              expanded={expanded.popularFilters}
              onToggle={() => toggleSection("popularFilters")}
            >
              <CheckboxItem
                label="Free Cancellation"
                checked={selectedFilters.popularFilters.includes(
                  "Free Cancellation",
                )}
                onChange={() =>
                  handleFilterSelect("popularFilters", "Free Cancellation")
                }
              />
              <CheckboxItem
                label="Breakfast included"
                checked={selectedFilters.popularFilters.includes(
                  "Breakfast included",
                )}
                onChange={() =>
                  handleFilterSelect("popularFilters", "Breakfast included")
                }
              />
              <CheckboxItem
                label="4 stars"
                checked={selectedFilters.popularFilters.includes("4 stars")}
                onChange={() => handleFilterSelect("popularFilters", "4 stars")}
              />
              <CheckboxItem
                label="Less than 1 km"
                checked={selectedFilters.popularFilters.includes(
                  "Less than 1 km",
                )}
                onChange={() =>
                  handleFilterSelect("popularFilters", "Less than 1 km")
                }
              />

              {/* Show More Toggle */}
              <button
                type="button"
                className="mt-2 flex items-center gap-1 text-blue-600 text-sm hover:text-blue-800"
                onClick={() => toggleSection("popularFilters")}
              >
                Show {expanded.popularFilters ? "less" : "more"}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    expanded.popularFilters ? "rotate-180" : ""
                  }`}
                />
              </button>
            </FilterSection>

            <FilterSection
              title="Amenities"
              expanded={expanded.amenities}
              onToggle={() => toggleSection("amenities")}
            >
              <CheckboxItem
                label="Restaurant"
                checked={selectedFilters.amenities.includes("Restaurant")}
                onChange={() => handleFilterSelect("amenities", "Restaurant")}
              />
              <CheckboxItem
                label="Room service"
                checked={selectedFilters.amenities.includes("Room service")}
                onChange={() => handleFilterSelect("amenities", "Room service")}
              />
              <CheckboxItem
                label="Front desk"
                checked={selectedFilters.amenities.includes("Front desk")}
                onChange={() => handleFilterSelect("amenities", "Front desk")}
              />
              <CheckboxItem
                label="Free Wi-Fi"
                checked={selectedFilters.amenities.includes("Free Wi-Fi")}
                onChange={() => handleFilterSelect("amenities", "Free Wi-Fi")}
              />
            </FilterSection>
          </div>
        </div>
      )}

      {/* Filters Sidebar - Desktop */}
      <div className="mt-15 hidden min-h-screen max-w-md border-gray-200 border-r bg-white p-1 lg:block lg:min-w-1/4">
        <div className="flex items-center justify-between border-b pb-3">
          <span className="font-medium">FILTERS</span>
          <button
            type="button"
            onClick={handleReset}
            className="cursor-pointer font-medium text-primaryBlue text-sm hover:text-blue-800"
          >
            Reset
          </button>
        </div>

        {/* Filters Sections */}
        <div className="divide-y divide-gray-200 text-sm">
          <FilterSection
            title="Property type"
            expanded={expanded.propertyType}
            onToggle={() => toggleSection("propertyType")}
          >
            <CheckboxItem
              label="Hotels"
              checked={selectedFilters.propertyType.includes("Hotels")}
              onChange={() => handleFilterSelect("propertyType", "Hotels")}
            />
            <CheckboxItem
              label="Apartments"
              checked={selectedFilters.propertyType.includes("Apartments")}
              onChange={() => handleFilterSelect("propertyType", "Apartments")}
            />
            <CheckboxItem
              label="Guesthouses"
              checked={selectedFilters.propertyType.includes("Guesthouses")}
              onChange={() => handleFilterSelect("propertyType", "Guesthouses")}
            />
            <CheckboxItem
              label="Rentals"
              checked={selectedFilters.propertyType.includes("Rentals")}
              onChange={() => handleFilterSelect("propertyType", "Rentals")}
            />
          </FilterSection>

          <FilterSection
            title="Budget per night"
            expanded={expanded.budgetPerNight}
            onToggle={() => toggleSection("budgetPerNight")}
          >
            <div className="space-y-2">
              {/* Range slider */}
              <input
                type="range"
                min="0"
                max="1000" // Adjust max value as needed
                value={selectedFilters.budgetPerNight.max}
                onChange={(e) => {
                  handleBudgetChange(
                    selectedFilters.budgetPerNight.min,
                    Number(e.target.value),
                  );
                }}
                className="h-2 w-full cursor-pointer rounded-lg bg-gray-200 accent-primaryBlue"
              />

              {/* Min/Max display */}
              <div className="flex justify-between text-gray-600 text-sm">
                <span>Min: {selectedFilters.budgetPerNight.min || 0}</span>
                <span>Max: {selectedFilters.budgetPerNight.max || 1000}</span>
              </div>
            </div>
          </FilterSection>

          <FilterSection
            title="Popular filters"
            expanded={expanded.popularFilters}
            onToggle={() => toggleSection("popularFilters")}
          >
            <CheckboxItem
              label="Free Cancellation"
              checked={selectedFilters.popularFilters.includes(
                "Free Cancellation",
              )}
              onChange={() =>
                handleFilterSelect("popularFilters", "Free Cancellation")
              }
            />
            <CheckboxItem
              label="Breakfast included"
              checked={selectedFilters.popularFilters.includes(
                "Breakfast included",
              )}
              onChange={() =>
                handleFilterSelect("popularFilters", "Breakfast included")
              }
            />
            <CheckboxItem
              label="4 stars"
              checked={selectedFilters.popularFilters.includes("4 stars")}
              onChange={() => handleFilterSelect("popularFilters", "4 stars")}
            />
            <CheckboxItem
              label="Less than 1 km"
              checked={selectedFilters.popularFilters.includes(
                "Less than 1 km",
              )}
              onChange={() =>
                handleFilterSelect("popularFilters", "Less than 1 km")
              }
            />

            {/* Show More Toggle */}
            <button
              type="button"
              className="mt-2 flex items-center gap-1 text-blue-600 text-sm hover:text-blue-800"
              onClick={() => toggleSection("popularFilters")}
            >
              Show {expanded.popularFilters ? "more" : "less"}
              <ChevronUp
                className={`h-4 w-4 transition-transform ${
                  expanded.popularFilters ? "rotate-180" : ""
                }`}
              />
            </button>
          </FilterSection>

          <FilterSection
            title="Amenities"
            expanded={expanded.amenities}
            onToggle={() => toggleSection("amenities")}
          >
            <CheckboxItem
              label="Restaurant"
              checked={selectedFilters.amenities.includes("Restaurant")}
              onChange={() => handleFilterSelect("amenities", "Restaurant")}
            />
            <CheckboxItem
              label="Room service"
              checked={selectedFilters.amenities.includes("Room service")}
              onChange={() => handleFilterSelect("amenities", "Room service")}
            />
            <CheckboxItem
              label="Front desk"
              checked={selectedFilters.amenities.includes("Front desk")}
              onChange={() => handleFilterSelect("amenities", "Front desk")}
            />
            <CheckboxItem
              label="Free Wi-Fi"
              checked={selectedFilters.amenities.includes("Free Wi-Fi")}
              onChange={() => handleFilterSelect("amenities", "Free Wi-Fi")}
            />

            {/* Show More Toggle */}
            <button
              type="button"
              className="mt-2 flex items-center gap-1 text-blue-600 text-sm hover:text-blue-800"
              onClick={() => toggleSection("amenities")}
            >
              Show {expanded.amenities ? "more" : "less"}
              <ChevronUp
                className={`h-4 w-4 transition-transform ${
                  expanded.amenities ? "rotate-180" : ""
                }`}
              />
            </button>
          </FilterSection>

          <FilterSection
            title="Bedrooms"
            expanded={expanded.bedrooms}
            onToggle={() => toggleSection("bedrooms")}
          >
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedFilters.bedrooms.minEnabled}
                    onChange={(e) => handleBedroomMinToggle(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-primaryBlue focus:ring-primaryBlue"
                  />
                  <span>Min</span>
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedFilters.bedrooms.maxEnabled}
                    onChange={(e) => handleBedroomMaxToggle(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-primaryBlue focus:ring-primaryBlue"
                  />
                  <span>Max</span>
                </label>
              </div>

              {selectedFilters.bedrooms.minEnabled && (
                <input
                  type="number"
                  placeholder="0"
                  value={selectedFilters.bedrooms.min}
                  onChange={(e) =>
                    handleBedroomChange(
                      Number(e.target.value),
                      selectedFilters.bedrooms.max,
                    )
                  }
                  className="w-full rounded border p-2"
                />
              )}

              {selectedFilters.bedrooms.maxEnabled && (
                <input
                  type="number"
                  placeholder="Any"
                  value={selectedFilters.bedrooms.max}
                  onChange={(e) =>
                    handleBedroomChange(
                      selectedFilters.bedrooms.min,
                      Number(e.target.value),
                    )
                  }
                  className="mt-2 w-full rounded border p-2"
                />
              )}
            </div>
          </FilterSection>
        </div>
        <button
          type="button"
          className="mt-4 ml-10 rounded-lg bg-primaryBlue p-2 text-white text-xs"
        >
          show more options
        </button>
      </div>

      {/* Main Content Area */}
      <div className="px-16 lg:min-w-3/4">
        {/* Selected Filters Bar */}
        {Object.values(selectedFilters).flat().length > 0 && (
          <div className="flex flex-wrap gap-2 pb-4">
            {Object.entries(selectedFilters).map(([category, filters]) =>
              isFilterCategory(category)
                ? (filters as string[]).map((filter) => (
                    <div
                      key={`${category}-${filter}`}
                      className="flex flex-wrap items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm"
                    >
                      <span>{filter}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveFilter(category, filter)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))
                : null,
            )}
          </div>
        )}

        {/* View Type Toggle - Desktop Only */}
        <div className="mt-2 hidden justify-end gap-2 lg:flex">
          <h1 className="pt-1 text-[12px]">View Type:</h1>
          <button
            type="submit"
            onClick={() => setViewType("horizontal")}
            className={`h-[32px] w-[32px] rounded-md p-2 ${viewType === "horizontal" ? "bg-primaryBlue text-white" : "border border-gray-300 bg-white text-gray-600"} hover:bg-primaryBlue hover:text-white`}
          >
            <FaList className="h-[12px] w-[12px]" />
          </button>
          <button
            type="submit"
            onClick={() => setViewType("tiles")}
            className={`h-[32px] w-[32px] rounded-md p-2 ${viewType === "tiles" ? "bg-primaryBlue text-white" : "border border-gray-300 bg-white text-gray-600"} hover:bg-primaryBlue hover:text-white`}
          >
            <FaThLarge className="h-[12px] w-[12px]" />
          </button>
        </div>

        {/* Result Count */}
        <div className="mt-2 text-gray-600 text-xs">
          Showing 1-12 (124 total results)
        </div>
        <div className="mt-3 flex h-auto w-full flex-col overflow-hidden lg:w-[978px]">
          {/* Show tiles on mobile OR when viewType is not horizontal */}
          {viewType !== "horizontal" || mobileFiltersOpen || isMobileView ? (
            <div className="lg:mr-40">
              <HotelCardtiles />
            </div>
          ) : (
            <div className="hidden pr-40 lg:block">
              <HotelCard />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FilterSection({
  title,
  expanded,
  onToggle,
  children,
}: {
  title: string;
  expanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="p-4">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full justify-between text-left font-medium"
      >
        {title}
        <ChevronDown
          className={`h-4 w-4 transform transition-transform ${expanded ? "rotate-180" : ""}`}
        />
      </button>
      {expanded && <div className="mt-2 space-y-2">{children}</div>}
    </div>
  );
}

function CheckboxItem({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center space-x-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <div
        className={`flex h-5 w-5 items-center justify-center rounded border transition-all duration-150 ${checked ? "border-2 border-primaryBlue" : "border-gray-300"}`}
      >
        {checked && <div className="h-2 w-2 rounded-full bg-primaryBlue" />}
      </div>
      <span>{label}</span>
    </label>
  );
}
