import React from "react";
import { Image, Grid } from "antd";

const DropdownMenu = (props) => {
  return (
    <div className="flex ">
      <Image src={props.image} preview={false} />
      <div className="flex items-center pl-2">
        <div className="dropAdvertisement flex flex-col">
          {props.title}
          <div className="flex flex-row space-x-1">
            <div className="previousPrice">{props.price}</div>
            <div className="discountPrice">{props.discount}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DropdownMenu;

