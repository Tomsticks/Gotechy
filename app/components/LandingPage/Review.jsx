"use client";
import React from "react";
import Image from "next/image";
import image from "../../asset/images/reviewImage.png";
import star from "../../asset/images/Star.png";
import { Button } from "@material-tailwind/react";
export default function Review() {
  return (
    <div className="py-20">
      <div className="container">
        <div className=" px-1 flex flex-col md:flex-row md:justify-between  ">
          <section className="">
            <div>
              <h1 className="heading_class ">
                <span className="heading_span">What</span> Our Most Satisfied
                Student Says
              </h1>
            </div>

            <section className=" gap-6 flex flex-col items-start justify-center">
              <div>
                <h3 className="text-[15px] xsm:text-[17px]  flex text-balance  text sm:text-[20px] sm:max-w-[40rem] md:text-[17px] lg:text-[20px] ">
                  Most of our students provide us comments on their experiences
                  with our training. Below are their comments regarding us.
                </h3>
              </div>
              {/* User Comnment */}
              <div className=" border-l-8 border-primary rounded-lg shadow-md  xsm:text-[13px] xsm:py-2 xsm:px-2 px-2 text-[11px] w-[] md:w-[27rem] sm:w-[] sm:py-6 sm:px-6 space-y-6 ">
                <p className=" leading-6">
                  Thank you very much for your assistance; it is just what I was
                  seeking for to launch my tech career. I gained a lot of
                  knowledge and made connections with colleagues in my
                  department. The program's mentorship component, I must add, is
                  top notch.
                </p>
                <div className="flex justify-between">
                  <h1 className="student_name">Adeyemo Praise</h1>
                  <div className="ratings flex">
                    <Image className=" h-[100%] " src={star} />
                    <Image className=" h-[100%] " src={star} />
                    <Image className=" h-[100%] " src={star} />
                    <Image className=" h-[100%] " src={star} />
                    <Image className=" h-[100%] " src={star} />
                  </div>
                </div>
              </div>
            </section>
          </section>

          <div className=" flex flex-col md:flex-row md:justify-between ">
            <section className="flex flex-col items-start md:items-end ">
              <div className=" w-[15rem]  xsm:w-[20rem]  sm:w-[20rem] md:w-[16rem] lg:w-[50em] hidden md:flex ">
                <Image src={image} className=" w-[100%] h-[100%] " />
              </div>
              <Button className="border border-primary   mt-10 bg-transparent text-primary rounded-sm">
                See More Reviews
              </Button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
