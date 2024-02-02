import React from "react";
import Image from "next/image";
import Tolu from "../../asset/images/unsplash_ZGa9d1a_4tA.png";

export default function Founder() {
  return (
    <div className=" container">
      <div className="flex flex-col py-10 space-y-6  ">
        <h1 className="heading_class">
          <span className=" heading_span">Meet </span>
          Our Founder
        </h1>
        <p className="story_content max-w-[40rem] lg:text-[1.2rem]">
          We are a technology workforce development company that helps people
          learn premium technology skills virtually and also guide them on their
          career success path.
        </p>

        <div className=" md:flex md:flex-row-reverse md:px-6  md:justify-between py-6  md:items-center">
          {/* Image Section */}

          <div className="hero_image-container md:max-h-[20rem]">
            <Image
              src={Tolu}
              alt="Image Of The Founder"
              className="h-[100%] lg:w-[100%]"
            />
            <p>Founder</p>
            <h1 className=" text-[1.2rem] font-[700]">Tolulope Folorunsho</h1>
          </div>

          {/* Text section */}
          <section className=" max-w-[50rem] md:w-[50%] border border-[red] ">
            {/* About Founder */}
            <div className=" ">
              <h3 className=" text-[.9rem]">
                Tolulope is a software developer with extensive experience in
                javascript, Nodejs, Nodejs Mvc, React, MongoDB, CSS3, HTML5, Web
                API and working knowledge of ExpressJs and Socket.io.
              </h3>
            </div>
            {/* More Info */}
            <div className="">
              <h3 className=" text-[.9rem] mt-4">
                Personally, he has worked on several live projects successfully
                and mentored over 200+ individuals in their tech career for the
                past years. He is proficient in various platforms, languages and
                embedded system. Also, he is able to efficiently self-manage
                during independent projects, as well as collaborate as part of a
                productive team.
              </h3>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
