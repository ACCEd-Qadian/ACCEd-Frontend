import React, { useState } from "react";
import {Link} from "react-router-dom"
import Carousel from "react-bootstrap/Carousel";
import img1 from "./images/lab2.jpg";
import img2 from "./images/certificate.jpg";
import img3 from "./images/courses1.jpg";
import img4 from "./images/education.jpg";
import img5 from "./images/acced2.jpg";
import teacherimg from "./images/teacher.jpg";

const Home = () => {
  const [courseName, setCourseName] = useState([
    "Computer Basic",
    "Accounting in Tally",
    "Corel Draw",
    "Photoshop",
    "Audio Video Editing",
    "Punjabi Typing",
    "Inpage Urdu",
    "Dekstop Publishing",
    "Computer Hardware",
    "Visual Basic Programming",
    "HTML CSS JavaScript",
    "C Programming",
    "C++ Programming",
    "Python Programming",
    "Oracle(SQL/PLSQL)",
    "Certificate in Computer Application (CCA)",
    "Diploma in Computer Application (DCA)",
    "Diploma in Computer Hardware & Networking",
    "Diploma in Finance Accounting Tally & Busy (DFA)",
    "MS OFFICE - WORD, EXCEL, POWERPOINT, ACCESS, ETC.",
  ]);
  return (
    <div>
      <Carousel className="carousel-box" data-bs-theme="dark">
        <Carousel.Item>
          <div className="row first-carousel">
            <div className="col-lg-6 col-md-12 col-12 col-xxl-6  item-position container top-heading">
              <div className="container get-center">
                <h1
                  className="mt-5 display-5"
                  style={{ color: "#ff4500", fontWeight: "bold" }}
                >
                  ACCEd Qadian
                </h1>
                <p
                  className="my-para"
                  style={{
                    color: "#0076FA",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  Ahmadiyya Center for Computer Education
                </p>
                <p className="my-para">ISO Certified </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12 col-xxl-6 text-start get-middle ">
              <div className="">
                <img
                  src={img1}
                  className=" w-100 main-image "
                  style={{
                    borderRadius: "8px",
                    filter: "drop-shadow(2px 4px 6px black)",
                  }}
                  alt="..."
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row second-carousel">
            <div className="col-lg-6 col-md-12 col-12 col-xxl-6  item-position container top-heading">
              <div className="container get-center">
                <h1
                  className="mt-5 display-5"
                  style={{ color: "#ff4500", fontWeight: "bold" }}
                >
                  Get a Certificate
                </h1>
                <p
                  className="my-para"
                  style={{
                    color: "#0076FA",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  Get a Certificate after completing a course.
                </p>
                <p className="my-para">ISO Certified </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12 col-xxl-6 text-start get-middle ">
              <div className="">
                <img src={img2} className=" w-100 main-image   " alt="..." />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row second-carousel">
            <div className="col-lg-6 col-md-12 col-12 col-xxl-6  item-position container top-heading">
              <div className="container get-center">
                <h1
                  className="mt-5 display-5"
                  style={{ color: "#ff4500", fontWeight: "bold" }}
                >
                  Courses
                </h1>
                <p
                  className="my-para"
                  style={{
                    color: "#0076FA",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  Advanced Courses at a very low fees
                </p>
                <p className="my-para">Basics to Advanced Courses</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12 col-xxl-6 text-start get-middle ">
              <div className="">
                <img src={img3} className=" w-100 main-image   " alt="..." />
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      {/*  */}

      

      {/*  */}

      <section className="my-5 mt-5" id="courses">
        <div className="text-center">
          <h2 className="main-heading">Our Courses</h2>
        </div>

        <div className="container my-5 ">
          <div
            className="row text-center "
            style={{ display: "flex", justifyContent: "center" }}
          >
            {courseName.map((item, key) => {
              return (
                <div className="course-box" key={key}>
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="my-5 mt-5" id="">
        <div className="text-center">
          <h2 className="main-heading">Our Features</h2>
        </div>

        <div className="container my-5 features-container">
          <ul>
            <li>Spacious Building</li>
            <li>Fully Air Conditioned Lab</li>
            <li>Advanced Computer system for every Student</li>
            <li>Free Internet Facility</li>
          </ul>
          <ul>
            <li>Advanced Courses at Very low Fees</li>
            <li>Get a Certificate</li>
            <li>Friendly Enviroment</li>
            <li>Library for Computer Books</li>
          </ul>
        </div>
      </section>

      <section className="my-5 mt-5" id="">
        <div className="text-center">
          <h2 className="main-heading">Our Objectives</h2>
        </div>

        <div className="container my-5 objective-container">
          <div className="img-box2">
            <img src={img4} alt="" />
          </div>
          <div>
            <h4>Educate the Youngster</h4>
            <p>
              The main objective was to educate our young generation with the
              knowledge of information and technology and to inspire to use
              their skills in the progress of day to day life. So the
              organisation dosen't have any commercial purpose at all but it
              intends to bring forward our youth to take part for the progress
              of the nation.
            </p>
          </div>
        </div>
      </section>

      <section className="my-5 mt-5" id="">
        <div className="text-center">
          <h2 className="main-heading">About Us</h2>
        </div>

        <div className="container my-5 aboutus-box ">
          <div>
            <h4>Ahmadiyya Center for Computer Education (ACCEd)</h4>
            <p>(ISO Affiliated Center and NSIC Approved Computer Courses)</p>
            <p>
              Ahmadiyya Center for Computer Education has been providing the
              best Computer Courses in Qadian. These courses are offered to
              students from 5th to postgraduate level to help youngsters find
              employment in India and Abroad. Call@01872222900, 9988790588,
              9878340588
            </p>
          </div>
          <div className="img-box2">
            <img src={img5} alt="" />
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
