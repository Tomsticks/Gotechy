"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import javascriptImg from "../../asset/images/javascriptimage.png";
import uiuxImage from "../../asset/images/Frame48095598.png";
import FrontendImage from "../../asset/images/Frame24.png";
import RatingsImage from "../../asset/images/Star.png";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
export default function App() {
  const data = [
    {
      Title: "Frontend Development",
      Price: "$250",
      Content:
        "Frontend development is the practice of producing HTML, CSS and JavaScript for a website so that a user can see and interact with them directly",
      Ratings: "4.5",
      RatingsImage: RatingsImage,
      pathToJoinCourse: "/",
      Image: FrontendImage,
      alt: "Image of Javascript Code",
      bgColor: "bg-[#AA953A]",
    },
    {
      Title: "Javascript Fullstack",
      Price: "$250",
      Content:
        "A Fullstack JavaScript developer is able to work with code in the backend and in the frontend to build a web app, all using JavaScript.",
      Ratings: "4.5",
      RatingsImage: RatingsImage,
      pathToJoinCourse: "/",
      Image: javascriptImg,
      alt: "Image of Programming Languages",
      bgColor: "bg-primary",
    },
    {
      Title: "UI/UX Design",
      Price: "$250",
      Content:
        "Frontend development is the practice of producing HTML, CSS and JavaScript for a website so that a user can see and interact with them directly",
      Ratings: "4.5",
      RatingsImage: RatingsImage,
      pathToJoinCourse: "/",
      Image: uiuxImage,
      alt: "Image People Working on design",
      bgColor: "bg-[#AA953A]",
    },
  ];
  return (
    <div className="mt-[10rem]  py-10">
      <div className=" container">
        <div className=" flex flex-col space-y-7">
          <section>
            <h1 className="heading_class ">
              <span className="heading_span">Avaliable</span> Courses
            </h1>
          </section>
          <section>
            <div>
              <h3 className="text-[15px]  xsm:text-[17px]  flex  text sm:text-[20px] max-w-[40rem] md:text-[17px] lg:text-[20px] ">
                Virtual learning environments provide opportunities for everyone
                to participate in classes on their own schedule which enables
                people to learn at their own pace, providing a comfortable way
                for them to grow their skills.
              </h3>
            </div>
          </section>
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-2 border border-[green] py-[40px] ">
            {data.map((items, index) => (
              <div
                key={index}
                className="w-[300px] flex flex-col justify-center shadow-md   md:w-[230px] lg:w-[320px]   "
              >
                <div className="border h-[100%]">
                  <Image
                    src={items.Image}
                    alt={items.alt}
                    className=" w-[100%] h-[100%] md:h-[10rem] "
                  />
                </div>
                <section className="flex justify-between items-center px-2 text-[13px]">
                  <h1>{items.Title}</h1>
                  <h3 className="text-primary font-bold">{items.Price}</h3>
                </section>
                <p className="px-2 text-[11px]">{items.Content}</p>
                <section className=" flex space-x-4 items-center px-2 mb-2">
                  <Image
                    src={items.RatingsImage}
                    alt={items.alt}
                    className=" h-[100%] "
                  />
                  <h4>{items.Ratings}</h4>
                </section>
                <div className="mb-4 px-2">
                  <Button
                    // size="lg"
                    className={`items-start rounded-none ${items.bgColor} px-2 py-2`}
                  >
                    Join Our Course
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
