import hotel1 from "@/assets/images/hotel8.avif";
import hotel3 from "@/assets/images/hotel9.avif";

const About = () => {
  return (
    <section className="bg-white px-8 py-12 md:px-16 lg:px-32">
      {/* Upper Section */}
      <div className="grid grid-cols-3 items-center gap-6 rounded-2xl p-10 text-black">
        {/* Left: Promo Alert */}
        <div className="text-left">
          <h2 className="font-semibold text-2xl">
            Big <br /> Promo
          </h2>
        </div>

        {/* Center: Limited Time Offer */}
        <div className="text-left ">
          <h2 className="font-semibold text-4xl">
            Limited Time Offer Book Now And Save Big
          </h2>
        </div>

        {/* Right: Promo Details + Button */}
        <div className="text-left text-grey">
          <p className="mb-4 text-lg">
            Book now and save big on your next adventure! Book now and save big
            on your next adventure! Book now and save big on your next
            adventure! Book now and save big on your next adventure!
          </p>
          <button
            type="button"
            className="rounded-lg bg-primaryBlue px-6 py-3 text-white"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Lower Section */}
      <div className="mt-10 grid grid-cols-4 gap-4">
        {/* 1st: Medium Width, Tall Image */}
        <div className="relative col-span-1">
          <div
            className="relative h-60 w-full overflow-hidden rounded-3xl bg-center bg-cover"
            style={{ backgroundImage: `url(${hotel1})` }}
          >
            <h2 className="p-4 font-bold text-5xl text-white">
              Summer <br /> Promo
            </h2>
          </div>
        </div>

        {/* 2nd: Widest Text Block */}
        <div className="col-span-2 flex h-90 items-start justify-center rounded-xl bg-lightBlue p-6">
          <p className="text-left font-bold text-4xl text-black">
            Let's Explore Together. <br /> At TripTrap, the world is our
            playground.
          </p>
          <p className="self-end text-left font-sm text-black text-sm">
            Let's Explore Together. <br /> At TripTrap, the world is our
            playground.
          </p>
        </div>

        {/* 3rd: Smallest Image with Centered Button */}
        <div className="relative col-span-1 flex h-75 items-center justify-center">
          <div
            className="relative h-full w-full rounded-xl bg-center bg-cover"
            style={{ backgroundImage: `url(${hotel3})` }}
          >
            {/* Top-right Text */}
            <h2 className="absolute top-2 right-2 text-right font-bold text-3xl text-white">
              Luxury <br /> Apartments
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
