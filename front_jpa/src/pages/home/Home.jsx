import React from "react";
import Add_btn from "../../components/button/Add_btn";
import PopUp from "../../components/popup/PopUp";
import Table from "../../components/tables/regular_table/Table";
import "./home.css";
import { MainData } from "../../contexts/Main_context";

export default function Home() {

    const {isPopUp} = MainData()

  return (
    <>
      <div className="Main flex justify-center items-center">
        <div className="tableWrapper">
          <Table />
          <Add_btn />
        </div>
        {isPopUp && <div className="fixed w-full h-full bg-black bg-opacity-50 z-[15] overflow-auto left-0 top-0 backdrop-blur flex justify-center items-center ">
          <PopUp />
        </div>}
      </div>
    </>
  );
}
