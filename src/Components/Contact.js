import React from "react";
import Menu from "./../home/nav";
import emailjs from 'emailjs-com';
import FooterPage from "./../Components/FooterPage";
import { Container } from "react-bootstrap";
import "./../Contact.css";

 export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ha4wq66', 'Port_3nk6zqo', e.target, 'user_xtqeDO0JjQRM6mnojN2Os')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  return (
    <div>
    <Menu/>
    <br/><br/><br/>
    <Container>
    <form onSubmit={sendEmail}>
      <label class="label">Name</label>
      <input type="text" name="name" placeholder="Name" />
      <label>Email:</label>
      <input type="email" name="email" placeholder="Email"/>
      <label >Message:</label>
      <input type="text" name="subject" placeholder="Subject"/>
      <textarea name="message" placeholder="Your Message"></textarea>
      <input class="submit-btn" type="submit" value="Send" />
    </form>
    </Container>
    <FooterPage/>
    </div>
  );
}
