// eslint-disable-next-line
import { useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { IoPersonOutline } from "react-icons/io5";

const firebaseConfig = {
  apiKey: "AIzaSyBL1poYggtKKWy4BxaukdHsHoJr12JvNE8",
  authDomain: "another-react-30e34.firebaseapp.com",
  databaseURL: "https://another-react-30e34-default-rtdb.firebaseio.com",
  projectId: "another-react-30e34",
  storageBucket: "another-react-30e34.firebasestorage.app",
  messagingSenderId: "1077358815946",
  appId: "1:1077358815946:web:8ec26ddbeee09b52cfe233",
  measurementId: "G-PD2WGYJ57R",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    id: "",
  });
  const [imageBase64, setImageBase64] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let isValid = true;
    const newErrors = {};

    const arabicWordRegex = /^[\u0600-\u06FF]+$/;
    const words = formValues.name.trim().split(/\s+/);
    if (!formValues.name.trim()) {
      newErrors.name = "الاسم مطلوب";
      isValid = false;
    } else if (words.length < 4) {
      newErrors.name = "الاسم يجب أن يكون اسم رباعي";
      isValid = false;
    } else if (!words.every((word) => arabicWordRegex.test(word))) {
      newErrors.name = "الاسم يجب أن يحتوي على حروف عربية فقط";
      isValid = false;
    }

    const phoneRegex = /^01[0-9]{9}$/;
    if (!formValues.phone.trim()) {
      newErrors.phone = "رقم الهاتف مطلوب";
      isValid = false;
    } else if (!phoneRegex.test(formValues.phone)) {
      newErrors.phone = "رقم الهاتف غير صحيح";
      isValid = false;
    }

    const idRegex = /^[0-9]{14}$/;
    if (!formValues.id.trim()) {
      newErrors.id = "الرقم القومي مطلوب";
      isValid = false;
    } else if (!idRegex.test(formValues.id)) {
      newErrors.id = "الرقم القومي يجب أن يكون 14 رقمًا";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setImageBase64(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      // Query Firestore to check for an existing user with the same name
      const querySnapshot = await getDocs(
        query(collection(db, "contacts"), where("id", "==", formValues.id))
      );

      if (!querySnapshot.empty) {
        alert("يوجد مستخدم بالفعل بهذا الرقم القومي.");
        return;
      }

      // Add the new document if the name is unique
      const docRef = await addDoc(collection(db, "contacts"), {
        name: formValues.name,
        phone: formValues.phone,
        id: formValues.id,
        image: imageBase64,
        createdAt: new Date(),
      });

      alert("تم إرسال البيانات بنجاح! Document ID: " + docRef.id);

      // Clear form
      setFormValues({ name: "", phone: "", id: "" });
      setImageBase64(null);
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("حدث خطأ أثناء إرسال البيانات.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  return (
    <section className="contact flex flex-wrap gap-12 items-center justify-between px-[7%] py-20 max-md:block">
      <aside className="w-full max-md:p-5 text-right">
        <form onSubmit={onSubmit} className="text-right">
          <div className="img-input relative flex justify-center items-center mb-6">
            <input
              type="file"
              accept="image/*"
              className="w-32 h-32 max-md:w-24 max-md:h-24 absolute z-20 opacity-0 rounded-full cursor-pointer"
              onChange={handleFileChange}
            />
            {imageBase64 ? (
              <img
                src={imageBase64}
                alt="Uploaded"
                className="m-auto w-32 max-md:w-24 h-32 max-md:h-24 rounded-full"
              />
            ) : (
              <div className="placeholder-image w-32 h-32 max-md:w-24 max-md:h-24 bg-gray-200 rounded-full flex justify-center items-center relative">
                <span>
                  <IoPersonOutline className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl" />
                  <span className="z-[5] relative"> اختر صورة</span>
                </span>
              </div>
            )}
          </div>

          <label htmlFor="name">الاسم الكامل</label>
          <input
            type="text"
            name="name"
            placeholder="أدخل اسمك الكامل"
            value={formValues.name}
            onChange={handleChange}
            className="block w-full bg-[#ebecfe] p-4 outline-none mb-3 mt-1 text-right rounded-md"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}

          <label htmlFor="phone">( WhatsApp يدعم) رقم الهاتف </label>
          <input
            type="tel"
            name="phone"
            placeholder="أدخل رقم هاتفك"
            value={formValues.phone}
            onChange={handleChange}
            className="block w-full bg-[#ebecfe] p-4 outline-none mb-3 mt-1 text-right rounded-md"
          />
          {errors.phone && <p className="text-red-500">{errors.phone}</p>}

          <label htmlFor="id">الرقم القومي</label>
          <input
            type="text"
            name="id"
            placeholder="أدخل الرقم القومي الخاص بك"
            value={formValues.id}
            onChange={handleChange}
            className="block w-full bg-[#ebecfe] p-4 outline-none mb-1 mt-1 text-right rounded-md"
          />
          {errors.id && <p className="text-red-500">{errors.id}</p>}

          <button
            type="submit"
            className="btn dark-btn flex items-center gap-2 bg-[#000f38] text-white py-2 px-4 rounded hover:bg-opacity-80 mt-4"
          >
            سجل الآن
          </button>
        </form>
      </aside>
    </section>
  );
};

export default Contact;
