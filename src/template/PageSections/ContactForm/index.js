import React, { useState, useRef } from "react";
import axios from "axios";
import { graphql } from "gatsby";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Container,
  Background,
  Intro,
  Title,
  Description,
  Left,
  Right,
  Submit,
  Accent,
} from "./styles";
import location from "../../../images/location.svg";
import phone from "../../../images/phone-alt.svg";
import emailIcon from "../../../images/email.svg";
import fax from "../../../images/fax.svg";
const ContactForm = ({ section }) => {
  const customId = "custom-id-yes";
  const form = useRef();
  const recaptchaRef = React.useRef();
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  const notify = (message) => toast(`${message}`);

  function onChange(value) {
    setRecapValue(value);
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [recapValue, setRecapValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (recapValue) {
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Your message has been sent!", {
        toastId: customId,
      });
      recaptchaRef.current.reset();
      console.log(form.current);
    } else {
      toast.error("Please verify you are not a robot", {
        toastId: customId,
      });
    }

    axios
      .post("https://p0if6xoer0.execute-api.us-east-1.amazonaws.com/prod", {
        name: name,
        email: email,
        message: message,
      })
      .then((res) => console.log(res));
  };
  console.log(section);
  return (
    <Container>
      <ToastContainer hideProgressBar={true} />
      <Intro>
        <Title>{section.elements.title.value}</Title>
        <Description>{section.elements.description.value}</Description>
      </Intro>
      <Background>
        <Left>
          <form ref={form}>
            <input
              name="user_name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              name="user_email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              name="user_message"
              type="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6Lfp3XIhAAAAAOuya3QU1vAoiNqagxUyNbu5tWHb"
              onChange={onChange}
              theme="light"
              style={{ width: "100%" }}
            />
            <Submit onClick={(e) => handleSubmit(e)}>Submit</Submit>
          </form>
        </Left>
        <Accent />
        <Right>
          <h3>Contact Information</h3>
          <span>
            <img src={location} />
            {section.elements.address.value}
          </span>
          <span>
            <img src={emailIcon} />
            {section.elements.email.value}
          </span>
          <span>
            <img src={phone} />
            {section.elements.phone.value}
          </span>
          <span>
            <img src={fax} />
            {section.elements.fax.value}
          </span>
          <h4>Hours</h4>
          <div>
            <span>Monday - Thursday</span>
            <span>{section.elements.hours_m_t.value}</span>
          </div>
          <div>
            <span>Friday</span>
            <span>{section.elements.hours_f.value}</span>
          </div>
          <div>
            <span>Saturday - Sunday</span>
            <span>{section.elements.hours_s_s.value}</span>
          </div>
        </Right>
      </Background>
    </Container>
  );
};

// export const ContactForm = ({ section }) => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "arn:aws:ses:us-east-1:36",
//         "template_ay621nu",
//         form.current,
//         "H-j-OMueBpw9xHBn0"
//       )
//       .then(
//         (result) => {
//           console.log(form.current);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };

export default ContactForm;
export const ContactFormFragment = graphql`
  fragment ContactFormFragment on kontent_item_contact_form {
    id
    system {
      id
      type
      codename
    }
    elements {
      title {
        value
      }
      description {
        value
      }
      address {
        value
      }
      email {
        value
      }
      fax {
        value
      }
      hours_f {
        value
      }
      hours_m_t {
        value
      }
      hours_s_s {
        value
      }
      phone {
        value
      }
    }
  }
`;
