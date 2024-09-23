import React from "react";
import { testimonials } from "../data/Carouseldata.js";
import Card from "./Card.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";

const Review = () => {
  return (
    <>
      <section className="bg-slate-100  ">
        <div className="w-full flex gap-10 p-20 xs:flex-wrap md:justify-center lg:justify-start">
          <div className="lg:w-[30%]  xs:w-[100%] md:w-[100%] sm:w-full  p-4 ">
            <h1 className="lg:text-4xl md:text-2xl xs:text-3xl text-customgrey leading-[3.2rem] font-bold">
              Trusted by over 8M sellers around the world
            </h1>
          </div>

          <div className="lg:w-[30%] md:w-[70%] xs:w-[100%] flex items-end my-3 p-4">
            <h1 className="text-[1.01rem]  text-customgrey">
              Whether you are just getting started or run an enterprise-level
              e-commerce business, we do everything we can to ensure a positive
              merchant experience.
            </h1>
          </div>
        </div>

        <div className="flex">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={100}
            slidesPerView={3}
            loop={true}
            breakpoints={{
              320:{
                slidesPerView: 1
              },
              972:{
                slidesPerView: 3
              }


            }}
          >
            {testimonials.map((curr, id) => (
              <SwiperSlide>
                 <Card  key={id} review={id} {...curr} />
               
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Review;
