import React from "react";
import "./Certificate.css";

const Certificate = ({ searchResult }) => {

  // Utility function to format date
 const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

  return (
    <div className="container pm-certificate-container">
      <div className="outer-border"></div>
      <div className="inner-border"></div>

      <div className="pm-certificate-border col-xs-12">
        <div className="pm-certificate-header">
          <div className="pm-certificate-title">
            <h2>ACCEd</h2>
          </div>
          <div className="subheading-certificate">
            <h4 className="subheading-title">
              AHAMADIYYA CENTER FOR COMPUTER EDUCATION (ACCEd)
            </h4>
            <h5>(Established 2001)</h5>
          </div>
        </div>

        <div className="row pm-certificate-body">
          <div className="certificate-content">
            <h6 className="">
              This is certify that Shri/Smt./Kumari{" "}
              <b>
                <u>{searchResult.studentName}</u>
              </b>{" "}
              Son/Daughter/Wife of Shri{" "}
              <b>
                <u>{searchResult.fatherName}</u>
              </b>{" "}
              has been examined in the trade of computer and having duly
              qualified, has been awarded this Diploma/Certificate in{" "}
              <b>
                <u>{searchResult.course}</u>
              </b>{" "}
              as an acknowledgment of the proficiency acquired in the course of
              study. the main topic(s) covered by him/her are{" "}
              <b>
                <u>{searchResult.course}</u>,
              </b> He/She joined the Institute from <b>{formatDate(searchResult.startdate)}</b> to <b>{formatDate(searchResult.enddate)}</b>.
            </h6>
          </div>

          <div className="footer-1">
            <h6>Grade - <span>{searchResult.grade}</span></h6>
            <h6>Certificate Issue Date - <span>{formatDate(searchResult.date)}</span></h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
