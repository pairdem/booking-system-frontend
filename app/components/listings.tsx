import hotel1 from "@/assets/images/hotel1.avif";
import hotel2 from "@/assets/images/hotel2.avif";
import hotel3 from "@/assets/images/hotel3.avif";

const Hotels = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="font-bold text-3xl text-black">
          Our top-rated and highly visited hotels
        </h2>
        <p className="mt-2 text-gray-600">Discover our best hotel selection.</p>

        {/* Hotel List */}
        <div className="mt-6 flex justify-center space-x-4">
          <div className="rounded-lg bg-white p-4 shadow-lg">
            <div
              className="h-40 w-full rounded-lg bg-center bg-cover"
              style={{ backgroundImage: `url(${hotel1})` }}
              role="img"
              aria-label="Hotel 1 exterior view"
            />
            <h3 className="mt-2 font-bold text-black">Kelvin Hotel</h3>
            <p className="text-black">⭐⭐⭐⭐ (98 visitors)</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-lg">
            <div
              className="h-40 w-full rounded-lg bg-center bg-cover"
              style={{ backgroundImage: `url(${hotel2})` }}
              role="img"
              aria-label="Hotel 1 exterior view"
            />
            <h3 className="mt-2 font-bold text-black">Kelvin Hotel</h3>
            <p className="text-black">⭐⭐⭐⭐ (98 visitors)</p>
          </div>

          <div className="rounded-lg bg-white p-4 shadow-lg">
            <div
              className="h-40 w-full rounded-lg bg-center bg-cover"
              style={{ backgroundImage: `url(${hotel3})` }}
              role="img"
              aria-label="Hotel 1 exterior view"
            />
            <h3 className="mt-2 font-bold text-black">Kelvin Hotel</h3>
            <p className="text-black">⭐⭐⭐⭐ (98 visitors)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hotels;
