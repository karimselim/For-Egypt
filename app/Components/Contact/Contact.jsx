// eslint-disable-next-line
import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import Image from "next/image";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3290335a-ecf9-4e04-92bb-83d21b512b82");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact flex flex-wrap items-center justify-between px-[7%] py-20 max-md:block">
      <div className="contact-col basis-[48%] text-[#676767] max-md:p-5">
        <h3 className="text-[#000f38] font-medium text-[25px] flex items-center mb-5">
          Send us a message{" "}
          <Image src={msg_icon} alt="" className="w-[35px] ml-3" />
        </h3>
        <p className="text-right leading-[1.3]">
          Feel free to reach out through contact form or find out our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional services to our
          university community
        </p>
        <ul className="mt-5">
          <li className="flex items-center my-5">
            <Image src={mail_icon} alt="" className="w-[25px] mr-3" />
            Contact@GreatStack.dev
          </li>
          <li className="flex items-center my-5">
            <Image src={phone_icon} alt="" className="w-[25px] mr-3" />
            +1 123-456-7890
          </li>
          <li className="flex items-center my-5">
            <Image src={location_icon} alt="" className="w-[25px] mr-3" />
            77 Massachusetts Ave, Cambridge
            <br />
            MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-col basis-[48%] max-md:p-5">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="block w-full bg-[#ebecfe] p-4 outline-none mb-4 mt-1"
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
            className="block w-full bg-[#ebecfe] p-4 outline-none mb-4 mt-1"
          />
          <label>Write your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
            className="block w-full bg-[#ebecfe] p-4 outline-none mb-4 mt-1 resize-none"
          ></textarea>
          <button
            type="submit"
            className="btn dark-btn flex items-center gap-2 bg-[#000f38] text-white py-2 px-4 rounded hover:bg-opacity-80"
          >
            Submit now <Image src={white_arrow} alt="" />
          </button>
        </form>
        <span className="block my-5">{result}</span>
      </div>
    </div>
  );
};

export default Contact;
