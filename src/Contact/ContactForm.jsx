import React from "react";

const ContactForm = () => {
  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleForm} className="w-full space-y-8 relative">
      <div className="flex flex-col sm:flex-row  sm:flex-wrap lg:flex-nowrap gap-5 ">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className=" sm:w-1/3 outline-none border border-black text-[0.7rem] px-3 py-1"
        />
        <input
          type="gmail"
          name="gmail"
          placeholder="Gmail"
          className="sm:w-1/3 border border-black outline-none text-[0.7rem] px-3 py-1"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          className="sm:w-1/3 border border-black outline-none text-[0.7rem] px-3 py-1"
        />
      </div>
      <div className="w-full h-40 ">
        <textarea
          type="text"
          placeholder="Your massage"
          name="massage"
          className="w-full h-full border border-black outline-none px-4 py-2"
        />
      </div>
      <div className="w-full flex justify-end">
        <button className="i px-5 py-1 bg-red-500 text-white w-fit">
          Sent Massage
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
