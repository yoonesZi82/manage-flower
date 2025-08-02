import React from "react";

function PageForm({ children }) {
  return (
    <div className="flex justify-center items-center bg-[#ede6ea] bg-cover bg-fixed w-full h-screen overflow-hidden">
      <div
        className="w-full desktop:w-1/2 laptop:w-1/2 mobile:w-full tablet:w-full"
        data-aos="fade-up"
      >
        {children}
      </div>
    </div>
  );
}

export default PageForm;
