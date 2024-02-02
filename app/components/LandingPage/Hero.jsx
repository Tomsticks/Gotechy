"use client";
import React from "react";
import Image from "next/image";
import HeroImage from "../../asset/images/image.png";
import "../../css/component.css";

import { Button } from "@material-tailwind/react";
export default function Hero() {
  return (
    <div className="">
      <div className="container py-20 md:py-0">
        <div className=" flex justify-center  lg:justify-around lg:flex-row">
          {/* HERO CONTENT */}
          <section className=" sm:py-2  text-[#1B1C1E] font-[700] flex gap-10  items-center ">
            <div className="content flex flex-col items-center justify-center lg:justify-start lg:items-start gap-9  ">
              <h3 className=" text-center text-[2.3rem] lg:text-[3.5rem]   lg:text-start">
                Creating Top{" "}
                <span className="text-primary">
                  Tech <br></br> Talents
                </span>{" "}
                For The World
              </h3>
              <p className=" text-[12px] text-center lg:text-start text-[#676869] sm:text-[13px] max-w-[24rem] flex flex-wrap ">
                A platform that helps you learn technology skills virtually with
                free mentorship that will hasten your career success.
              </p>
              <div className="hero_buttons flex space-x-7">
                <Button className="bg-primary rounded-sm" size="sm">
                  Get Started
                </Button>
                <Button
                  className=" border-2 border-primary bg-white text-primary rounded-sm"
                  size="sm"
                >
                  View Courses
                </Button>
              </div>
            </div>
          </section>
          {/* HERO IMAGE */}
          <section className=" ">
            <div className=" md:w-[25rem] lg:w-[30rem] hidden md:flex   md:mt-24 ">
              <Image src={HeroImage} className=" w-[100%] h-[100%] " />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
