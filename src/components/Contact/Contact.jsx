import React from 'react'
import './Contact.css'

function Contact() {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "68650074-d6ec-4421-9613-b5983177a892");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src="/src/assets/msg-icon.png" alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li><img className='icon' src="/src/assets/mail-icon.png" alt="" />jainjainpriyanshu2001@gmial.com</li>
                <li><img className='icon' src="/src/assets/phone-icon.png" alt="" />+91 9873468833</li>
                <li><img className='icon' src="/src/assets/location-icon.png" alt="" />Hari Nagar Part-II Badarpur New Delhi-110044</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name="name" placeholder="Enter your name" required/>
                <label>Phone number</label>
                <input type="tel" name="phone" placeholder="Enter your phone number" required/>
                <label>Enter your message here</label>
                <textarea name="message" placeholder="Enter your message here" required/>
                <button type='submit' className='btn dark-btn'>Submit now <img src="/src/assets/white-arrow.png" alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact