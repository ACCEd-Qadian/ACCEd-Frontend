import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="contact-container">
        <div className="message-box">
          <iframe
            src="https://forms.gle/9Mz8TzkY5jLYrrH69"
            width={"400"}
            height={"1200"}
            // frameborder="0"
          ></iframe>
        </div>

        <div className="address-box">
          <h1>Contact us</h1>
          <div>
            <b>Address:</b> Aiwan-e-Khidmat Near Bahishti Maqbara Mohalla
            Ahmadiyya Qadian.
          </div>
          <div>
            <b>Distt.:</b> Gurdaspur
          </div>
          <div>
            <b>State:</b> Punjab
          </div>
          <div>
            <b>Country:</b> India
          </div>
          <div>
            <b>Pincode:</b> 143516
          </div>
          <div>
            <b>Phone:</b> 01872222900, 9988790588, 9878340588
          </div>
          <div>
            <b>Email:</b> tabassumbaby453@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
