import React from "react";

const Enquiry = () => {
  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Enquiry Now
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex flex-col gap-2 text-center">
            <h3 className="font-bold text-lg">Send Enquiry!</h3>
            <input
              type="Name"
              placeholder="Name"
              className="py-4 px-4 bg-white text-black rounded-xl border-none outline-none cursor-pointer"
            />
            <input
              type="Number"
              placeholder="Mobile"
              className="py-4 px-4 bg-white text-black rounded-xl border-none outline-none cursor-pointer"
            />
            <input
              type="Email"
              placeholder="Email"
              className="py-4 px-4 bg-white text-black rounded-xl border-none outline-none cursor-pointer"
            />
            <textarea
              name=""
              id=""
              placeholder="Message"
              cols="30"
              rows="5"
              className="py-4 px-4 bg-white text-black rounded-xl border-none outline-none cursor-pointer"
            ></textarea>
            <button className="btn btn-neutral">Submit</button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Enquiry;
