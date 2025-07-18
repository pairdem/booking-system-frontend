import {
  ChevronLeft,
  ChevronRight,
  Coffee,
  Dumbbell,
  Heart,
  MapPin,
  Star,
  Wifi,
  XCircle,
} from "lucide-react";
import type { FC, JSX } from "react";
import { useState } from "react";
import cardimg1 from "@/assets/images/cardimage.avif";
import cardimg2 from "@/assets/images/hotel1.avif";
import cardimg3 from "@/assets/images/hotel2.avif";
import cardimg4 from "@/assets/images/hotel3.avif";

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
    name: "Hotel Paradise",
    location: "Kumasi",
    rating: 4.8,
    roomType: "Executive Suite",
    price: 180,
    image: cardimg1,
    amenities: [
      {
        label: "Free WiFi",
        icon: <Wifi className="h-4 w-4 text-primaryBlue" />,
      },
      {
        label: "Swimming Pool",
        icon: <Dumbbell className="h-4 w-4 text-blue-400" />,
      },
    ],
  },
  {
    id: 3,
    name: "Hotel Paradise",
    location: "Kumasi",
    rating: 4.8,
    roomType: "Executive Suite",
    price: 180,
    image: cardimg1,
    amenities: [
      {
        label: "Free WiFi",
        icon: <Wifi className="h-4 w-4 text-primaryBlue" />,
      },
      {
        label: "Swimming Pool",
        icon: <Dumbbell className="h-4 w-4 text-blue-400" />,
      },
    ],
  },
  {
    id: 4,
    name: "Hotel Paradise",
    location: "Kumasi",
    rating: 4.8,
    roomType: "Executive Suite",
    price: 180,
    image: cardimg2,
    amenities: [
      {
        label: "Free WiFi",
        icon: <Wifi className="h-4 w-4 text-primaryBlue" />,
      },
      {
        label: "Swimming Pool",
        icon: <Dumbbell className="h-4 w-4 text-blue-400" />,
      },
    ],
  },
  {
    id: 5,
    name: "Hotel Paradise",
    location: "Kumasi",
    rating: 4.8,
    roomType: "Executive Suite",
    price: 180,
    image: cardimg2,
    amenities: [
      {
        label: "Free WiFi",
        icon: <Wifi className="h-4 w-4 text-primaryBlue" />,
      },
      {
        label: "Swimming Pool",
        icon: <Dumbbell className="h-4 w-4 text-blue-400" />,
      },
    ],
  },
  {
    id: 6,
    name: "Hotel Paradise",
    location: "Kumasi",
    rating: 4.8,
    roomType: "Executive Suite",
    price: 180,
    image: cardimg2,
    amenities: [
      {
        label: "Free WiFi",
        icon: <Wifi className="h-4 w-4 text-primaryBlue" />,
      },
      {
        label: "Swimming Pool",
        icon: <Dumbbell className="h-4 w-4 text-blue-400" />,
      },
    ],
  },
  {
    id: 7,
    name: "Hotel Paradise",
    location: "Kumasi",
    rating: 4.8,
    roomType: "Executive Suite",
    price: 180,
    image: cardimg3,
    amenities: [
      {
        label: "Free WiFi",
        icon: <Wifi className="h-4 w-4 text-primaryBlue" />,
      },
      {
        label: "Swimming Pool",
        icon: <Dumbbell className="h-4 w-4 text-blue-400" />,
      },
    ],
  },
  {
    id: 8,
    name: "Hotel Paradise",
    location: "Kumasi",
    rating: 4.8,
    roomType: "Executive Suite",
    price: 180,
    image: cardimg3,
    amenities: [
      {
        label: "Free WiFi",
        icon: <Wifi className="h-4 w-4 text-primaryBlue" />,
      },
      {
        label: "Swimming Pool",
        icon: <Dumbbell className="h-4 w-4 text-blue-400" />,
      },
    ],
  },
  {
    id: 9,
    name: "Hotel Paradise",
    location: "Kumasi",
    rating: 4.8,
    roomType: "Executive Suite",
    price: 180,
    image: cardimg3,
    amenities: [
      {
        label: "Free WiFi",
        icon: <Wifi className="h-4 w-4 text-primaryBlue" />,
      },
      {
        label: "Swimming Pool",
        icon: <Dumbbell className="h-4 w-4 text-blue-400" />,
      },
    ],
  },
  {
    id: 10,
    name: "Hotel Paradise",
    location: "Kumasi",
    rating: 4.8,
    roomType: "Executive Suite",
    price: 180,
    image: cardimg4,
    amenities: [
      {
        label: "Free WiFi",
        icon: <Wifi className="h-4 w-4 text-primaryBlue" />,
      },
      {
        label: "Swimming Pool",
        icon: <Dumbbell className="h-4 w-4 text-blue-400" />,
      },
    ],
  },
  {
    id: 11,
    name: "Hotel Paradise",
    location: "Kumasi",
    rating: 4.8,
    roomType: "Executive Suite",
    price: 180,
    image: cardimg4,
    amenities: [
      {
        label: "Free WiFi",
        icon: <Wifi className="h-4 w-4 text-primaryBlue" />,
      },
      {
        label: "Swimming Pool",
        icon: <Dumbbell className="h-4 w-4 text-blue-400" />,
      },
    ],
  },
  {
    id: 12,
    name: "Hotel Paradise",
    location: "Kumasi",
    rating: 4.8,
    roomType: "Executive Suite",
    price: 180,
    image: cardimg4,
    amenities: [
      {
        label: "Free WiFi",
        icon: <Wifi className="h-4 w-4 text-primaryBlue" />,
      },
      {
        label: "Swimming Pool",
        icon: <Dumbbell className="h-4 w-4 text-blue-400" />,
      },
    ],
  },
  // Add more hotels as needed...
];

