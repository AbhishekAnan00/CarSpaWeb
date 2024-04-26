import React, { useState } from "react";
import toast from "react-hot-toast";

const Enquiry = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    setNumber("");
    toast.success('Enquiry submitted successfully!');
  };
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
            <form
              action="https://formspree.io/f/xvoebodl"
              method="post"
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center mx-auto"
            >
              <input
                type="text"
                name="Name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 my-2 rounded-xl border-none outline-none cursor-pointer"
              />
              <input
                type="number"
                placeholder="Mobile"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="w-full p-2 my-2 rounded-xl border-none outline-none cursor-pointer"
              />
              <input
                type="text"
                name="Email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 my-2 rounded-xl border-none outline-none cursor-pointer"
              />
              <textarea
                name="Messege"
                placeholder="Enter Your Messege"
                cols={35}
                rows={10}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 my-2 rounded-xl border-none outline-none cursor-pointer"
              ></textarea>
              <button className="btn btn-neutral" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Enquiry;
