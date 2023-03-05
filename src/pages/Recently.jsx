import React from "react";

const Recently = () => {
  return (
    <div className="grid md:grid-cols-11 grid-cols-1 gap-16 md:gap-0 py-16 max-w-screen-md mx-auto px-6">
      <div className="md:col-span-5 flex flex-col md:items-start items-center gap-2 font-lora md:text-start text-center">
        <h1 className="font-dancing_script font-semibold text-lg text-primary">
          Recently Added
        </h1>
        <h1 className="font-lora text-4xl text-title">
          Sushi Samurai <br />
          Salmón Cheese
        </h1>
        <p className="md:w-[250px] font-poppins text-sm text-txt mb-3 py-3 leading-5 tracking-tight">
          Take a look at what's new. And do not deprive yourself of a good meal,
          enjoy and be happy.
        </p>
        <button className="font-poppins bg-primary text-white px-4 py-2 rounded-full flex items-center gap-2 mx-auto md:ml-0 relative">
          <img
            className="absolute top-[20px] left-[170px] md:-top-[30px] md:left-[300px] rotate-45 w-6"
            src="../src/assets/img/spinach-leaf.png"
            alt=""
          />
          <p className="tracking-tighter">Order Now</p>
          <i class="ri-arrow-right-line text-xl"></i>
        </button>
      </div>
      <div className="md:col-span-6">
        <img
          src="../src/assets/img/recently-salmon-sushi.png"
          className="w-[300px] md:w-[350px] md:relative md:bottom-6 md:right-4 md:translate-y-12 mx-auto"
          alt=""
        />
      </div>
    </div>
  );
};

export default Recently;
