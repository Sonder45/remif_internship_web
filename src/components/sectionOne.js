import { Button, Grid, Image, Input } from "antd";
import { Container } from "postcss";
import React from "react";

const SectionOne = () => {
  return (
    <div id="Collection" className="ceasar w-full flex items-center justify-center py-[100px] px-[10px] lg:px-0 lg:space-x-[50px]">
      <div className="topic flex flex-col space-y-4">
        <div className="topTopic">WINTER SPICE 2020</div>
        <div className="topicText">
          Infusion of summer pieces and cashmere silk blends.
        </div>
        <Button
          className="section-button"
        >
          SHOP NOW
        </Button> 
      </div>
      <div className="card-image  ">
        <div className="flex space-x-[5px]">
            <Image src="/img/group1.png" preview={false} />
          <div className="flex flex-col space-y-1">
            <Image src="/img/group2.png" preview={false} />
            <Image src="/img/group3.png" preview={false} />
          </div>
          <div />
        </div>
      </div>
    </div>
  );
};
export default SectionOne;
