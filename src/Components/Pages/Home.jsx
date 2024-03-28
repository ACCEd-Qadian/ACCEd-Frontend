import React, { useState } from "react";
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
          {/* <img
            className="d-block "
            src={img1}
            alt="First slide"
            style={{ width: "30%" }}
          />
          <Carousel.Caption>
            <h4>Ahmadiyya Center for Computer Education (Qadian)</h4>
            <p>
              Fully Air Conditioned Lab. Free Internet Facility Advanced courses
              at nominal Fee.
            </p>
          </Carousel.Caption> */}
          <div class="row first-carousel">
            <div class="col-lg-6 col-md-12 col-12 col-xxl-6  item-position container top-heading">
              <div class="container get-center">
                <h1
                  class="mt-5 display-5"
                  style={{ color: "#ff4500", fontWeight: "bold" }}
                >
                  ACCEd Qadian
                </h1>
                <p
                  class="my-para"
                  style={{
                    color: "#0076FA",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  Ahmadiyya Center for Computer Education Qadian
                </p>
                <p class="my-para">Affiliated with Govt. of India.</p>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-12 col-xxl-6 text-start get-middle ">
              <div class="">
                <img
                  src={img1}
                  class=" w-100 main-image "
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
          {/* <img
            className="d-block "
            src={img2}
            alt="Second slide"
            style={{ width: "30%" }}
          />
          <Carousel.Caption>
            <h4>Get a Certificate</h4>
            <p>You will get a Certificate after completing a course.</p>
          </Carousel.Caption> */}
          <div class="row second-carousel">
            <div class="col-lg-6 col-md-12 col-12 col-xxl-6  item-position container top-heading">
              <div class="container get-center">
                <h1
                  class="mt-5 display-5"
                  style={{ color: "#ff4500", fontWeight: "bold" }}
                >
                  Get a Certificate
                </h1>
                <p
                  class="my-para"
                  style={{
                    color: "#0076FA",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  You will get a Certificate after completing a course.
                </p>
                <p class="my-para">Affiliated with Govt. of India.</p>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-12 col-xxl-6 text-start get-middle ">
              <div class="">
                <img src={img2} class=" w-100 main-image   " alt="..." />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          {/* <img
            className="d-block"
            src={img3}
            alt="Third slide"
            style={{ width: "30%" }}
          />
          <Carousel.Caption>
            <h4>Courses</h4>
            <p>Here are various courses you can opt according to your need.</p>
          </Carousel.Caption> */}
          <div class="row second-carousel">
            <div class="col-lg-6 col-md-12 col-12 col-xxl-6  item-position container top-heading">
              <div class="container get-center">
                <h1
                  class="mt-5 display-5"
                  style={{ color: "#ff4500", fontWeight: "bold" }}
                >
                  Courses
                </h1>
                <p
                  class="my-para"
                  style={{
                    color: "#0076FA",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  Here are various Advanced Courses you can opt at a very low
                  fees
                </p>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-12 col-xxl-6 text-start get-middle ">
              <div class="">
                <img src={img3} class=" w-100 main-image   " alt="..." />
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      {/*  */}

      <div class="carousel-item">
        <div class="row second-carousel ">
          <div class="col-lg-6 col-md-12 col-12 col-xxl-6  item-position container top-heading">
            <div class="container get-center">
              <h2
                class="mt-5 display-6"
                style={{ color: "#0076FA", fontFamily: "cursive" }}
              >
                <span class="display-4 a-main-font">F</span>ree{" "}
                <span class="display-4 a-main-font">H</span>ostel Facilities
              </h2>
              <p
                class="my-para"
                style={{
                  color: "#0076FA",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                for ahmadiyya Jamaat students
              </p>
              <p class="my-para">
                Great news for Jamaat Ahmadiyya students in India! The Jamaat
                will provide free hostels, meals, and monthly pocket money
                (Wajifa).
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-12 col-xxl-6 text-start get-middle ">
            <div>
              <img
                src={img1}
                class=" w-100 main-image hostel-image  "
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>

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

      <section class="my-5" id="the-team">
        <div class="text-center">
          <h1 class="main-heading">THE TEAM</h1>

          {/* <p class="container my-para team-para mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
            molestiae natus adipisci quasi, sit atque commodi? Molestiae numquam
            porro culpa, sequi beatae molestias Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quibusdam, officia.
          </p> */}
        </div>

        <div class=" row mt-5">
          <div class="card mx-auto" style={{ width: "18rem" }}>
            <div class="text-center mt-5">
              <div class="">
                <img src={teacherimg} class="team-profile" alt="" />
              </div>
            </div>

            <div class="text-center mt-3">
              <h5 class="card-title main-heading">Tabassum Begum</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Incharge Computer Center
              </h6>
            </div>

            <div class="card-body">
              <p class="card-text my-para">
              She has more than 8+ years of experience. Graduated in Bachelor of Computer Application. 
              </p>

              <div class="text-center mx-auto">
                <div class="container">
                  <a href="">
                    <i
                      class="fa-solid fa-phone mx-2 icon-color"
                      style={{ fontSize: "16px" }}
                    ></i>
                  </a>
                  <a href="">
                    <i
                      class="fa-solid fa-envelope icon-color"
                      style={{ fontSize: "16px" }}
                    ></i>
                  </a>
                  <a href="">
                    <i
                      class="fa-brands fa-whatsapp mx-2 icon-color"
                      style={{ fontSize: "16px" }}
                    ></i>
                  </a>
                  <a href="">
                    <i
                      class="fa-brands fa-facebook mx-2 icon-color"
                      style={{ fontSize: "16px" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
