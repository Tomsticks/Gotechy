import React from "react";
import "../../css/component.css";

export default function Delivery() {
  return (
    <div className=" container py-5">
      <div className="flex flex-col py-10 space-y-6  ">
        <h1 className="heading_class">
          <span className="heading_span">Go</span>Techy Training Delivery
          Approach
        </h1>
        <p className="story_content sm:max-w-[40rem] lg:text-[1.2rem]">
          Get to know how the training is being delivered to our students.
        </p>

        <div className=" flex flex-col gap-5 md:flex-row justify-between px-2 ">
          <section className="delivery_section">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="bg-[#FDF4DD] text-[#F3BE36] "
            >
              <path d="M16.5 16.5h1.88v5H16.5v-5m3.13 0v5h1.87v-5h-1.87M15 1H9v2h6V1m6 12.35c-.64-.22-1.3-.35-2-.35-3.31 0-6 2.69-6 6 0 1.03.26 2 .71 2.83-.55.11-1.12.17-1.71.17a9 9 0 010-18c2.12 0 4.07.74 5.62 2l1.42-1.44c.51.44.96.9 1.41 1.41l-1.42 1.42A8.963 8.963 0 0121 13v.35M13 7h-2v7h2V7z" />
            </svg>
            <h3 className="text-[#1B1C1E] font-[600] text-[.9rem]">
              Faster Paced Courses
            </h3>
            <p>Platform designed for all</p>
            <p>Training in various tech skill areas</p>
            <p>2-3 months, 2-4 hours per day, four times in a week</p>
            <p>Live classes through zoom, google meet and youtube</p>
            <p>One project at the end of the training</p>
            <p>Mentorship for 2-3 months.</p>
          </section>

          <section className="delivery_section">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className=" bg-[#E6EFFC] text-[#0056D2] "
            >
              <path d="M15 3H9V1h6v2m-2 16c0 1.03.26 2 .71 2.83-.55.11-1.12.17-1.71.17a9 9 0 010-18c2.12 0 4.07.74 5.62 2l1.42-1.44c.51.44.96.9 1.41 1.41l-1.42 1.42A8.963 8.963 0 0121 13v.35c-.64-.22-1.3-.35-2-.35-3.31 0-6 2.69-6 6m0-12h-2v7h2V7m4 9v6l5-3-5-3z" />
            </svg>
            <h3 className="text-[#1B1C1E] font-[600] text-[.9rem]">
              Intensive Courses
            </h3>
            <p>Platform designed for all</p>
            <p>Training in various tech skill areas</p>
            <p>2-3 months, 2-4 hours per day, four times in a week</p>
            <p>Live classes through zoom, google meet and youtube</p>
            <p>One project at the end of the training</p>
            <p>Mentorship for 2-3 months.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
