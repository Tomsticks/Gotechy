"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import logo from "../../asset/images/Vector.png";
export default function NavBar() {
  return (
    <div className=" container ">
      <nav className=" flex justify-between items-center py-[20px] ">
        <div className="">
          <Image
            src={logo}
            className=" h-[30px] w-[100px] sm:h-[50px] sm:w-[150px]"
          />
        </div>

        <section className=" hidden lg:flex">
          <div className=" flex items-center justify-center space-x-20 font-[Space Grotesk] font-[500] text-[18px]">
            <Link className="text-primary" href="/">
              Home
            </Link>
            <Link href="/">Courses</Link>
            <Link href="/">About Us</Link>
            <Link href="/">Contact Us</Link>
          </div>
        </section>

        <div>
          <Button
            className=" hidden lg:block rounded-none bg-primary"
            size="lg"
            // loading={true}
          >
            Get Started
          </Button>
          <div className=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </nav>
    </div>
  );
}
