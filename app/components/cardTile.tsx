import { Coffee, Dumbbell, Heart, MapPin, Star, Wifi } from "lucide-react";
import type { FC, JSX } from "react";
import { NavLink } from "react-router";

import infocircle from "@/assets/icons/info-circle.avif";
import cardimg2 from "@/assets/images/go2africa.avif";
import cardimg3 from "@/assets/images/go2africa.avif";

// Hotel Data
const hotels = [
  {
    id: 1,
    name: "Hotel Sunrise",
    location: "Accra",
    rating: 4.5,
    roomType: "Deluxe Room",
    price: 120,
    image: cardimg2,
    amenities: [
      {
        label: "Free WiFi",
        icon: <Wifi className="h-4 w-4 text-primaryBlue" />,
      },
      {
        label: "Breakfast",
        icon: <Coffee className="h-4 w-4 text-yellow-500" />,
      },
      {
        label: "Fitness Center",
        icon: <Dumbbell className="h-4 w-4 text-blue-400" />,
      },
    ],
  },

  {
    id: 2,
    name: "Hotel Sunrise",
    location: "Accra",
    rating: 4.5,
    roomType: "Deluxe Room",
    price: 120,
    image: cardimg3,
    amenities: [
      {
        label: "Free WiFi",
        icon: <Wifi className="h-4 w-4 text-primaryBlue" />,
      },
      {
        label: "Breakfast",
        icon: <Coffee className="h-4 w-4 text-yellow-500" />,
      },
      {
        label: "Fitness Center",
        icon: <Dumbbell className="h-4 w-4 text-blue-400" />,
      },
    ],
  },
  {
    id: 3,
    name: "Hotel Sunrise",
    location: "Accra",
    rating: 4.5,
    roomType: "Deluxe Room",
    price: 120,
    image: cardimg3,
    amenities: [
      {
        label: "Free WiFi",
        icon: <Wifi className="h-4 w-4 text-primaryBlue" />,
      },
      {
        label: "Breakfast",
        icon: <Coffee className="h-4 w-4 text-yellow-500" />,
      },
      {
        label: "Fitness Center",
        icon: <Dumbbell className="h-4 w-4 text-blue-400" />,
      },
    ],
  },
];

// Props Type
type HotelProps = {
  hotel: {
    name: string;
    location: string;
    rating: number;
    roomType: string;
    price: number;
    image: string;
    amenities: { label: string; icon: JSX.Element }[];
  };
};

// Hotel Card Component
const Cardtiles: FC<HotelProps> = ({ hotel }) => (
  <div className="h-[475px] w-auto overflow-hidden rounded-[20px] border border-gray-200 bg-white shadow-md">
    {/* Image Section */}
    <div className="relative h-[200px] w-full bg-gray-200">
      <img
        src={hotel.image}
        className="h-full w-full object-cover"
        alt={hotel.name}
        loading="lazy"
      />
      {/* Wishlist Heart Icon */}
      <button
        type="button"
        className="absolute top-3 right-3 rounded-full bg-white p-1 shadow-md"
      >
        <Heart className="h-5 w-5 text-gray-600" />
      </button>
      <span className="absolute top-3 left-3 rounded-md bg-white px-2 py-1 text-black text-xs">
        Hotel
      </span>
    </div>

    {/* Content Section */}
    <div className="p-4">
      <div className="flex w-auto justify-between">
        <div className="mb-2 flex">
          <h1 className="text-xs">Fully Refundable</h1>
          <img src={infocircle} alt="infocircle" className="h-4 w-4" />
        </div>

        <div className="mb-2 flex w-[58px] items-center rounded-md bg-primaryBlue">
          <Star className="ml-2 h-3 w-3 text-white" />
          <span className="ml-1 font-medium text-white text-xs">
            {hotel.rating.toFixed(1)}
          </span>
        </div>
      </div>
      <div className="flex-1 items-center">
        <div className="mb-4 text-left">
          <h2 className="mt-4 font-semibold text-gray-900 text-md">
            {hotel.name}
          </h2>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="h-4 w-4" />
            <span className="ml-1">{hotel.location}</span>
          </div>
        </div>
      </div>

      <div className="text-left">
        <p className="text-gray-600 text-xs">Starting at</p>
        <p className="font-semibold text-gray-900 text-lg">
          GHC {hotel.price.toFixed(2)}{" "}
          <span className="text-gray-600 text-xs">/night</span>
        </p>
      </div>

      {/* Amenities */}
      <div className="mt-2 flex flex-wrap gap-4 pt-4 text-gray-600 text-sm">
        {hotel.amenities.map((amenity) => (
          <div key={amenity.label} className="items-col flex">
            {amenity.icon}
            <span className="ml-2 text-xs">{amenity.label}</span>
          </div>
        ))}
      </div>
      <NavLink
        to="/checkout"
        className="mt-4 block w-full rounded-md bg-primaryBlue py-2 text-center font-semibold text-sm text-white transition hover:bg-blue-700"
      >
        Reserve
      </NavLink>
    </div>
  </div>
);

const Cardtile: FC = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {hotels.map((hotel) => (
        <Cardtiles key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default Cardtile;
