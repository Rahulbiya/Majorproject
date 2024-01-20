import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { FaStrava } from "react-icons/fa";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services bg-gradient-to-bl from-black to-black">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4 gap-x-20">

    <div className="flex-1 flex flex-col justify-start items-center gap-4">
            <ServiceCard
          color="bg-[#2952E3]"
          title="Data Security"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Your data is protected with the highest level of security. We prioritize your privacy and maintain top-quality services."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Competitive Rates"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Get the best exchange rates in the market. We ensure you get the most value for your assets."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Lightning-Fast Transactions"
          icon={<FaStrava fontSize={21} className="text-white" />}
          subtitle="Experience lightning-fast transactions on our platform. Your time is important to us."
        />

      </div>

      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          We provide the 
          <br />
          best platform for crypto payment
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          Anyone can send or receive cryptos from any platform. simple and easy to use.
        </p>
      </div>

    </div>
  </div>
);

export default Services;