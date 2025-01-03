// eslint-disable-next-line
import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import Image from "next/image";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <section className="testimonials mx-[7%] py-20">
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
          <li>
            <div className="slide">
              <div className="user-info">
                <Image src={user_2} alt="" />
                <div>
                  <h3>مراد حافظ</h3>
                  <span>رئيس اتحاد طلاب جامعة بورسعيد</span>
                </div>
              </div>
              {/* <p>
                آراء طلابنا تعكس تجربتهم الفريدة مع أنشطتنا وفعالياتنا، حيث نسعى
                دائمًا لتقديم بيئة تعليمية واجتماعية متكاملة. يشاركنا الطلاب
                أفكارهم وانطباعاتهم بصدق، مما يساعدنا على تحسين خدماتنا وتلبية
                احتياجاتهم. نؤمن أن نجاحنا يقاس برضا طلابنا وإلهامهم لتحقيق
                طموحاتهم.
              </p> */}
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <Image src={user_1} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>MTIS, EGY</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at MTIS was one of the best
                decisions I have ever made. The supportive community,
                state-of-the-art facilities, and comitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <Image src={user_3} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>MTIS, EGY</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at MTIS was one of the best
                decisions I have ever made. The supportive community,
                state-of-the-art facilities, and comitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <Image src={user_4} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>MTIS, EGY</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at MTIS was one of the best
                decisions I have ever made. The supportive community,
                state-of-the-art facilities, and comitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
