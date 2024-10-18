import React from "react";
import "./ContactForm.css";
import Form from "../../Reusable/Form"


import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const ContactForm = () => {
  return (
    <>
      <Navbar />

      <div className="contact-form">
        {/* <div className="contact-form-header">
          <h2>
            Nouthaegis empowers you to stay ahead of cyber threats, enhancing
            your security posture through expert testing, consulting, and
            guidance.
          </h2>
          <p>
            Our team of elite ethical hackers drives innovation, surpassing
            industry standards. We probe, question, and collaborate to uncover
            hidden vulnerabilities
          </p>
        </div> */}
        <Form/>
      </div>

      <Footer />
    </>
  );
};

export default ContactForm;
