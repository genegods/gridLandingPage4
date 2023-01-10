import React from "react";

const TitleColumn = () => {
  return (
    <React.Fragment>
      <section>
        <div className="px-5 relative md:grid md:grid-cols-5 md:gap-5">
            {/* this div is for the large letter */}
          <div></div>

          <div className="pl-40 md:pl-0 md:col-span-2">
          <p className="font-bold text-4xl pb-5 "> kakalika Travels</p>
          <p>
              Show you personalized content and manage
              our Christmas to show you personalized conten Christmas to
              Christmas to show you personalized content and manage our
              Christmas to show you personalized conten Christmas to Christmas
              to show you personalized content and manage our Christmas to show
              you Christmas to show you
            </p>
          </div>

          <div className="mt-5 md:mt-14 md:col-span-2">
          <p>
              Christmas to Christmas to show you personalized content and manage
              our Christmas to show you personalized conten Christmas to
              Christmas to show you personalized content and manage our
              Christmas to show you personalized conten
            </p>
          </div>


          {/* absolute large letter */}
          <div className="absolute top-10 left-1 ">
          <p className="largeText text-blue-500">k</p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default TitleColumn;
