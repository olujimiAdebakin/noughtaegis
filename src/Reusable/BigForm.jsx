import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import './BigForm.css'

const formSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must contain only digits")
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone number is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  message: Yup.string().required("Message is required"),
  jobTitle: Yup.string().required("Job title is required"),
  companyName: Yup.string().required("Company name is required"),
  companySize: Yup.string().required("Company size is required"),
  servicesNeeded: Yup.array()
    .min(1, "You must select at least one service")
    .required("Services are required"),
  terms: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required(),
});

const MyForm = () => {
  
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(formSchema),
  // });

  // // Handle form submission
  // const onSubmit = (data) => {
  //   console.log("Form Data:", data);
  //   localStorage.setItem("formData", JSON.stringify(data)); // Save data to local storage
  //   alert("Form submitted successfully!");
  // };

  // const onSubmit = (data) => {
  // //   console.log("Form Data:", data);
  // };

  return (
    <form className="Bigform" >
      <div className="form-flex">
        <div>
          <label>First Name</label>
          <input type="text" placeholder="Enter Your Name" />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" placeholder="Enter Your Name" />
        </div>
      </div>
      <div className="form-flex">
        <div>
          <label>Email</label>
          <input type="text" placeholder="Enter Your Email" />
        </div>
        <div>
          <label>Phone Number</label>
          <input type="number" placeholder="+234 071 345 67" />
        </div>
      </div>
      <div className="form-span">
        <div>
          <label>Job Title</label>
          <input type="text" placeholder="" />
        </div>
      </div>
      <div className="form-span">
        <div>
          <label>Job Role</label>
          <select>
            <option value="" style={{ fontSize: "10px", fontWeight: "500" }}>
              Select Job Title
            </option>
            <option value="it-professional">IT Professional</option>
            <option value="security-leader">Security Leader/Executive</option>
            <option value="security-analyst">Cybersecurity Analyst</option>
            <option value="security-engineer">Security Engineer</option>
            <option value="incident-responder">Incident Responder</option>
            <option value="penetration-tester">
              Penetration Tester (Ethical Hacker)
            </option>
            <option value="security-architect">Security Architect</option>
          </select>
        </div>
      </div>
      <div className="form-span">
        <div>
          <label htmlFor="">Company Name</label>
          <input type="text" placeholder="Enter Company Name" />
        </div>
      </div>
      <div className="form-span">
        <div>
          <label>Company Size</label>
          <select>
            <option value="">Please Select</option>
            <option value="">1-50 Employees</option>
            <option value="">51-150 Employees</option>
            <option value="">151-1000 Employees</option>
            <option value="">1000+ Employees</option>
          </select>
        </div>
      </div>
      <div className="checkbox">
        <h3>Services Needed</h3>
        <div className="checkbox-flex">
          <input type="checkbox" />
          <h3>Infrastructure Penetration Testing</h3>
        </div>
        <div className="checkbox-flex">
          <input type="checkbox" />
          <h3>Application Penetration Testing</h3>
        </div>
        <div className="checkbox-flex">
          <input type="checkbox" />
          <h3>Cloud Penetration Testing</h3>
        </div>
        <div className="checkbox-flex">
          <input type="checkbox" />
          <h3>Ransomware Penetration Testing</h3>
        </div>
        <div className="checkbox-flex">
          <input type="checkbox" />
          <h3>Objective-Based Penetration Testing</h3>
        </div>
        <div className="checkbox-flex">
          <input type="checkbox" />
          <h3>Attack Surface Penetration Testing</h3>
        </div>
        <div className="checkbox-flex">
          <input type="checkbox" />
          <h3>Red or Purple Teaming</h3>
        </div>
        <div className="checkbox-flex">
          <input type="checkbox" />
          <h3>Cyber Maturity Assessment</h3>
        </div>
        <div className="checkbox-flex">
          <input type="checkbox" />
          <h3>OT Cyber Security Assessment</h3>
        </div>
        <div className="checkbox-flex">
          <input type="checkbox" />
          <h3>Cloud Configuration Review</h3>
        </div>
        <div className="checkbox-flex">
          <input type="checkbox" />
          <h3>DevSecOps</h3>
        </div>
        <div className="checkbox-flex">
          <input type="checkbox" />
          <h3>MSP Partnering Opportunities</h3>
        </div>
        <div className="checkbox-flex">
          <input type="checkbox" />
          <h3>Others</h3>
        </div>
      </div>
      <div className="form-span">
        <div>
          <label>Budget Range</label>
          <select placeholder="please select">
            <option value="">Your Budget</option>
            <option value="">$13,000-$24,000</option>
            <option value="">$25,000-$100,000</option>
            <option value="">$100,000+</option>
            <option value="">Unknown/Undecided</option>
          </select>
        </div>
      </div>
      <div className="form-span">
        <label>Desired Project Start Date*</label>
        <select placeholder="Please Select">
          <option value="" disabled>
            Please Select
          </option>
          <option value="">2-4 Weeks</option>
          <option value="">1-3 Months</option>
          <option value="">3Months+</option>
        </select>
      </div>
      <div className="text-checkbox">
        <input type="checkbox" />
        <h3>First Company Pentest?</h3>
      </div>
      <div className="text-area">
        <label>Message</label>
        <textarea name="" id=""></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
