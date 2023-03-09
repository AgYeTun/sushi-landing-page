import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-6 py-16 max-w-screen-md mx-auto px-6 md:gap-1">
      <div className=" col-span-4 md:col-span-2 mb-10 text-center md:text-start">
        <img
          src="../src/assets/img/logo.png"
          className="h-6 inline mr-1"
          alt="Sushi Logo"
        />
        <span className="font-lora text-2xl ">Sushi</span>
        <p className="font-poppins text-txt text-sm max-w-[300px] mx-auto mt-3 md:pr-16 md:mt-6">Food for the body is not enough. There must be food for the soul.</p>
      </div>
      <div className="col-span-1 max-[525px]:col-span-2 font-poppins mb-10">
        <h2 className=" text-title text-lg mb-6">Main Menu</h2>
        <div className=" text-txt text-sm flex flex-col gap-3">
          <a href="#">About</a>
          <a href="#">Menus</a>
          <a href="#">Offer</a>
          <a href="#">Events</a>
        </div>
      </div>
      <div className="col-span-1 max-[525px]:col-span-2 font-poppins mb-10">
        <h2 className=" text-title text-lg mb-6">Information</h2>
        <div className=" text-txt text-sm flex flex-col gap-3">
          <a href="#">Contact</a>
          <a href="#">Order & Returns</a>
          <a href="#">Videos</a>
          <a href="#">Reservation</a>
        </div>
      </div>
      <div className="col-span-1 max-[525px]:col-span-2 font-poppins mb-10">
        <h2 className=" text-title text-lg mb-6">Address</h2>
        <div className=" text-txt text-sm flex flex-col gap-3">
          <p>Av. Hacienda 1234 <br />Lima 4321, Peru</p>
          <p>9AM - 11PM</p>
        </div>
      </div>
      <div className="col-span-1 max-[525px]:col-span-2 font-poppins mb-10">
        <h2 className=" text-title text-lg mb-5">Social Media</h2>
        <div className=" text-txt text-xl flex gap-6">
          <a href="#"><i class="ri-facebook-circle-fill text-primary"></i></a>
          <a href="#"><i class="ri-instagram-fill text-primary"></i></a>
          <a href="#"><i class="ri-twitter-fill text-primary"></i></a>
        </div>
      </div>
      <div className="col-span-4 md:col-span-6 mt-12 text-center">
        <div className="flex gap-4 justify-center mb-6">
          <img className="w-8" src="../src/assets/img/footer-card-1.png" alt="" />
          <img className="w-8" src="../src/assets/img/footer-card-2.png" alt="" />
          <img className="w-8" src="../src/assets/img/footer-card-3.png" alt="" />
          <img className="w-8" src="../src/assets/img/footer-card-4.png" alt="" />
        </div>
        <p className="font-poppins text-sm text-txt-light">&#169; Copyright Bedimcode. All rights reserved</p>
      </div>
      <div className="fixed bottom-8 right-8 bg-body-color px-1 py-0.5 rounded-lg border-2 border-primary/[.5] shadow-lg hover:scale-110 cursor-pointer">
        <a href="#home"><i class="ri-arrow-up-line text-primary"></i></a>
      </div>
    </div>
  );
};

export default Footer;
