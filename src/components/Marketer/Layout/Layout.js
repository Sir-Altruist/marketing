import React, { useState } from "react";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import Backdrop from "../UI/Backdrop/Backdrop";

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
      <div className="flex flex-col flex-1 h-full overflow-hidden">
        <NavBar chevronClicked={SideBarToggleHandler} show={showSideBar} />
        <Backdrop show={showSideBar} clicked={sideBarClosedHandler} />
        <main className="flex-1 xl:p-4 pl-20 max-w-full max-h-full p-5 overflow-hidden overflow-y-scroll">
          {props.children}
        </main>
      </div>
    </>
  );
};

export default Marketer;
