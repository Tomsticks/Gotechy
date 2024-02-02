"use client";
import React from "react";
import { Input, Button } from "@material-tailwind/react";
import "../../css/component.css";
import man from "../../asset/images/Frame15.png";
import Image from "next/image";
export default function Joinus() {
  return (
    <div className=" py-14 bg-[#FAFAFA] ">
      <div className=" container">
        <div className=" flex  py-6 px-5 justify-between ">
          <section className=" space-y-7">
            <h1 className="heading_class">
              <span className="heading_span">Bec</span>ome Our Student Today
            </h1>
            <p className="story_content  lg:text-[1.2rem]">
              Join us today by providing us with the basic information about
              you.
            </p>

            <form className="">
              <div className=" inputs flex flex-col sm:grid sm:grid-cols-2 px-2 sm:w-[420px] gap-8 sm:place-items-center py-8 ">
                <Input className="landingpage_form" label="First Name" />
                <Input className="landingpage_form" label="Last Name" />
                <Input
                  className="landingpage_form"
                  size="md"
                  label="Phone Number"
                />
                <Input
                  className="landingpage_form"
                  size="md"
                  label="Email Address"
                />
              </div>

              <div className="">
                <Button
                  type="submit"
                  className=" self-start rounded-none bg-primary px-10 "
                >
                  Join Us
                </Button>
              </div>
            </form>
          </section>
          <section className=" mt-6 hidden md:flex ">
            <div className=" w-[15rem]  xsm:w-[20rem]  sm:w-[20rem] md:w-[16rem] lg:w-[60em] mt-10">
              <Image src={man} className=" w-[100%] h-[100%] " />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
