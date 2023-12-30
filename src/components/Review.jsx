import React from "react";
import ReviewCard from "../layouts/ReviewCard";

const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5">

      {/* heading section */}
      <h1 className=" font-semibold text-center text-ExtraDarkColor text-4xl lg:mt-14 mt-24 ">
        Your Feedbacks 
      </h1>

      {/* review card section */}
      <div className=" flex flex-col items-center xl:flex-row gap-5 justify-center py-4 my-8">
        <ReviewCard name="Yash Singh" comment={"Fast and good quality delivery "} />
        <ReviewCard name="Priyesh Pandey" comment={"Products are of reasonable price."} />
        <ReviewCard name="Divyanshu" comment={"Amazing offers here"} />
      </div>
    </div>
  );
};

export default Review;
