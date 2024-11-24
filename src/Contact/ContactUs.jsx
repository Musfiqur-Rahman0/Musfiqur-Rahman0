import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div className=" mt-24 sm:mt-40 flex flex-col sm:flex-row px-8  sm:px-14 items-center gap-5 w-full pb-20">
      <div className="w-full sm:w-[35%]  px-5 py-5 flex flex-col gap-5 bg-white shadow-lg rounded-lg ">
        <div className="border-black border-b ">
          <div className="flex items-center gap-4">
            <span className="p-2 rounded-full bg-red-500 text-white">
              <BsTelephone size={24} />
            </span>
            <h2 className="mt-1 text-xl font-semibold">Call to us</h2>
          </div>
          <div className="space-y-1 pb-5 mt-3">
            <p className="text-[0.7rem] tracking-tighter">
              We are availble 24/7, 7days a week{" "}
            </p>
            <p className="text-[0.7rem] tracking-tighter">Phone : 99793487</p>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4">
            <span className="p-2 rounded-full bg-red-500 text-white">
              <BiLogoGmail size={24} />
            </span>
            <h2 className="text-xl font-semibold tracking-tight mt-1">
              Write to us
            </h2>
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-sm font-semibold tracking-tighter">
              Fill out our form and we will contact you within 24Hours
            </p>
            <p className="text-[0.7rem] tracking-tight  ">
              Emails: customer@gmail.com
            </p>
            <p className="text-[0.7rem] tracking-tight  ">
              Emails: support@exclusive.com
            </p>
          </div>
        </div>
      </div>
      <div className=" w-full sm:w-[65%] h-auto shadow-lg  px-8 py-5">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
