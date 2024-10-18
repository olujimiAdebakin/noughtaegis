import emailjs from "emailjs-com";

const sendEmail = (templateParams) => {
  const userId = "A2xb_nn0LTunuH-salA";
  const serviceId = "service_6e575ej";
  const templateId = "template_iu5gs4r";

  emailjs
    .send(serviceId, templateId, templateParams, userId)
    .then((response) => {
      console.log("Email sent successfully:", response);
      alert("Email sent successfully:", response);
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      alert("Error sending email:", error);
    });
};

export default sendEmail;
