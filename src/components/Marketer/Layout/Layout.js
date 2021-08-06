import React, { useState } from "react";
import NavBar from "../NavBar";
import SideBar from "../SideBar";

const Marketer = (props) => {
  const [showSideBar, setShowSideBar] = useState(false);

  const sideBarClosedHandler = () => {
    setShowSideBar(false);
  }

  const SideBarToggleHandler = () => {
    setShowSideBar((prevState) => !prevState);
  };
  return (
    <>
      <SideBar show={showSideBar} closed={sideBarClosedHandler} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <NavBar chevronClicked={SideBarToggleHandler} show={showSideBar} />
        <main className="flex-1 xl:p-4 pl-20 max-w-full max-h-full p-5 overflow-hidden overflow-y-scroll">
          {props.children}
        </main>
      </div>
    </>
  );
};

export default Marketer;
