import React from "react";

const Home = () => {
  return (
    <>  
      <div id="home" className="grid md:grid-cols-11 grid-cols-1 gap-10 md:gap-0 pt-28 pb-16 max-w-screen-md mx-auto px-6">
        <img className="absolute left-0 top-[200px] md:top-10 rotate-90 w-24 opacity-30" src="../src/assets/img/leaf-branch-2.png" alt="" />
        <img className="absolute right-0 top-[600px] md:top-52 w-24 opacity-30" src="../src/assets/img/leaf-branch-4.png" alt="" />
        <div className="md:col-span-5 order-2 md:order-1 flex flex-col md:items-start items-center gap-2 font-lora md:text-start text-center animate__animated animate__fadeInUp">
          <h1 className="text-4xl text-title">Enjoy Delicious</h1>
          <div className="flex gap-2 items-center">
            <img
              src="../src/assets/img/home-sushi-title.png"
              className="w-9 h-9 mt-1"
              alt=""
            />
            <h1 className="text-4xl text-title">Sushi Food</h1>
          </div>
          <p className="md:w-[250px] font-poppins text-sm text-txt mb-3 py-3 leading-5 tracking-tight">
            Enjoy a good dinner with the best dishes in the restaurant and
            improve your day.
          </p>
          <button className="font-poppins bg-primary text-white px-4 py-2 rounded-full flex items-center gap-2 mx-auto md:ml-0 group">
            <p className="tracking-tighter">Order Now</p>
            <i class="ri-arrow-right-line text-xl transition group-hover:translate-x-1"></i>
          </button>
        </div>
        <div className="md:col-span-6 order-1 md:order-2 animate__animated animate__fadeInDown">
          <img
            src="../src/assets/img/home-sushi-rolls.png"
            className="w-[550px] md:relative md:bottom-6 md:right-4 mx-auto"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Home;
