import React from "react";
import img from "../asserts/bg2.jpg";

const ImgSection = () => {
  return (
    <React.Fragment>
      <section>
        <div className="imgColumn md:grid md:grid-cols-3">
          <div className="md:col-span-2">
            <img src={img} alt="heroImg" className="heroImg" />
          </div>
          <div className="bg-blue-500 h-40 px-5 centered flex-col text-white md:w-full md:h-full">
            <p className="text-3xl pb-5 capitalize text-center">
              take control over your trip
            </p>
                       
		   <p className="text-center"> Content and manage our Christmas to show you personalized conten Christmas to Christmas to show you personalized content and manage our Christmas to show you Christmas to show you</p>
           
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ImgSection;
