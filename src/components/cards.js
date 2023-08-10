"use client";
import { Button, Grid, Image, Input } from "antd";
import { Container } from "postcss";
import React, { useState, useEffect } from "react";
import RadioColor from "./radioColor";

const GroupCards = (props) => {
  return (
    <div id="Accessories" className="lg:w-[216px]">
      {/* <div className="cardsTopic">To get and to gift</div> */}
      <div className="flex flex-col">
        <div className="picture">
          <Image src={props.img} preview={false} />
        </div>
        <span className="caption bg">{props.caption}</span>
        <span className="additionalColors">{props.additionalColor}</span>
        {props.isColor ? (
          <div className="align-center space-x-5">
            <RadioColor color="#CC3B38" />
            <RadioColor color="#6D705A" />
            <RadioColor color="#E0D7C8" />
            <RadioColor color="#000" />
            <RadioColor color="#000" />
            <RadioColor color="#CC3B38" />
            <RadioColor color="#353535" />
          </div>
        ) : (
          <div className="flex-row space-x-2">
            <span className="previousPrice">{props.previousPrice}</span>
            <span className="discountPrice">{props.discount}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupCards;
