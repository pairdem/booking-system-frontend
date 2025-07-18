import { FaStar, FaUsers } from "react-icons/fa";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import list1 from "@/assets/images/hotel4.avif";
import list2 from "@/assets/images/hotel5.avif";
import list3 from "@/assets/images/hotel6.avif";
import list4 from "@/assets/images/hotel7.avif";
import catg3 from "@/assets/images/hotelouterview.avif";
import catg4 from "@/assets/images/hotelouterview.avif";
import catg5 from "@/assets/images/hotelouterview.avif";
import catg1 from "@/assets/images/house.avif";
import catg2 from "@/assets/images/pool.avif";

const PopularListings = () => {
  return (
    <section className="bg-white px-6 py-10 md:px-12 lg:px-20">
      <br />
      <br />
      {/* Popular Listings Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-medium text-3xl text-black">Popular Listings</h2>
        <button
          className="flex items-center font-medium text-gray-500"
          type="button"
        >
          View all 2,342 listings →
        </button>
      </div>
      <br />

      {/* Popular Listings Grid - Now 4 per row */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {/* Listing 1 */}
        <div className="overflow-hidden rounded-xl bg-white shadow-md">
          <div
            className="h-56 w-full rounded-t-xl bg-center bg-cover"
            style={{ backgroundImage: `url(${list1})` }}
          />
          <div className="p-4">
            <h3 className="font-medium text-2xl text-black">
              Golden Dahlia Fintas
            </h3>
            <p className="mt-1 text-gray-500 text-sm">Sakumono, Region</p>
            <div className="mt-1 flex items-center gap-1 text-gray-500 text-sm">
              <FaUsers />
              <span>Family Plan</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex flex-col items-center gap-1">
                <div className="flex text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar className="text-gray-300" />
                </div>
                <span className="text-gray-500 text-sm">500 reviews</span>
              </div>
              <div className="text-right">
                <span className="text-gray-500 text-sm">Starting at </span>
                <br />
                <span className="font-bold text-2xl text-black">$35.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Listing 2 */}
        <div className="overflow-hidden rounded-xl bg-white shadow-md">
          <div
            className="h-56 w-full rounded-t-xl bg-center bg-cover"
            style={{ backgroundImage: `url(${list2})` }}
          />
          <div className="p-4">
            <h3 className="font-medium text-2xl text-black">
              Golden Dahlia Fintas
            </h3>
            <p className="mt-1 text-gray-500 text-sm">Sakumono, Region</p>
            <div className="mt-1 flex items-center gap-1 text-gray-500 text-sm">
              <FaUsers />
              <span>Family Plan</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex flex-col items-center gap-1">
                <div className="flex text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar className="text-gray-300" />
                </div>
                <span className="text-gray-500 text-sm">500 reviews</span>
              </div>
              <div className="text-right">
                <span className="text-gray-500 text-sm">Starting at </span>
                <br />
                <span className="font-bold text-2xl text-black">$35.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Listing 3 */}
        <div className="overflow-hidden rounded-xl bg-white shadow-md">
          <div
            className="h-56 w-full rounded-t-xl bg-center bg-cover"
            style={{ backgroundImage: `url(${list3})` }}
          />
          <div className="p-4">
            <h3 className="font-medium text-2xl text-black">
              Golden Dahlia Fintas
            </h3>
            <p className="mt-1 text-gray-500 text-sm">Sakumono, Region</p>
            <div className="mt-1 flex items-center gap-1 text-gray-500 text-sm">
              <FaUsers />
              <span>Family Plan</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex flex-col items-center gap-1">
                <div className="flex text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar className="text-gray-300" />
                </div>
                <span className="text-gray-500 text-sm">500 reviews</span>
              </div>
              <div className="text-right">
                <span className="text-gray-500 text-sm">Starting at </span>
                <br />
                <span className="font-bold text-2xl text-black">$35.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Listing 4 */}
        <div className="overflow-hidden rounded-xl bg-white shadow-md">
          <div
            className="h-56 w-full rounded-t-xl bg-center bg-cover"
            style={{ backgroundImage: `url(${list4})` }}
          />
          <div className="p-4">
            <h3 className="font-medium text-2xl text-black">
              Golden Dahlia Fintas
            </h3>
            <p className="mt-1 text-gray-500 text-sm">Sakumono, Region</p>
            <div className="mt-1 flex items-center gap-1 text-gray-500 text-sm">
              <FaUsers />
              <span>Family Plan</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex flex-col items-center gap-1">
                <div className="flex text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar className="text-gray-300" />
                </div>
                <span className="text-gray-500 text-sm">500 reviews</span>
              </div>
              <div className="text-right">
                <span className="text-gray-500 text-sm">Starting at </span>
                <br />
                <span className="font-bold text-2xl text-black">$35.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Listing Category Section */}
      <br />
      <br />
      <br />
      <h2 className="mt-10 mb-6 font-semibold text-4xl text-black">
        Listing Category
      </h2>
      <br />
      {/* Swiper Slider for Categories */}
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        {[
          {
            id: "house",
            name: "House",
            count: "2,210 listings",
            image: catg1,
          },
          {
            id: "apartment",
            name: "Apartment",
            count: "1,230 listings",
            image: catg2,
          },
          {
            id: "villa",
            name: "Villa",
            count: "657 listings",
            image: catg3,
          },
          {
            id: "penthouse",
            name: "Penthouse",
            count: "340 listings",
            image: catg4,
          },
          {
            id: "cottage",
            name: "Cottage",
            count: "765 listings",
            image: catg5,
          },
        ].map((category) => (
          <SwiperSlide key={category.id}>
            <div className="flex items-center justify-between rounded-2xl bg-gray-100 p-6">
              <div
                className="h-20 w-28 rounded-lg bg-center bg-cover"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              <div>
                <h3 className="font-bold text-4xl text-black">
                  {category.name}
                </h3>
                <p className="text-gray-500 text-lg">{category.count}</p>
              </div>
              <span className="text-2xl text-gray-500">→</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PopularListings;
