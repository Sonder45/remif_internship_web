import React from "react";
import { Button, Grid, Image, Input } from "antd";

const SubscribeSection = () => {
  return (
    <div>
      <div className="flex flex-col text-center m-14">
        <span className="subscribe">Subscribe</span>
        <span className="subsText">
          Sign up for emails and receive early access to new arrivals, sales,
          events + more.
        </span>
        <div className=" p-5">
          <div className="flex justify-center">
            <Input
              className="subs-input"
              placeholder="Enter your email address:"
            />
            <Button className="subs-button" type="primary">
              SUBMIT
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="privacy-policy flex flex-col w-[592px] pt-2">
              By signing up, you will receive Gobi Cashmere offers, promotions
              and other commercial messages. You are also agreeing to Gobi
              Cashmere's rivacy Policy. You may unsubscribe at any time.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SubscribeSection;
