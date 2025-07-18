import banner6 from "@/assets/images/fogisland.avif";

const CTA: React.FC = () => {
  return (
    <section className="bg-white px-8 py-12 md:px-16 lg:px-32">
      <br />
      <br />
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
        {/* Background Image */}
        <div
          className="h-80 w-full rounded-2xl bg-center bg-cover"
          style={{ backgroundImage: `url(${banner6})` }}
        />

        {/* Content Centered */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <h2 className="font-bold text-5xl text-white leading-tight">
            Ready to embark on your next adventure?
          </h2>
          <p className="mt-2 text-lg text-white opacity-75">
            Connect with Tia Africa today to start planning your dream trip.
          </p>
          <button
            type="button"
            className="mt-6 rounded-lg bg-white px-6 py-3 font-medium text-black shadow-md transition hover:bg-gray-200"
          >
            This Is Africa
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
    </section>
  );
};

export default CTA;
