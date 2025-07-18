import { useState } from "react";
import recommended1 from "@/assets/images/recommend1.jpg";
import recommended2 from "@/assets/images/recommend2.jpg";
import recommended3 from "@/assets/images/recommend3.jpg";
import recommended4 from "@/assets/images/recommend4.jpg";

const recommendations = [
  {
    id: 1,
    title: "Surfing at Sundak Beach",
    price: "$250.00",
    image: recommended1,
  },
  {
    id: 2,
    title: "Rafting at Progo",
    price: "$125.00",
    image: recommended2,
  },
  {
    id: 3,
    title: "Baturaden Bobocabin",
    price: "$150.00",
    image: recommended3,
  },
  {
    id: 4,
    title: "Dieng Villa View",
    price: "$750.00",
    image: recommended4,
  },
];

const Recommended: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-10">
      {/* Top Section */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-bold text-3xl">Recommended For You</h2>
        <p className="text-gray-500 text-sm">
          I hope you find these recommendations enjoyable!
        </p>
      </div>

      {/* Image Cards Section */}
      <div className="flex gap-4">
        {recommendations.map((item) => (
          <div
            role="presentation"
            aria-hidden="true"
            key={item.id}
            className={`relative flex-1 overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 ease-in-out ${
              hovered === item.id ? "scale-105" : "scale-100"
            }`}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              className="h-80 w-full rounded-2xl bg-center bg-cover"
              style={{ backgroundImage: `url(${item.image})` }}
            />

            <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-30 p-4">
              <span className="absolute top-4 right-4 rounded-lg bg-white px-3 py-1 font-semibold text-black text-sm">
                {item.price}
              </span>
              <h3 className="mb-2 font-semibold text-white text-xl">
                {item.title}
              </h3>
              <button
                type="button"
                className="rounded-lg bg-white px-6 py-2 font-medium text-black shadow-md transition hover:bg-gray-200"
              >
                Booking Trip
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
