import React from "react";
import { RingLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen py-20">
      <RingLoader color="#047857" size={80} cssOverride />
    </div>
  );   
};

export default Loading;