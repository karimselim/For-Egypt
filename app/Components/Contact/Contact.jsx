// eslint-disable-next-line
import { useState, useEffect, useRef } from "react";
import white_arrow from "../../assets/white-arrow.png";
import Image from "next/image";
import logo from "../../assets/logo.png";

const Contact = () => {
  const [result, setResult] = useState("");
  const [imgSrc, setImgSrc] = useState(logo);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

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
    <section className="contact flex flex-wrap gap-12 items-center justify-between px-[7%] py-20 max-md:block">
      {/* <aside className="contact-col basis-[48%] text-[#676767] max-md:p-5">
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
      </aside> */}
      <aside className="w-full max-md:p-5 text-right">
        <form onSubmit={onSubmit}>
          <div className="img-input relative flex justify-center items-center">
            <input
              type="file"
              accept="image/*"
              className="w-32 max-md:w-24 absolute h-full z-20 opacity-0 rounded-full"
              onChange={handleFileChange}
            />
            <Image
              src={imgSrc}
              alt="Profile"
              className="m-auto w-32 max-md:w-24 rounded-full"
              width={128} // Add width
              height={128} // Add height
            />
          </div>
          <label htmlFor="name">الاسم الكامل</label>
          <input
            type="text"
            name="name"
            placeholder="أدخل اسمك الكامل"
            required
            className="block w-full bg-[#ebecfe] p-4 outline-none mb-4 mt-1 text-right"
          />
          <label htmlFor="phone">رقم الهاتف</label>
          <input
            type="tel"
            name="phone"
            placeholder="أدخل رقم هاتفك"
            required
            className="block w-full bg-[#ebecfe] p-4 outline-none mb-4 mt-1 text-right"
          />
          <label htmlFor="id">الرقم القومي</label>
          <input
            type="text"
            name="id"
            placeholder="أدخل الرقم القومي الخاص بك"
            required
            className="block w-full bg-[#ebecfe] p-4 outline-none mb-4 mt-1 text-right"
          />
          <button
            type="submit"
            className="btn dark-btn flex items-center gap-2 bg-[#000f38] text-white py-2 px-4 rounded hover:bg-opacity-80"
          >
            Submit now <Image src={white_arrow} alt="" />
          </button>
        </form>
        <span className="block my-5">{result}</span>
      </aside>
    </section>
  );
};

export default Contact;
