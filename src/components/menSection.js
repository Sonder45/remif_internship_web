import { Button, Grid, Image, Input } from "antd";
import { Container } from "postcss";
import React from "react";

const MenSection = () => {
  return (
    <div id="Men" className="w-full">
      <div className="topic-each flex items-center justify-center ">
        <span className="pt-10">Men</span>
      </div>
      <div className="flex p-4 justify-around max-[767px]: gap-2">
        <Image src="/img/Group 1354.png" preview={false} />
        <Image
          className="flex lg:pt-20 md:pt-0"
          src="/img/Group 1355.png"
          preview={false}
        />
        <Image
          className="hidden md:block"
          src="/img/Group 1354.png"
          preview={false}
        />
      </div>
    </div>
  );
};
export default MenSection;
