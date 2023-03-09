import React from "react";

const AboutUs = () => {
  return (
    <>
      <div id="about" className="grid grid-cols-1 md:grid-cols-11 gap-12 md:gap-0 max-w-screen-md mx-auto py-16 px-6">
        <img className="absolute rotate-[-15deg] right-4 top-[1200px] md:top-[600px] w-24 opacity-30 z-0" src="../src/assets/img/leaf-branch-1.png" alt="" />
        <div className="md:col-span-6 order-2 md:order-1 animate__animated animate__fadeInRight">
          <img
            src="../src/assets/img/about-sushi.png"
            className="w-[300px] md:w-[350px] mx-auto md:right-6 relative z-10"
            alt=""
          />
        </div>
        <div className="md:col-span-5 order-1 md:order-2 flex flex-col items-center md:items-start text-center md:text-start gap-2 md:gap-4 mt-6  md:px-0  animate__animated animate__fadeInLeft">
          <h1 className="font-dancing_script font-semibold text-primary text-xl">About Us</h1>
          <div className="">
            <div className="flex gap-4 md:-mb-2">
              <h2 className="font-lora text-title text-4xl">We Provide</h2>
              <img
                className="w-12"
                src="../src/assets/img/about-sushi-title.png"
                alt=""
              />
            </div>
            <h2 className="font-lora text-title text-4xl">Healthy Food</h2>
          </div>
          <p className="font-poppins text-txt text-sm mt-4">
            Food comes to us from our relatives, whether they have wings or
            roots. This is how we consider food, it also has a culture. It has a
            history that passes from generation to generation.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
