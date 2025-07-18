import type React from "react";

import { NavLink } from "react-router";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import deals from "@/assets/images/deals.avif";
import heroo from "@/assets/images/heroo.avif";
import hotel1 from "@/assets/images/hotel1.avif";
import hotel2 from "@/assets/images/hotel2.avif";
import hotel3 from "@/assets/images/hotel3.avif";
import star from "@/assets/images/star.avif";
import trust from "@/assets/images/trust.avif";
import enduser1 from "@/assets/images/user1.avif";
import enduser2 from "@/assets/images/user2.avif";
import enduser3 from "@/assets/images/user2.avif";
import Footer from "@/components/Footer";

// TODO: just vendor the needed css files

const testimonials = [
  {
    name: "Jane Smith",
    review:
      "tiaAfrika made booking my stay effortless! The process was smooth, and I got the best deal.",
    image: enduser1,
    rating: 5,
  },
  {
    name: "John Doe",
    review:
      "I love how easy it is to find and book hotels. Highly recommend tiaAfrika!",
    image: enduser2,
    rating: 4,
  },

  {
    name: "Michael Brown",
    review: "Quick, easy, and reliable. tiaAfrika is a game-changer!",
    image: enduser3,
    rating: 5,
  },
];

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white text-gray-700">
      {/* Navigation Bar */}
      <header className="flex items-center justify-between border-gray-300 border-b px-6 py-4 md:px-24">
        {/* Brand Name */}
        <h1 className="w-auto font-bold text-2xl text-deepBlue">tiaAfrika</h1>

        {/* Navigation Links */}
        <nav className="hidden space-x-6 text-gray-600 md:flex">
          <NavLink to="/" className="hover:text-primaryBlue">
            Home
          </NavLink>
          <NavLink to="/explore" className="hover:text-primaryBlue">
            Explore
          </NavLink>
          <NavLink to="/book" className="hover:text-primaryBlue">
            Make a Booking
          </NavLink>
          <NavLink
            to="/about"
            className="border-primaryBlue border-b-2 font-semibold text-primaryBlue"
          >
            About Us
          </NavLink>
        </nav>

        {/* Booking Button */}
        <NavLink
          to="/book"
          className="rounded-md bg-primaryBlue px-4 py-2 text-white hover:bg-blue-700"
        >
          Make a Booking
        </NavLink>
      </header>

      {/* Hero Section */}
      <section
        className="relative flex h-[500px] items-center justify-start bg-center bg-cover"
        style={{ backgroundImage: `url(${heroo})` }} // Replace with your image path
      >
        <div className="absolute inset-0 bg-black/40" />
        {/* Dark overlay */}
        <div className="relative z-10 max-w-lg pl-12 text-white md:pl-20">
          <h1 className="font-bold text-4xl md:text-5xl">
            Your Gateway to Unforgettable Stays
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Finding the perfect stay should be effortless. At
            <span className="font-semibold text-blue-400"> tiaAfrika</span>, we
            connect <strong>travelers</strong> with the best hotels while giving
            " "<strong>businesses</strong> a seamless way to list their
            properties. Whether you're planning your next adventure or
            showcasing your hotel, we make it simple, reliable, and rewarding.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-bold text-3xl text-gray-900">
            Why Choose tiaAfrika?
          </h2>
          <p className="mt-2 text-center text-gray-600">
            We make hotel booking seamless, reliable, and affordable.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {/* Feature 1: Seamless Booking */}
            <div className="text-center">
              <img
                className="mx-auto h-24 w-24 text-primaryBlue"
                src={star}
                alt="star"
              />
              <h3 className="mt-4 font-semibold text-xl">Seamless Booking</h3>
              <p className="mt-2 text-gray-600">
                Book hotels easily with just a few clicks.
              </p>
            </div>

            {/* Feature 2: Verified Hotels */}
            <div className="text-center">
              <img
                className="mx-auto h-48 w-48 text-primaryBlue"
                src={trust}
                alt="Trusted icon"
              />

              <h3 className="mt-4 font-semibold text-xl">Verified Hotels</h3>
              <p className="mt-2 text-gray-600">
                All listed hotels are vetted for quality.
              </p>
            </div>

            {/* Feature 3: Best Deals */}
            <div className="text-center">
              <img
                className="mx-auto h-24 w-24 text-primaryBlue"
                src={deals}
                alt="deals icon"
              />
              <h3 className="mt-4 font-semibold text-xl">Best Deals</h3>
              <p className="mt-2 text-gray-600">
                Get unbeatable discounts and offers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center font-bold text-3xl text-gray-900">
            What Our Customers Say
          </h2>
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="mt-8"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide
                key={index.toString()}
                className="rounded-lg bg-white p-10 shadow"
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="mx-auto h-100 w-100 rounded-full object-cover shadow-md"
                  />
                  <p className="text-gray-700 italic">"{testimonial.review}"</p>
                  <h4 className="mt-4 font-semibold">{testimonial.name}</h4>

                  <div className="mt-2 flex">
                    {Array.from({ length: testimonial.rating }).map(
                      (_, index) => (
                        <img
                          key={index.toString()}
                          className="h-7 w-7 text-yellow-400"
                          src={star}
                          alt="star icon"
                        />
                      ),
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <div className="bg-gray-100 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-bold text-3xl text-gray-900">
            Featured Destinations
          </h2>
          <p className="mt-2 text-center text-gray-600">
            Discover the best places to stay for your next adventure.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {/* Destination 1 */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <img
                src={hotel1}
                className="h-56 w-full object-cover"
                alt="Destination Name"
              />
              <div className="p-4">
                <h3 className="font-semibold text-xl">Accra, Ghana</h3>
                <p className="mt-2 text-gray-600">
                  A premium blend of luxury and African charm, offering elegant
                  rooms, fine dining, and top-tier hospitality in the heart of
                  Accra.
                </p>
                <button
                  type="button"
                  className="mt-4 rounded-md bg-primaryBlue px-4 py-2 text-white hover:bg-blue-700"
                >
                  View Hotels
                </button>
              </div>
            </div>

            {/* Destination 2 */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <img
                src={hotel2}
                className="h-56 w-full object-cover"
                alt="Destination Name"
              />
              <div className="p-4">
                <h3 className="font-semibold text-xl">Kigali, Rwanda</h3>
                <p className="mt-2 text-gray-600">
                  A luxurious stay in the heart of Kigali, offering modern
                  amenities, fine dining, and breathtaking city views.
                </p>
                <button
                  type="button"
                  className="mt-4 rounded-md bg-primaryBlue px-4 py-2 text-white hover:bg-blue-700"
                >
                  View Hotels
                </button>
              </div>
            </div>

            {/* Destination 3 */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <img
                src={hotel3}
                className="h-56 w-full object-cover"
                alt="Destination Name"
              />
              <div className="p-4">
                <h3 className="font-semibold text-xl">Cape Town</h3>
                <p className="mt-2 text-gray-600">
                  Discover breathtaking mountains and seaside stays.
                </p>
                <div className="mt-10">
                  <NavLink
                    to="/hotels"
                    className="mt-24 rounded-md bg-primaryBlue px-4 py-2 text-white hover:bg-blue-700"
                  >
                    View Hotels
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="bg-primaryBlue py-16 text-center text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-bold text-3xl">
            Ready to Book or List Your Hotel?
          </h2>
          <p className="mt-2 text-lg">
            Find the best stays or showcase your hotel to thousands of
            travelers.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-4 md:flex-row">
            <a
              href="/book"
              className="rounded-md bg-white px-6 py-3 font-semibold text-primaryBlue hover:bg-gray-200"
            >
              Book a Hotel
            </a>
            <a
              href="/list-your-hotel"
              className="rounded-md border border-white px-6 py-3 font-semibold hover:bg-white hover:text-primaryBlue"
            >
              List Your Hotel
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-bold text-3xl text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-center text-gray-600">
            Got questions? We've got answers.
          </p>

          <div className="mt-10 space-y-6">
            {/* Question 1 */}
            <details className="rounded-lg bg-white p-4 shadow-md">
              <summary className="cursor-pointer font-semibold">
                How do I book a hotel?
              </summary>
              <p className="mt-2 text-gray-600">
                Simply search for your destination, select a hotel, and complete
                the booking process.
              </p>
            </details>

            {/* Question 2 */}
            <details className="rounded-lg bg-white p-4 shadow-md">
              <summary className="cursor-pointer font-semibold">
                Can I list my hotel on tiaAfrika?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes! Businesses can easily register and list their hotels for
                bookings.
              </p>
            </details>

            {/* Question 3 */}
            <details className="rounded-lg bg-white p-4 shadow-md">
              <summary className="cursor-pointer font-semibold">
                Are there cancellation fees?
              </summary>
              <p className="mt-2 text-gray-600">
                Cancellation policies vary by hotel. Check the hotel's terms
                before booking.
              </p>
            </details>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
