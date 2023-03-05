import React from "react";

const Newsletter = () => {
  return (
    <div className="py-16 px-6 md:max-w-screen-md md:mx-auto">
      <div className="md:grid md:grid-cols-2 bg-title rounded-[34px] md:pt-16 md:pb-10 text-center relative">
        <img
          className="w-7 absolute bottom-[-30px] right-[60px] rotate-45"
          src="../src/assets/img/spinach-leaf.png"
          alt=""
        />
        <div className="hidden md:block md:col-span-1 relative">
          <img
            className="w-[240px] absolute left-10"
            src="../src/assets/img/newsletter-sushi.png"
            alt=""
          />
        </div>
        <div className=" md:col-span-1 md:text-start rounded-[34px] relative overflow-hidden max-[425px]:pt-24 pt-16 pb-10 md:pt-0 md:pb-0">
          <img
            className="md:hidden w-[240px] absolute top-[-70px] left-[-110px]"
            src="../src/assets/img/newsletter-sushi.png"
            alt=""
          />
          <h1 className="font-dancing_script font-semibold text-xl text-primary mb-2">
            Newsletter
          </h1>
          <h2 className="font-lora text-3xl text-white mb-8">
            Subscribe For <br />
            Offer Updates
          </h2>
          <div className="inline-block px-4 py-1.5 bg-white rounded-full">
            <input
              type="email"
              className="border-transparent focus:ring-transparent focus:border-transparent p-0 w-[150px]"
              placeholder="Enter email"
            />
            <button className="bg-primary px-5 py-2 rounded-full translate-x-2 text-white">
              <div className="flex  gap-2">
                Subscribe{" "}
                <span className="scale-x-[-1]">
                  <i class="ri-navigation-line "></i>
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
