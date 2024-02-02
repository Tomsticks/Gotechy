import React from "react";

export default function Ourstory() {
  return (
    <div className="  bg-[#FAFAFA] py-5">
      <div className=" container">
        <div className="flex flex-col py-10 space-y-6  ">
          <h1 className="heading_class">
            <span className="heading_span">Our</span> Story
          </h1>
          <p className="story_content max-w-[40rem] lg:text-[1.2rem]">
            We are a technology workforce development company that helps people
            learn premium technology skills virtually and also guide them on
            their career success path.
          </p>

          <div className=" flex flex-col gap-5 md:grid md:grid-cols-3">
            <section className="md:border-r md:border-black pr-2">
              <h3 className="text-primary font-[600] text-[.9rem]">
                <span>01. </span>Years of intense teaching and mentorship
              </h3>
              <p>
                We have successfully mentored over 500+ individuals in their
                tech career for the past three years.
              </p>
            </section>
            <section className="md:border-r md:border-black pr-2">
              <h3 className="text-primary font-[600] text-[.9rem]">
                <span>01. </span>Years of intense teaching and mentorship
              </h3>
              <p>
                We have successfully mentored over 500+ individuals in their
                tech career for the past three years.
              </p>
            </section>
            <section>
              <h3 className="text-primary font-[600] text-[.9rem]">
                <span>01. </span>Years of intense teaching and mentorship
              </h3>
              <p>
                We have successfully mentored over 500+ individuals in their
                tech career for the past three years.
              </p>
            </section>
            {/* second section */}
          </div>
        </div>
      </div>
    </div>
  );
}
