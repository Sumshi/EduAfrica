// import React from "react";
import "./About_us.css";
import Mission from "../illustrations/illustration-1.svg";
import Vision from "../illustrations/illustration-3.svg";
import Eric from "../../../assets/team/eric.jpg";
import Brian from "../../../assets/team/brian.jpg";
import Thomas from "../../../assets/team/thomas.jpg";
import Usaamah from "../../../assets/team/usaamah.jpg";
import Footer from "../Home/footer/footer";
import Nav from '../Nav/Nav';

const About_us = () => {
  return (
    <>
      <Nav />
      <div className="about-us">
        <span className="about">About Us</span>
        <div className="missionVisionStat">
          <section className="statement one">
            <div className="mission-statement">
              <h2>Misson Statement</h2>
              <div>
                <p className="text">
                  Our aim is to provide African students with the means to
                  access educational opportunities through scholarships. Across
                  Africa, numerous talented students encounter a widespread and
                  formidable barrier: insufficient financial resources to pursue
                  their educational aspirations. This economic disparity
                  prevents them from realizing their complete potential,
                  exacerbates the divide between privileged and disadvantaged
                  students, and perpetuates an unending cycle of poverty in
                  society.
                </p>
              </div>
            </div>
            <div className="illustration">
              <img src={Mission} alt="mission-statement-illustration" />
            </div>
          </section>
          <section className="statement two">
            <div className="vision-statement">
              <h2>Vision Statement</h2>
              <div>
                <p className="text">
                  We envision a future where every African students can pursue
                  their dreams through quality education and scholarships.
                  EduAidAfrica is not just a Web Application; It&apos;s catalyst
                  for change. Our platform empowers African students at all
                  level to break free from financial constraints and embrace
                  educational opportunities by bridging the gap between ambition
                  and resources, we&apos;re unlocking a brighter future for
                  Africa, one scholarship at a time.
                </p>
              </div>
            </div>
            <div className="illustration">
              <img src={Vision} alt="Vision-statement-illustration" />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About_us;
