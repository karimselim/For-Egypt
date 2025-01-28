import Link from "next/link";
import React from "react";
import Button from "../UI/Button";

const Contact = () => {
  return (
    <main className="bg-slate-100 h-screen w-screen overflow-hidden">
      <div className="w-screen px-[7%] flex gap-32 h-[calc(67%-88px)] max-lg:h-[calc(67%-100px)] max-md:max-md:h-[calc(67%-80px)] bg-main rounded-b-xl shadow-xl top-[88px] max-md:top-[80px] max-lg:top-[100px] relative">
        <aside className="w-[calc(50%-50px)] text-white">
          <h2 className="text-xl pt-16">الشكاوى و المقترحات</h2>
          <div className="flex flex-row-reverse justify-between items-center my-5 max-md:block">
            <p>الإيميل</p>
            <Link
              href="mailto:studentsforegypt7@gmail.com"
              className="underline max-md:text-right max-md:w-full max-md:block"
            >
              studentsforegypt7@gmail.com
            </Link>
          </div>
          <div className="flex flex-row-reverse max-md:block justify-between items-center my-5">
            <p>رقم الهاتف</p>
            <p>01091781125</p>
          </div>
          <div className="flex flex-row-reverse max-md:block justify-between items-center my-5">
            <p>العنوان</p>
            <p>بورسعيد, بورفؤاد</p>
          </div>
        </aside>
        <form className="flex flex-col w-1/2 mt-16 bg-white items-end py-8 px-12 h-fit rounded-md">
          <label className="block w-full text-right">الإسم</label>
          <input
            placeholder="أدخل إسمك الكامل"
            className="block w-full border p-3 outline-none mb-2 mt-1 text-right rounded-md"
          />
          <label className="block w-full text-right">البريد الإلكتروني</label>
          <input
            placeholder="أدخل بريدك الإلكتروني"
            className="block w-full border p-3 outline-none mb-2 mt-1 text-right rounded-md"
          />
          <label className="block w-full text-right">
            ( whatsApp يدعم ) رقم الهاتف
          </label>
          <input
            placeholder="أدخل رقم الهاتف"
            className="block w-full border p-3 outline-none mb-2 mt-1 text-right rounded-md"
          />
          <label className="block w-full text-right">الرسالة</label>
          <textarea
            className="border w-full h-28 outline-none p-3 text-right mt-2"
            placeholder="... شاركنا ملاحظاتك او إقتراحاتك "
          />
          <Button className="p-4 mt-4">إرسال</Button>
        </form>
      </div>
      <iframe
        src="https://maps.google.com/maps?q=University+Administration,+Port+Fouad+City,+Port+Said+Governorate+42526,+Egypt&hl=es;z=14&output=embed"
        width="45%"
        height="200px"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="pl-[7%] absolute bottom-4 rounded-xl"
        // aria-label="port said university"
      ></iframe>
    </main>
  );
};

export default Contact;
