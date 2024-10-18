import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import "./Form.css";

const Form = () => {
   const [formData, setFormData] = useState({
     companyName: "",
     firstName: "",
     lastName: "",
     email: "",
     phoneNumber: "",
     numberOfEmployees: "",
     howDidYouHear: "",
     services: [],
     message: "",
   });

   const [errors, setErrors] = useState({});
   const [loading, setLoading] = useState(false); 
   const [success, setSuccess] = useState(""); 
   const [errorMessage, setErrorMessage] = useState(""); 

     const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData({ ...formData, [name]: value });
   };

   const handleCheckboxChange = (e) => {
     const { value } = e.target;
     setFormData((prevData) => {
       const services = prevData.services.includes(value)
         ? prevData.services.filter((service) => service !== value)
         : [...prevData.services, value];
       return { ...prevData, services };
     });
   };

  
   const validate = () => {
     const newErrors = {};
     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

     if (!formData.companyName)
       newErrors.companyName = "Company Name is required";
     if (!formData.firstName) newErrors.firstName = "First Name is required";
     if (!formData.lastName) newErrors.lastName = "Last Name is required";
     if (!formData.email) {
       newErrors.email = "Email is required";
     } else if (!emailPattern.test(formData.email)) {
       newErrors.email = "Email is not valid";
     }
     if (!formData.phoneNumber)
       newErrors.phoneNumber = "Phone Number is required";
     if (!formData.numberOfEmployees)
       newErrors.numberOfEmployees = "Number Of Employees is required";
     if (!formData.howDidYouHear)
       newErrors.howDidYouHear = "Please select how you heard about us";
     if (!formData.message) newErrors.message = "Message is required";

     setErrors(newErrors);
     return Object.keys(newErrors).length === 0;
   };

      const handleSubmit = (e) => {
     e.preventDefault();
     setErrorMessage(""); 
     setSuccess(""); 

     if (validate()) {
       setLoading(true); 
       emailjs
         .send(
           process.env.REACT_APP_EMAILJS_SERVICE_ID,
           process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
           formData,
           process.env.REACT_APP_EMAILJS_USER_ID
         )
         .then(
           (response) => {
             console.log("SUCCESS!", response.status, response.text);
             setSuccess("Your message has been successfully sent!"); 
             setLoading(false); 
             setFormData({
               companyName: "",
               firstName: "",
               lastName: "",
               email: "",
               phoneNumber: "",
               numberOfEmployees: "",
               howDidYouHear: "",
               services: [],
               message: "",
             }); 
           },
           (err) => {
             console.error("FAILED...", err);
             setErrorMessage("Something went wrong. Please try again later."); 
             setLoading(false); 
           }
         );
     }
   };

  return (
    <div className="contacts">
      <div className="contacts-left">
        <div className="contacts-desc">
          <h2>Get in Touch</h2>
          <p>
            We’d love to hear from you! Whether you have a question about our
            services, need assistance, or want to discuss a new project, our
            team is here to help. Reach out to us using the form on the right,
            and we’ll get back to you as soon as possible.
          </p>
        </div>
        <div className="contacts-email">
          <p>Email: hello@noughtaegis.com</p>
          <p>Phone: +234 567 654 34</p>
        </div>
        <div className="contacts-text">
          <p>
            At NoughtAegis, we’re committed to providing exceptional support and
            innovative IT solutions. Let’s connect and explore how we can help
            your business thrive.
          </p>
        </div>
      </div>
      <div className="contacts-right">
        <form onSubmit={handleSubmit} className="get-in-touch">
          <div className="contacts-input">
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              onChange={handleChange}
              value={formData.companyName}
            />
            {errors.companyName && (
              <span className="error">{errors.companyName}</span>
            )}

            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              value={formData.firstName}
            />
            {errors.firstName && (
              <span className="error">{errors.firstName}</span>
            )}

            <input
              type="text"
              name="email"
              placeholder="Business Email"
              onChange={handleChange}
              value={formData.email}
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <input
              type="text"
              name="numberOfEmployees"
              placeholder="Number Of Employees"
              onChange={handleChange}
              value={formData.numberOfEmployees}
            />
            {errors.numberOfEmployees && (
              <span className="error">{errors.numberOfEmployees}</span>
            )}

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              value={formData.lastName}
            />
            {errors.lastName && (
              <span className="error">{errors.lastName}</span>
            )}

            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              onChange={handleChange}
              value={formData.phoneNumber}
            />
            {errors.phoneNumber && (
              <span className="error">{errors.phoneNumber}</span>
            )}
          </div>
          <div className="contacts-select">
            <div>
              <label>How did you hear about us</label>
              <select name="howDidYouHear" onChange={handleChange}>
                <option value="" disabled>
                  Select an option
                </option>
                <option value="Communities">Communities</option>
                <option value="Clutch">Clutch</option>
                <option value="Twitter">Twitter</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Referral">Referral</option>
                <option value="Other">Other</option>
              </select>
              {errors.howDidYouHear && (
                <span className="error">{errors.howDidYouHear}</span>
              )}
            </div>
          </div>
          <div className="contacts-checkbox">
            <h3>What services best describe your needs?</h3>
            <div className="contacts-checkbox-down">
              <div className="contacts-checkbox-flex">
                <input
                  type="checkbox"
                  value="Cyber Services"
                  onChange={handleCheckboxChange}
                />
                <h3>Cyber Services</h3>
              </div>
              <div className="contacts-checkbox-flex">
                <input
                  type="checkbox"
                  value="CyberSecurity Awareness Training"
                  onChange={handleCheckboxChange}
                />
                <h3>CyberSecurity Awareness Training</h3>
              </div>
              <div className="contacts-checkbox-flex">
                <input
                  type="checkbox"
                  value="Managed IT Service"
                  onChange={handleCheckboxChange}
                />
                <h3>Managed IT Service</h3>
              </div>
              <div className="contacts-checkbox-flex">
                <input
                  type="checkbox"
                  value="Tailored Consulting"
                  onChange={handleCheckboxChange}
                />
                <h3>Tailored Consulting</h3>
              </div>
              <div className="contacts-checkbox-flex">
                <input
                  type="checkbox"
                  value="IT Strategy"
                  onChange={handleCheckboxChange}
                />
                <h3>IT Strategy</h3>
              </div>
              <div className="contacts-checkbox-flex">
                <input
                  type="checkbox"
                  value="Professional Services"
                  onChange={handleCheckboxChange}
                />
                <h3>Professional Services</h3>
              </div>
            </div>
          </div>
          <div className="contacts-textarea">
            <h2>Please tell us anything you would like to discuss</h2>
            <div className="text-area">
              <textarea
                name="message"
                maxLength={100}
                onChange={handleChange}
                value={formData.message}
              ></textarea>
              {errors.message && (
                <span className="error">{errors.message}</span>
              )}
            </div>
          </div>
          <div className="contacts-submit">
            {loading ? (
              <div className="loader">Sending...</div>
            ) : success ? (
              <div className="success-message">{success}</div>
            ) : errorMessage ? (
              <div className="error-message">{errorMessage}</div>
            ) : null}
            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
