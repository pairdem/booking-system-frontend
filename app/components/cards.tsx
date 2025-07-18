interface Amenity {
  label: string;
  icon: string;
}

interface Hotel {
  name: string;
  location: string;
  rating: number;
  roomType: string;
  price: number;
  image: string;
  amenities: Amenity[];
}

interface CardsProps {
  items: Hotel[];
}

function Cards({ items }: CardsProps) {
  return (
    <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((hotel) => (
        <div
          key={hotel.name}
          className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
        >
          <img
            src={hotel.image}
            alt={hotel.name}
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <div className="mb-2 flex items-start justify-between">
              <h3 className="font-semibold text-xl">{hotel.name}</h3>
              <span className="rounded bg-blue-100 px-2 py-1 text-blue-800 text-sm">
                {hotel.rating.toFixed(1)} ★
              </span>
            </div>
            <p className="mb-2 text-gray-600">{hotel.location}</p>
            <p className="mb-3 text-gray-700">{hotel.roomType}</p>

            <div className="mb-4 flex flex-wrap gap-2">
              {hotel.amenities.map((amenity) => (
                <span
                  key={amenity.label}
                  className="flex items-center rounded bg-gray-100 px-2 py-1 text-sm"
                >
                  <span className="mr-1">{amenity.icon}</span>
                  {amenity.label}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <span className="font-bold text-lg">${hotel.price}</span>
              <span className="text-gray-500 text-sm">per night</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
