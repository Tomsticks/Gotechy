import React from "react";
import Image from "next/image";
import Online from "../../asset/images/Frame14.png";
import "../../css/component.css";
export default function LearningMethod() {
  return (
    <div className=" py-14">
      <div className="container">
        <div className=" px-1 flex justify-between  ">
          <section className="flex flex-col gap-7  ">
            <h1 className="heading_class ">
              <span className="heading_span">Why</span> Virtual Learning Method?
            </h1>

            <div className=" flex flex-col md:flex-row md:justify-between ">
              <section className=" gap-10 flex flex-col items-start justify-center ">
                <div>
                  <h3 className="text-[15px] xsm:text-[17px] md:max-w-[30rem] leading-8  flex  text sm:text-[20px] xl:max-w-[40rem] md:text-[17px] lg:text-[20px] ">
                    Virtual learning environments provide opportunities for
                    everyone to participate in classes on their own schedule
                    which enables people to learn at their own pace, providing a
                    comfortable way for them to grow their skills.
                  </h3>
                </div>

                <div className="learning_method">
                  <div className="svg-con ">
                    <svg
                      viewBox="0 0 640 512"
                      fill="currentColor"
                      className="text-[#058B0B] bg-[#E6FCEC]"
                    >
                      <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9V320c0 28.4-10.8 57.7-22.3 80.8-6.5 13-13.9 25.8-22.5 37.6-3.2 4.3-4.1 9.9-2.3 15s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7.3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7-3.2-14.2-7.5-28.7-13.5-42v-24.6c0-30.2 10.2-58.7 27.9-81.5 12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5.8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1l280.6-101c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1c-7.6-2.7-15.6-4.1-23.7-4.1zM128 408c0 35.3 86 72 192 72s192-36.7 192-72l-15.3-145.4L354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6l-142.2-51.4L128 408z" />
                    </svg>
                    <p>Live classses</p>
                  </div>

                  <div className="svg-con  ">
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      className="text-[#F3BE36] bg-[#FDF4DD] "
                    >
                      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM641.7 520.8L442.3 677.6c-7.4 5.8-18.3.6-18.3-8.8V355.3c0-9.4 10.9-14.7 18.3-8.8l199.4 156.7a11.2 11.2 0 010 17.6z" />
                    </svg>
                    <p>Flexible time</p>
                  </div>
                  <div className="svg-con  ">
                    <svg
                      // fill="currentColor"
                      className=" text-[##0056D2] bg-[#E6EFFC] "
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 110 8a8 8 0 0116 0zM8 3.5a.5.5 0 00-1 0V9a.5.5 0 00.252.434l3.5 2a.5.5 0 00.496-.868L8 8.71V3.5z" />
                    </svg>
                    <p>Certified</p>
                  </div>
                  <div className="svg-con  ">
                    <svg
                      viewBox="0 0 24 24"
                      className=" text-[#F8328F] bg-[#FEEDF5] "
                      fill="currentColor"
                    >
                      <path d="M17 22v-2h3v-3h2v3.5c0 .39-.16.74-.46 1.04-.3.3-.65.46-1.04.46H17M7 22H3.5c-.39 0-.74-.16-1.04-.46-.3-.3-.46-.65-.46-1.04V17h2v3h3v2M17 2h3.5c.39 0 .74.16 1.04.46.3.3.46.65.46 1.04V7h-2V4h-3V2M7 2v2H4v3H2V3.5c0-.39.16-.74.46-1.04.3-.3.65-.46 1.04-.46H7m6 15.25l4-2.3v-4.59l-4 2.3v4.59m-1-6.33l4-2.29-4-2.35-4 2.35 4 2.29m-5 4.03l4 2.3v-4.59l-4-2.3v4.59m11.23-7.36c.5.32.77.75.77 1.32v6.32c0 .57-.27 1-.77 1.32l-5.48 3.18c-.5.32-1 .32-1.5 0l-5.48-3.18c-.5-.32-.77-.75-.77-1.32V8.91c0-.57.27-1 .77-1.32l5.48-3.18c.25-.13.5-.19.75-.19s.5.06.75.19l5.48 3.18z" />
                    </svg>
                    <p>Lifetime Access</p>
                  </div>
                </div>
              </section>
            </div>
          </section>
          {/* BODY */}

          <section className="items-end mt-6 hidden md:flex ">
            <div className=" w-[15rem]  xsm:w-[20rem]  sm:w-[20rem] md:w-[16rem] lg:w-[70em] ">
              <Image src={Online} className=" w-[100%] h-[100%] " />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