// Props Type
type HotelProps = {
  hotel: {
    id: number;
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
const HotelCard: FC<HotelProps> = ({ hotel }) => (
  <div className="relative flex h-[227px] w-[820px] rounded-[20px] border border-gray-200 bg-white shadow-md">
    {/* Image Section */}
    <div className="relative w-[292px] rounded-[20px] bg-gray-200">
      <img
        src={hotel.image}
        className="h-full w-full rounded-[20px] object-cover"
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
      {/* Category Badge */}
      <span className="absolute right-2 bottom-2 rounded-md bg-white px-2 py-1 text-black text-xs">
        Hotel
      </span>
    </div>

    {/* Content Section */}
    <div className="w-2/3 p-4">
      {/* Rating */}
      <div className="absolute top-3 right-12 flex items-center rounded-md bg-primaryBlue px-2 py-1 text-white text-xs">
        <Star className="mr-1 h-4 w-4 text-white" />
        <span className="font-medium">{hotel.rating.toFixed(1)}</span>
      </div>

      {/* Name & Location */}
      <h2 className="font-semibold text-gray-900 text-lg">{hotel.name}</h2>
      <div className="mt-1 flex items-center gap-1 text-gray-600">
        <MapPin className="h-4 w-4" />
        <span>
          <p className="text-gray-600 text-xs">{hotel.location}</p>
        </span>
      </div>

      {/* Room Details */}
      <div className="mt-2 text-sm">
        <h3 className="border-t pt-2 font-medium text-gray-800 text-xs">
          {hotel.roomType}
        </h3>
        <div className="mt-1 flex items-center gap-1 text-gray-600">
          <Coffee className="h-4 w-4" />
          <span className="text-[9px]">Breakfast included</span>
        </div>
        <div className="mt-1 flex items-center gap-1 text-gray-600">
          <XCircle className="h-4 w-4" />
          <span className="text-[9px]">Free cancellation</span>
        </div>
      </div>

      {/* Price & Button */}
      <div className="flex items-center justify-between">
        {/* Amenities */}
        <div className="flex items-center gap-4 text-gray-600 text-sm">
          {hotel.amenities.map((amenity) => (
            <div key={amenity.label} className="flex items-center gap-1">
              {amenity.icon}
              <span>{amenity.label}</span>
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="mb-10 text-right">
          <p className="mr-20 text-[10px] text-gray-600">Starting at</p>
          <p className="font-semibold text-gray-900 text-lg">
            GHC {hotel.price.toFixed(2)}{" "}
            <span className="font-normal text-[10px] text-gray-600">
              /night
            </span>
          </p>
          <button
            type="button"
            className="cursor-pointer rounded-lg bg-primaryBlue px-4 py-2 text-sm text-white transition hover:bg-blue-950"
          >
            See availability
          </button>
        </div>
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
    <div className="mt-6 flex items-center justify-center gap-4">
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

// Main Component with Pagination
const HotelList: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Adjust based on how many cards you want per page

  // Calculate pagination
  const totalPages = Math.ceil(hotels.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentHotels = hotels.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex flex-col items-center">
      <div className="grid gap-6">
        {currentHotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>

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

export default HotelList;
