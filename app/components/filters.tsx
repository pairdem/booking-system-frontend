import { ChevronDown, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Range } from "react-range";

export default function Filters() {
  const [expanded, setExpanded] = useState({
    propertyType: true,
    budget: true,
    popularFilters: true,
    amenities: true,
    bedrooms: true,
    bathrooms: true,
  });

  const [budget, setBudget] = useState({ min: 0, max: 500 });
  const [bedrooms, setBedrooms] = useState({ min: 1, max: 5 });
  const [bathrooms, setBathrooms] = useState({ min: 1, max: 3 });

  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: string[];
  }>({
    propertyType: [],
    popularFilters: [],
    amenities: [],
  });

  const handleReset = () => {
    setSelectedFilters({
      propertyType: [],
      popularFilters: [],
      amenities: [],
    });
    setBudget({ min: 0, max: 500 });
    setBedrooms({ min: 1, max: 5 });
    setBathrooms({ min: 1, max: 3 });
  };

  const toggleSection = (section: string) => {
    setExpanded((prev) => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev],
    }));
  };

  const handleFilterSelect = (category: string, label: string) => {
    setSelectedFilters((prev) => {
      const updatedFilters = { ...prev };
      if (updatedFilters[category].includes(label)) {
        updatedFilters[category] = updatedFilters[category].filter(
          (item) => item !== label,
        );
      } else {
        updatedFilters[category] = [...updatedFilters[category], label];
      }
      return updatedFilters;
    });
  };

  return (
    <div className="mt-10 min-h-screen w-1/4 max-w-md border-gray-200 border-r bg-white p-4">
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

        {/* Budgets Per Night */}

        <FilterSection
          title="Budget per night"
          expanded={expanded.budget}
          onToggle={() => toggleSection("budget")}
        >
          <div className="relative justify-between space-y-4">
            {/* Slider */}
            <Range
              step={10}
              min={0}
              max={1000}
              values={[budget.min, budget.max]}
              onChange={(values) =>
                setBudget({ min: values[0], max: values[1] })
              }
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  className="relative h-2 justify-between rounded-sm bg-gray-300"
                >
                  <div
                    className="h-2 bg-primaryBlue"
                    style={{
                      left: `${(budget.min / 1000) * 100}%`,
                      width: `${((budget.max - budget.min) / 1000) * 100}%`,
                    }}
                  />
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  className="relative h-2 w-2 rounded-full bg-primaryBlue"
                />
              )}
            />

            {/* Min & Max Inputs */}
            <div className="flex justify-between text-sm">
              {/* Min Input */}
              <div className="flex flex-col items-center">
                <label htmlFor="min-budget" className="font-medium text-xs">
                  Min
                </label>
                <NumberInput
                  label="min-budget"
                  value={budget.min}
                  onChange={(val) =>
                    setBudget((prev) => ({ ...prev, min: val }))
                  }
                />
              </div>

              {/* Max Input - Styled to drop like the image */}
              <div className="flex flex-col items-center">
                <label htmlFor="max-budget" className="font-medium text-xs">
                  Max
                </label>
                <NumberInput
                  label="max-budget"
                  value={budget.max}
                  onChange={(val) =>
                    setBudget((prev) => ({ ...prev, max: val }))
                  }
                />
              </div>
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
            checked={selectedFilters.popularFilters.includes("Less than 1 km")}
            onChange={() =>
              handleFilterSelect("popularFilters", "Less than 1 km")
            }
          />
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

        {/* Bedrooms */}
        <FilterSection
          title="Bedrooms"
          expanded={expanded.bedrooms}
          onToggle={() => toggleSection("bedrooms")}
        >
          <div className="relative justify-between text-sm">
            <div className="mb-2">
              <NumberInput
                value={bedrooms.min}
                onChange={(val) =>
                  setBedrooms((prev) => ({ ...prev, min: val }))
                }
                label="Min"
              />
            </div>
            <div className="mb-2">
              <NumberInput
                value={bedrooms.max}
                onChange={(val) =>
                  setBedrooms((prev) => ({ ...prev, max: val }))
                }
                label="Max"
              />
            </div>
          </div>
        </FilterSection>

        {/* Bathrooms */}
        <FilterSection
          title="Bathrooms"
          expanded={expanded.bathrooms}
          onToggle={() => toggleSection("bathrooms")}
        >
          <div className="relative justify-between text-sm">
            <NumberInput
              value={bathrooms.min}
              onChange={(val) =>
                setBathrooms((prev) => ({ ...prev, min: val }))
              }
              label="Min"
            />
            <NumberInput
              value={bathrooms.max}
              onChange={(val) =>
                setBathrooms((prev) => ({ ...prev, max: val }))
              }
              label="Max"
            />
          </div>
        </FilterSection>

        <button
          type="button"
          className="mt-4 ml-8 cursor-pointer items-center rounded-md bg-primaryBlue px-2 py-2 text-white text-xs"
        >
          Show more options
        </button>
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

function NumberInput({
  value,
  onChange,
  label,
}: {
  value: number;
  onChange: (val: number) => void;
  label: string;
}) {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-600">{label}</span>
      <button
        type="button"
        onClick={() => onChange(value - 1)}
        className="rounded border p-1"
      >
        <Minus className="h-4 w-4" />
      </button>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-16 rounded border text-center"
      />
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        className="rounded border p-1"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
