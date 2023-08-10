import { Button, Image, Input, Dropdown, Drawer } from "antd";
import React, { useState } from "react";
import DropdownMenu from "./dropdown";

const Main = () => {
  const items = [
    {
      label: (
        <div className=" flex flex-col space-y-3 cursor-default">
          <div className="flex w-[888px]">
            <div className="dropDiscription flex space-x-[3.51px] pl-[46.28px] items-center">
              <div>Press</div>
              <div>
                <b>enter</b>
              </div>
              <div>to enter</div>
              <div>↑↓</div>
              <div>to navigate</div>
              <div>
                <b>esc</b>
              </div>
              <div>to dismiss</div>
            </div>
          </div>
          <div className="flex justify-between ">
            <div className="grid grid-cols-2 gap-[8px] mx-12">
              <DropdownMenu
                image="/img/Rectangle 692.png"
                title="Chill Summer Essential Set"
                price="$899"
                discount="$620.32"
              />
              <DropdownMenu
                image="/img/Rectangle 692.png"
                title="Chill Summer Essential Set"
                price="$899"
                discount="$620.32"
              />
              <DropdownMenu
                image="/img/Rectangle 692.png"
                title="Chill Summer Essential Set"
                price="$899"
                discount="$620.32"
              />
              <DropdownMenu
                image="/img/Rectangle 692.png"
                title="Chill Summer Essential Set"
                price="$899"
                discount="$620.32"
              />
              <div className="viewAll space-x-1 flex items-center">
                <span className="viewAllDisc">View all</span>
                <span className="viewAllNumb">(234)</span>
                <Image src="/img/rigth.png" preview={false} />
              </div>
            </div>
            <div className="categories flex flex-col space-y-[16px] w-[160px]">
              <a className="cursor-pointer" href="/">
                Sweater
              </a>
              <a className="cursor-pointer" href="/">
                Basic
              </a>
              <a className="cursor-pointer" href="/">
                Cardigans
              </a>
              <a className="cursor-pointer" href="/">
                Hoodies
              </a>
              <a className="cursor-pointer" href="/">
                Crew Necks
              </a>
              <a className="cursor-pointer" href="/">
                Turtle Necks
              </a>
              <a className="cursor-pointer" href="/">
                Vests & Tops
              </a>
            </div>
          </div>
        </div>
      ),
      key: "0",
    },
  ];
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className=" imgContainer ">
      <div className=" w-full h-[100vh]">
        <Image
          className="w-full object-cover"
          src="/img/main.png"
          style={{ height: "100vh", width: "100vw" }}
          preview={false}
        />
      </div>
      <div className="navBar">
        <div className="nav-elements flex space-x-[20px]">
          <a href="#Collection" className="hover__navbar">
            Collection
          </a>
          <a href="#Women" className="hover__navbar">
            Women
          </a>
          <a href="#Men" className="hover__navbar">
            Men
          </a>
          <a href="#Accessories" className="hover__navbar">
            Accessories
          </a>
          <a href="#About" className="hover__navbar">
            About
          </a>
        </div>
        <div className="hamburger-search">
          <Image src="./img/Group 6.svg" preview={false} onClick={showDrawer} />
          <Drawer placement="left" onClose={onClose} open={open}>
            <div className="flex flex-col space-y-2">
              <a>Sweater</a>
              <a>Basic</a>
              <a>Cardigans</a>
              <a>Hoodies</a>
              <a>Crew Necks</a>
              <a>Turtle Necks</a>
              <a>Vests & Tops</a>
            </div>
          </Drawer>
          <Image
            className="cursor-pointer"
            src="./img/Group 421.svg"
            preview={false}
          />
        </div>
        <a href="/" className="icon cursor-pointer">
          <Image src="/img/Group 1369.svg" preview={false} />
        </a>
        <div className="groupIcon flex justify-around space-x-4">
          <div className="input-items">
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <Input type="primary" placeholder="Search" />
            </Dropdown>
          </div>
          <div className=" ">
            <Image
              className="cursor-pointer"
              src="/img/Vector.svg"
              preview={false}
            />
          </div>
          <div>
            <Image
              className="cursor-pointer"
              src="/img/Group 416.svg"
              preview={false}
            />
          </div>
        </div>
      </div>
      <div className="logo">
        <div className="logo1">SUMMER</div>
        <div className="logo2">
          Sale
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Mr+Dafoe"
          ></link>
        </div>
        <div className="flex60">
          <div className="logo3-1 m-[10px]">UPTO</div>
          <div className="logo3-2">
            60<span className=" text-[80px] font-bold">%</span>
            <span className=" text-[40px] font-mono">FF</span>
          </div>
          {/* <div  className=" text-white text-[60px]">%</div>
          <div className="logo3-4">FF</div> */}
        </div>
        <Button className="button">SHOP NOW</Button>
      </div>
    </div>
  );
};
export default Main;
