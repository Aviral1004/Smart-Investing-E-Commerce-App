import React from "react";
import img from "../assets/img/collection.png";

const Collections = () => {
  return (
    <div className="h-screen lg:h-[70vh] flex flex-col justify-center lg:flex-row items-center bg-PrimaryColor mt-14 lg:px-32 px-5">
      {/* img section */}
      <div className=" flex justify-center w-full lg:w-2/4 pt-6">
        <img src={img} alt="img" />
      </div>

      {/* content section */}
      <div className=" w-full lg:w-2/4 space-y-4 pt-5 text-center lg:text-start">
        <h1 className=" text-4xl font-semibold text-ExtraDarkColor">
          Best Summer Collection
        </h1>
        <h3 className=" text-lg font-medium text-DarkColor">
          Sale Get Up To 60% off
        </h3>
        <p>
          Wait 60% Off? What are you doing <br/>
          Hurry Up! An opportunity that should not be missed.
          <br/>
          Shop to your heart's content. 
        </p>
      </div>
    </div>
  );
};

export default Collections;
