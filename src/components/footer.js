import React from "react";
import { Image, Button, Grid } from "antd";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#F5F7F6] lg:flex items-center space-x-[40px]">
        <div className="lg:bg-[#FFFFFF] lg:w-5/6 ">
          <div className="lg:flex justify-around p-[40px] ">
            <div className=" flex flex-col space-y-[31px]">
              <span className="footerTopic">About Us</span>
              <div className="footerServices  flex flex-col space-y-[16px]">
                <div>Our History</div>
                <div>Product Care</div>
                <div>Store Location</div>
                <div>Sustainability</div>
              </div>
            </div>
            <div className="flex flex-col space-y-[31px]">
              <span className="footerTopic">About Us</span>
              <div className="footerServices flex flex-col space-y-[16px]">
                <div>Our History</div>
                <div>Product Care</div>
                <div>Store Location</div>
                <div>Sustainability</div>
              </div>
            </div>
            <div className="flex flex-col space-y-[31px]">
              <span className="footerTopic">About Us</span>
              <div className="footerServices flex flex-col space-y-[16px]">
                <div>Our History</div>
                <div>Product Care</div>
                <div>Store Location</div>
                <div>Sustainability</div>
              </div>
            </div>
            <div className="flex flex-col space-y-[31px]">
              <span className="footerTopic">About Us</span>
              <div className="footerServices flex flex-col space-y-[16px]">
                <div>Our History</div>
                <div>Product Care</div>
                <div>Store Location</div>
                <div>Sustainability</div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap lg:pl-[86px] lg:pb-[23px] lg:space-x-1 justify-center lg:justify-start">
            <Image src="/img/amex.png" preview={false} />
            <Image src="/img/Group 182.png" preview={false} />
            <Image src="/img/gpay.png" preview={false} />
            <Image src="/img/sofort.png" preview={false} />
            <Image src="/img/visa.png" preview={false} />
            <Image src="/img/result (11) 1.png" preview={false} />
            <Image src="/img/master.png" preview={false} />
            <Image src="/img/spay.png" preview={false} />
            <Image src="/img/klarna.png" preview={false} />
          </div>
        </div>
        <div className="flex justify-center lg:flex-col space-y-[31px] ">
          <div className="footerTopic max-[767px]:hidden">Follow Us</div>
          <div className="flex lg:flex-col items-center lg:space-y-[16px] max-[767px]:space-x-3 ">
            <div>
              <Image src="/img/Vector.png" preview={false} />
            </div>
            <div>
              <Image src="/img/Vector (1).png" preview={false} />
            </div>
            <div>
              <Image src="/img/Vector (2).png" preview={false} />
            </div>
            <div>
              <Image src="/img/Vector (3).png" preview={false} />
            </div>
            <div className="flex max-[767px]:hidden  space-x-3">
              <span className="lang ">Global - English</span>
              <div>
                <Image src="/img/Group 1304.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright bg-[#F5F7F6] h-[60px] flex items-center max-[767px]:justify-center pl-[8vw] ">
        All content Copyright © 2020 GOBI Cashmere
      </div>
    </div>
  );
};
export default Footer;
