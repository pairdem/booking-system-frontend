import {
  ChevronLeft,
  ChevronRight,
  Coffee,
  Dumbbell,
  Heart,
  MapPin,
  Star,
  Wifi,
} from "lucide-react";
import type { FC, JSX } from "react";
import { useState } from "react";
import cardimg1 from "@/assets/images/cardimage.avif";
import cardimg2 from "@/assets/images/hotel1.avif";
import cardimg3 from "@/assets/images/hotel2.avif";

// Hotel Data
const hotels = [
  {
    id: 1,
    name: "Hotel Sunrise",
    location: "Accra",
    rating: 4.5,
    roomType: "Deluxe Room",
    price: 120,
    image: cardimg1,
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
    image: cardimg1,
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
    image: cardimg1,
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
    id: 4,
    name: "Hotel Sunrise",
    location: "Accra",
    rating: 4.5,
    roomType: "Deluxe Room",
    price: 120,
    image: cardimg1,
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
    id: 5,
    name: "Hotel Sunrise",
    location: "Accra",
    rating: 4.5,
    roomType: "Deluxe Room",
    price: 120,
    image: cardimg1,
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
    id: 6,
    name: "Hotel Sunrise",
    location: "Accra",
    rating: 4.5,
    roomType: "Deluxe Room",
    price: 120,
    image: cardimg1,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
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
    id: 16,
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
    id: 17,
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
    id: 18,
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
const HotelCardtiles: FC<HotelProps> = ({ hotel }) => (
  <div className="relative h-[330px] w-auto overflow-hidden rounded-[20px] border border-gray-200 bg-white shadow-md">
    {/* Image Section */}
    <div className="relative h-[120px] w-full bg-gray-200">
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
      <div className="flex items-center gap-12">
        {/* Price */}
        <div className="text-left">
          <p className="text-gray-600 text-xs">Starting at</p>
          <p className="font-semibold text-gray-900 text-lg">
            GHC {hotel.price.toFixed(2)}{" "}
            <span className="text-gray-600 text-xs">/night</span>
          </p>
        </div>

        <div className="flex items-center rounded-md bg-primaryBlue px-3 ">
          <Star className="h-3 w-3 text-white" />
          <span className="ml-1 font-medium text-white text-xs">
            {hotel.rating.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Name & Location */}
      <h2 className="mt-4 font-semibold text-gray-900 text-md">{hotel.name}</h2>

      <div className="flex items-center text-gray-600 text-sm">
        <MapPin className="h-4 w-4" />
        <span className="ml-1">{hotel.location}</span>
      </div>

      {/* Amenities */}
      <div className="mt-4 flex flex-wrap gap-2 border-t pt-4 text-[5px] text-gray-600">
        {hotel.amenities.map((amenity) => (
          <div key={amenity.label} className="flex items-center">
            {amenity.icon}
            <span className="text-[9px]">{amenity.label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Pagination Component
const PaginationControls = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  return (
    <div className="mt-6 ml-100 flex items-center justify-center gap-4">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`rounded-full p-2 ${currentPage === 1 ? "cursor-not-allowed text-gray-400" : "text-primaryBlue hover:bg-blue-50"}`}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            type="button"
            key={page}
            onClick={() => onPageChange(page)}
            className={`flex h-8 w-8 items-center justify-center rounded-full text-sm ${currentPage === page ? "bg-primaryBlue text-white" : "text-gray-700 hover:bg-gray-100"}`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`rounded-full p-2 ${currentPage === totalPages ? "cursor-not-allowed text-gray-400" : "text-primaryBlue hover:bg-blue-50"}`}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};

// Render Cards
const HotelCardtile: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Adjust based on how many cards you want per page

  // Calculate pagination
  const totalPages = Math.ceil(hotels.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentHotels = hotels.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {currentHotels.map((hotel) => (
        <HotelCardtiles key={hotel.id} hotel={hotel} />
      ))}

      {totalPages > 1 && (
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default HotelCardtile;
