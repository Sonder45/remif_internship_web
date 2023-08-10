import React from "react";
import { Button, Grid, Image, Input } from "antd";

const AboutPage = () => {
  return (
    <div id="About" className="lg:relative w-full lg:flex bg-[#F5F7F6] px-[10px]">
      <div className="lg:w-full flex  space-x-[10px] ">
        <Image src="/img/Rectangle 147.png" preview={false} />
        <div className=" lg:absolute right-0 lg:bottom-[30px] lg:flex lg:justify-center lg:items-end lg:space-x-3 lg:m-4 inline space-y-2 lg:space-y-4">
          <Image   src="/img/IMG_0668.png" preview={false} />
          <Image  src="/img/IMG_0668.png" preview={false} />
        </div>
      </div>
      <div className="">
        <div className="text-left flex flex-col lg:py-[78px] lg:pl-[50px]">
          <span className="aboutTopic max-[767px]:text-center max-[767px]:pt-5">About Us</span>
          <span className="aboutText lg:w-[363px] pt-[28px]">
            Aute et officia anim consectetur consequat velit minim irure Lorem
            ad. Officia nisi sunt est eiusmod occaecat excepteur velit
            reprehenderit occaecat cillum anim ad magna aliqua. Sint enim Lorem
            amet in tempor non ea duis cillum. Cillum consectetur in in aliqua.
            Nostrud minim duis cupidatat et ea sint.
          </span>
          <div className="p-12 max-[767px]:text-center">
            <Button
              className="about-button"
              size="large"
              type="primary"
            >
              READ MORE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
