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
import Button from "@/app/UI/Button";

const firebaseConfig = {
  apiKey:
    process.env.REACT_APP_FIREBASE_API_KEY ||
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain:
    process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ||
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL:
    process.env.REACT_APP_FIREBASE_DATABASE_URL ||
    process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId:
    process.env.REACT_APP_FIREBASE_PROJECT_ID ||
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket:
    process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ||
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:
    process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID ||
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId:
    process.env.REACT_APP_FIREBASE_APP_ID ||
    process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId:
    process.env.REACT_APP_FIREBASE_MEASUREMENT_ID ||
    process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const JoinUs = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    id: "",
    college: "",
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

    if (!formValues.college.trim()) {
      newErrors.college = "اسم الكلية مطلوب";
      isValid = false;
    }

    if (!imageBase64) {
      newErrors.image = "الصورة مطلوبة";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > MAX_IMAGE_SIZE) {
      setErrors((prev) => ({
        ...prev,
        image: "حجم الصورة يجب ألا يزيد عن 5 ميجا بايت",
      }));
      setImageBase64(null);
      return;
    } else {
      setErrors((prev) => ({
        ...prev,
        image: "",
      }));
    }

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
      const querySnapshot = await getDocs(
        query(collection(db, "contacts"), where("id", "==", formValues.id))
      );

      if (!querySnapshot.empty) {
        alert("يوجد مستخدم بالفعل بهذا الرقم القومي.");
        return;
      }

      const docRef = await addDoc(collection(db, "contacts"), {
        name: formValues.name,
        phone: formValues.phone,
        id: formValues.id,
        college: formValues.college,
        image: imageBase64,
        createdAt: new Date(),
      });

      alert("تم إرسال البيانات بنجاح! Document ID: " + docRef.id);

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
              // required
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
          {errors.image && (
            <p className="text-red-500 text-center -mt-4">{errors.image}</p>
          )}

          <label className="block mt-3" htmlFor="name">
            الاسم الكامل
          </label>
          <input
            type="text"
            name="name"
            placeholder="أدخل اسمك الكامل"
            value={formValues.name}
            onChange={handleChange}
            className="block w-full bg-[#ebecfe] p-4 outline-none mb-3 mt-1 text-right rounded-md"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}

          <label className="block mt-3" htmlFor="phone">
            ( WhatsApp يدعم) رقم الهاتف{" "}
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="أدخل رقم هاتفك"
            value={formValues.phone}
            onChange={handleChange}
            className="block w-full bg-[#ebecfe] p-4 outline-none mb-3 mt-1 text-right rounded-md"
          />
          {errors.phone && <p className="text-red-500">{errors.phone}</p>}

          <label className="block mt-3" htmlFor="id">
            الرقم القومي
          </label>
          <input
            type="text"
            name="id"
            placeholder="أدخل الرقم القومي الخاص بك"
            value={formValues.id}
            onChange={handleChange}
            className="block w-full bg-[#ebecfe] p-4 outline-none mb-1 mt-1 text-right rounded-md"
          />
          {errors.id && <p className="text-red-500">{errors.id}</p>}

          <label className="block mt-3" htmlFor="college">
            اسم الكلية
          </label>
          <input
            type="text"
            name="college"
            placeholder="أدخل اسم الكلية"
            value={formValues.college}
            onChange={handleChange}
            className="block w-full bg-[#ebecfe] p-4 outline-none mb-3 mt-1 text-right rounded-md"
          />
          {errors.college && <p className="text-red-500">{errors.college}</p>}

          <Button
            type="submit"
            className="px-6 py-3 !bg-main before:!bg-main mt-4 !text-white"
          >
            سجل الآن
          </Button>
        </form>
      </aside>
    </section>
  );
};

export default JoinUs;
