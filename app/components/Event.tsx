import banner4 from "@/assets/images/hotelsuite.avif";

const Event = () => {
  return (
    <section className="bg-white px-8 py-12 md:px-16 lg:px-32">
      {/* Upper Text Container */}
      <br />
      <br />
      <div className="mb-8 flex items-start justify-between">
        <h2 className="font-medium text-4xl text-black">
          Most Popular Destinations
        </h2>
        <p className="max-w-md text-gray-600">
          Cultural festivals celebrate the diversity of different cultures
          through music, dance, food, and art.
        </p>
      </div>
      <br />
      <br />

      {/* Event Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
        <div
          className="h-80 w-full rounded-2xl bg-center bg-cover"
          style={{ backgroundImage: `url(${banner4})` }}
        />
        <div className="absolute bottom-6 left-6 rounded-xl p-6">
          <h3 className="font-bold text-6xl text-black">Embassy Gardens </h3>
          <br />
          <p className="mb-4 text-white-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Lorem ipsum dolor sit amet, <br />
          </p>
          <button
            type="button"
            className="flex items-center rounded-lg bg-white px-6 py-3 text-black"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Event;
