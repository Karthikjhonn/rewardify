import React from "react";
import QuickActionCard from "../../components/card/QuickActionCard";
import { FaMoneyBill } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function QuickActionSlider() {
  return (
    <div>
      <div className="max-w-xs lg:max-w-md mx-auto  p-2">
        <Swiper
          slidesPerView={4}
          spaceBetween={24}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper bg-red- 500 !py-5"
          loop={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
        >
          <SwiperSlide className="">
            <QuickActionCard
              name={"make payment"}
              icon={<FaMoneyBill className="text-2xl" />}
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <QuickActionCard
              name={"make payment"}
              icon={<FaMoneyBill className="text-2xl" />}
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <QuickActionCard
              name={"make payment"}
              icon={<FaMoneyBill className="text-2xl" />}
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <QuickActionCard
              name={"make payment"}
              icon={<FaMoneyBill className="text-2xl" />}
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <QuickActionCard
              name={"make payment"}
              icon={<FaMoneyBill className="text-2xl" />}
            />
          </SwiperSlide>
          <div className="size-10  flex justify-center items-center z-50 custom-prev absolute -left-0 top-1/2 transform -translate-y-1/2  rounded-full  cursor-pointer">
            <IoIosArrowBack />
          </div>
          <div className="size-10  flex justify-center items-center z-50 custom-next absolute right-0 top-1/2 transform -translate-y-1/2  rounded-full  cursor-pointer">
            <IoIosArrowForward />
          </div>
        </Swiper>
        <style jsx>{`
          .swiper-pagination-bullet {
            top: 0;
          }
        `}</style>
      </div>
    </div>
  );
}

export default QuickActionSlider;
