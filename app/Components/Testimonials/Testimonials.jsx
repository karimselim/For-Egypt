// eslint-disable-next-line
import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/dr.shreif.jpg";
import user_2 from "../../assets/dr.ahmed.jpg";
import user_3 from "../../assets/morad.jpg";
import user_4 from "../../assets/hossam.jpg";
import user_5 from "../../assets/beshoy.jpg";
import user_6 from "../../assets/yassin.jpg";
import user_7 from "../../assets/youssef.jpg";
import user_8 from "../../assets/omar.jpg";
import user_9 from "../../assets/sameh.jpg";
import user_10 from "../../assets/khaled.jpg";
import user_11 from "../../assets/mora.jpg";
import user_12 from "../../assets/elmasry.jpg";
import user_13 from "../../assets/ahmed osama.jpg";
import user_14 from "../../assets/tahoun.jpg";
import user_15 from "../../assets/mohmed.jpg";
import user_16 from "../../assets/about.png";
import user_17 from "../../assets/about.png";
import user_18 from "../../assets/roaa.jpg";
import user_19 from "../../assets/marim.jpg";
import user_20 from "../../assets/josina.jpg";
import Image from "next/image";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -90) {
      tx -= 10;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 10;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <section className="testimonials mx-[3.5%] py-20 ">
      <Image
        src={next_icon}
        alt=""
        className="next-btn"
        onClick={slideForward}
      />
      <Image
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <div className="pair">
            <li>
              <div className="slide">
                <div className="user-info">
                  <Image src={user_1} alt="" />
                  <div className="text-center">
                    <h3 className="mb-2"> معالي الوزير/ أ.د شريف صالح</h3>
                    <span>رئيس جامعة بورسعيد</span>

                    {/* <span> و منسق الأسرة بالجامعة </span> */}
                  </div>
                </div>
                <p className="mt-[7px] text-center">
                  " في جامعة بورسعيد ، نؤمن بأن دور الطالب يمتد إلى ما هو أبعد
                  من حدود الدراسة الأكاديمية. فالانتماء للوطن وخدمة المجتمع
                  يمثلان ركيزة أساسية في بناء الشخصية القيادية والمساهمة الفاعلة
                  في نهضة الأمة، نسعى لصقل شخصيات طلابنا ليكونوا قدوة في
                  الإبداع، القيادة، والعطاء ، مساهمين في تحقيق مستقبل أفضل."
                </p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <Image src={user_2} alt="" />
                  <div className="text-center">
                    <h3 className="mb-2"> أ.م.د/أحمد بيومي</h3>
                    <span>المشرف العام على الأدارة العامة لرعاية الطلاب</span>

                    <span> و منسق الأسرة بالجامعة </span>
                  </div>
                </div>
                <p className="mt-[7px] text-center">
                  " طلاب أسرة 'من أجل مصر' جامعة بورسعيد، أنتم مثال حي للطالب
                  الجامعي الطموح والمبادر في خدمة مجتمعه. تفخر الجامعة بما
                  تقدمونه من أفكار مبتكرة ومبادرات مميزة تعكس روح الانتماء
                  والمسؤولية. استمروا في رحلتكم نحو التميز والإبداع لتحقيق
                  مستقبل أكثر إشراقًا. "
                </p>
              </div>
            </li>
          </div>

          <div className="pair">
            <li>
              <div className="slide">
                <div className="user-info">
                  <Image src={user_3} alt="" />
                  <div className="text-center">
                    <h3 className="bold mb-1">مراد حافظ</h3>
                    <span>رئيس إتحاد طلاب جامعة بورسعيد</span>

                    <span> والمنسق الطلابي للأسرة بالجامعة </span>
                  </div>
                </div>
                <p className="mt-[5px] text-center">
                  " في جامعة بورسعيد، نحن لا نمثل فقط طلابًا يسعون للمعرفة، بل
                  نمثل جيلاً يحمل طموحات كبيرة ورؤية واضحة لمستقبل أفضل، هُنا
                  اتحاد الطلاب وأسرة طلاب من أجل مصر يمثلان طاقة لا تنضب من
                  الإبداع والالتزام، ويقودان مسيرة التميز في الجامعة ."
                </p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <Image src={user_4} alt="" />
                  <div className="text-center">
                    <h3 className="bold mb-2">يوسف حسام</h3>
                    <span> نائب رئيس إتحاد طلاب جامعة بورسعيد </span>

                    <span> ونائب منسق الأسرة بالجامعة </span>
                  </div>
                </div>
                <p className="mt-[7px] text-center">
                  " أسرة طلاب من أجل مصر هي المكان الذي يجتمع فيه الطموح
                  والإبداع، حيث يسعى كل عضو لتحقيق الأفضل والمساهمة في بناء
                  مجتمع طلابي متميز. نحن نؤمن بأن العمل الجماعي هو المفتاح
                  للنجاح، وأن لكل طالب دورًا كبيرًا في تحقيق أهدافنا المشتركة. "
                </p>
              </div>
            </li>
          </div>

          <div className="pair">
            <li>
              <div className="slide">
                <div className="user-info">
                  <Image src={user_5} alt="" />
                  <div className="text-center">
                    <h3 className="mb-3">بيشوي عزمي</h3>
                    <span>نائب منسق الأسرة بالجامعة</span>
                  </div>
                </div>
                <p className="mt-[5px] text-center">
                  "في أسرة طلاب من أجل مصر، نسعى لتحقيق الأفضل. دورنا قيادة
                  وتوجيه، وهدفنا بناء بيئة طلابية تعاونية تمكن كل فرد من إظهار
                  قدراته. نحن جيل يضع التميز نصب عينيه ويعمل لتحقيق رؤى جديدة."
                </p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <Image src={user_6} alt="" />
                  <div className="text-center">
                    <h3 className="mb-2">ياسين عباس</h3>
                    <span>رئيس إتحاد كلية التمريض</span>
                    <span>ونائب منسق الأسرة بالجامعة</span>
                  </div>
                </div>
                <p className="mt-[7px] text-center">
                  "نؤمن بالعمل الجماعي كأساس لبناء المستقبل. دورنا تحفيز الإبداع
                  والمساهمة الفعالة في صنع التغيير. هدفنا خلق بيئة طلابية مليئة
                  بالفرص تساعد كل طالب على النمو والتميز."
                </p>
              </div>
            </li>
          </div>

          <div className="pair">
            <li>
              <div className="slide">
                <div className="user-info">
                  <Image src={user_7} alt="" />
                  <div className="text-center">
                    <h3 className="bold mb-2">يوسف جاب الله</h3>
                    <span>منسق الأسرة بكلية الطب</span>
                  </div>
                </div>
                <p className="mt-[7px] text-center">
                  "في كلية الطب، نهدف لتكوين جيل من الأطباء المبدعين. التميز
                  الأكاديمي أساس نجاحنا، والعمل الجماعي يجعلنا قادرين على تحقيق
                  أهدافنا. نعمل معًا لخدمة المرضى وتحقيق التغيير الإيجابي."
                </p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <Image src={user_9} alt="" />
                  <div className="text-center">
                    <h3 className="bold mb-2">محمد سامح</h3>
                    <span>منسق الأسرة بكلية الآداب</span>
                  </div>
                </div>
                <p className="mt-[7px] text-center">
                  "في كلية الآداب، نؤمن بأن التعليم رحلة نحو تطوير الفكر
                  والإبداع. نسعى لتمكين الطلاب من اكتساب المهارات التي تؤهلهم
                  للمساهمة في المجتمع. العمل الجماعي أساس نجاحنا."
                </p>
              </div>
            </li>
          </div>

          <div className="pair">
            <li>
              <div className="slide">
                <div className="user-info">
                  <Image src={user_10} alt="" />
                  <div className="text-center">
                    <h3 className="bold mb-2">خالد محمد</h3>
                    <span>منسق الأسرة بكلية التربية</span>
                  </div>
                </div>
                <p className="mt-[7px] text-center">
                  "في كلية التربية، نعمل على بناء جيل من المعلمين القادرين على
                  إحداث تأثير إيجابي. هدفنا تطوير مهارات الطلاب وتمكينهم من
                  تحقيق التميز في التعليم. نلتزم بروح التعاون لتحقيق أهدافنا."
                </p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <Image src={user_11} alt="" />
                  <div className="text-center">
                    <h3 className="bold mb-2">عمر محمد</h3>
                    <span>منسق الأسرة بكلية الحقوق</span>
                  </div>
                </div>
                <p className="mt-[7px] text-center">
                  "في كلية الحقوق، نسعى لتحقيق العدالة والمساواة. نؤمن بالالتزام
                  بالنزاهة والمهنية، والعمل الجماعي لتعزيز فهمنا للقانون. هدفنا
                  التأثير الإيجابي في المجتمع."
                </p>
              </div>
            </li>
          </div>

          <div className="pair">
            <li>
              <div className="slide">
                <div className="user-info">
                  <Image src={user_8} alt="" />
                  <div className="text-center">
                    <h3 className="bold mb-2">عمر علاء</h3>
                    <span>منسق الأسرة بكلية العلاج الطبيعي</span>
                  </div>
                </div>
                <p className="mt-[7px] text-center">
                  "في كلية العلاج الطبيعي، نؤمن بأن العلاج الطبيعي فن يعكس
                  التزامنا بتحقيق الشفاء. نعد طلابنا لتقديم رعاية صحية متميزة.
                  العمل الجماعي أساس نجاحنا."
                </p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <Image src={user_13} alt="" />
                  <div className="text-center">
                    <h3 className="bold mb-2">أحمد أسامة</h3>
                    <span>منسق الأسرة بكلية العلوم</span>
                  </div>
                </div>
                <p className="mt-[7px] text-center">
                  "في كلية العلوم، نعمل على تطوير مهاراتنا العلمية والبحثية.
                  نؤمن بالتعاون بين الطلاب لتحقيق النجاح. هدفنا بناء مجتمع علمي
                  قوي."
                </p>
              </div>
            </li>
          </div>

          <div className="pair">
            <li>
              <div className="slide">
                <div className="user-info">
                  <Image src={user_12} alt="" />
                  <div className="text-center">
                    <h3 className="bold mb-2">محمد المصري</h3>
                    <span>منسق الأسرة بكلية الصيدلة</span>
                  </div>
                </div>
                <p className="mt-[7px] text-center">
                  "في كلية الصيدلة، نعتز بدورنا في تطوير القطاع الصحي. نعمل على
                  تمكين الطلاب من الابتكار في مجالات الأدوية. العمل الجماعي أساس
                  نجاحنا."
                </p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <Image src={user_14} alt="" />
                  <div className="text-center">
                    <h3 className="bold mb-2">محمود طاحون</h3>
                    <span>منسق الأسرة بكلية التجارة</span>
                  </div>
                </div>
                <p className="mt-[7px] text-center">
                  "في كلية التجارة، نسعى لتمكين الطلاب من التميز في الاقتصاد
                  والإدارة. نؤمن بالتفكير النقدي والعمل الجماعي لتحقيق التميز
                  الأكاديمي."
                </p>
              </div>
            </li>
          </div>

          <div className="pair">
            <li>
              <div className="slide">
                <div className="user-info">
                  <Image src={user_15} alt="" />
                  <div className="text-center">
                    <h3 className="bold mb-2">محمد أحمد</h3>
                    <span>
                      منسق الأسرة بكلية تكنولوجيا الإدارة ونظم المعلومات
                    </span>
                  </div>
                </div>
                <p className="mt-[7px] text-center">
                  "في كلية تكنولوجيا الإدارة، نسعى لمواكبة التطورات التكنولوجية.
                  نؤمن بالابتكار والعمل الجماعي لتحقيق النجاح. هدفنا بناء جيل
                  قادر على قيادة التغيير."
                </p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <Image src={user_16} alt="" />
                  <div className="text-center">
                    <h3 className="bold mb-2">مورووو</h3>
                    <span>منسق الأسرة بكلية الهندسة</span>
                  </div>
                </div>
                <p className="mt-[7px] text-center">
                  "في كلية الهندسة، نعد طلابنا لتحديات المستقبل. نؤمن بالتعاون
                  والعمل الجماعي لتحقيق الابتكار. هدفنا بناء عالم أفضل من خلال
                  الحلول الهندسية."
                </p>
              </div>
            </li>
          </div>

          <div className="pair">
            <li>
              <div className="slide">
                <div className="user-info">
                  <Image src={user_17} alt="" />
                  <div className="text-center">
                    <h3 className="bold mb-2">مورووو</h3>
                    <span>منسق الأسرة بكلية التمريض</span>
                  </div>
                </div>
                <p className="mt-[7px] text-center">
                  "في كلية التمريض، نعمل على تزويد الطلاب بالمهارات اللازمة
                  لتقديم الرعاية الصحية. نؤمن بالعمل الجماعي والالتزام بمبادئ
                  التمريض. هدفنا تحسين صحة المجتمع."
                </p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <Image src={user_18} alt="" />
                  <div className="text-center">
                    <h3 className="bold mb-2">رؤى حسين</h3>
                    <span>منسق الأسرة بكلية التربية النوعية</span>
                  </div>
                </div>
                <p className="mt-[7px] text-center">
                  "في كلية التربية النوعية، نسعى لتخريج جيل من المعلمين
                  والفنانين المبدعين. نؤمن بالتعاون والعمل الجماعي لتحقيق النجاح
                  الأكاديمي. هدفنا بناء مجتمع ثقافي مبدع."
                </p>
              </div>
            </li>
          </div>

          <div className="pair">
            <li>
              <div className="slide">
                <div className="user-info">
                  <Image src={user_19} alt="" />
                  <div className="text-center">
                    <h3 className="bold mb-2">مريم كراوية</h3>
                    <span>منسق الأسرة بكلية التربية الرياضية</span>
                  </div>
                </div>
                <p className="mt-[7px] text-center">
                  "في كلية التربية الرياضية، نعمل على بناء جيل من القادة
                  الرياضيين. نؤمن بالعمل الجماعي لتحقيق التميز الرياضي. هدفنا
                  تعزيز الصحة واللياقة في المجتمع."
                </p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <Image src={user_20} alt="" />
                  <div className="text-center">
                    <h3 className="bold mb-2">جوسيانا عيد</h3>
                    <span>منسق الأسرة بكلية التربية للطفولة المبكرة</span>
                  </div>
                </div>
                <p className="mt-[7px] text-center">
                  "في كلية التربية للطفولة المبكرة، نعمل على إعداد معلمين قادرين
                  على إحداث تغيير إيجابي. نؤمن بالتفاني في العمل لبناء شخصية
                  المستقبل. هدفنا توفير بيئة تعليمية تنمي الإبداع."
                </p>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
