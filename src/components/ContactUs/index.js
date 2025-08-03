import "./style.css"

import Header from "../Header"
import FooterSection from "../FooterSection";

import { FaLinkedin } from "react-icons/fa6";


const ContactUs = () => {
    return (
        <>
            <Header />
            <section className="about-container">
                <div className="about-box">
                    <h2 className="about-heading">Contact Us</h2>
                    <p className="about-para">If you have any questions or need assistance, feel free to reach out to us:</p>
                    <ul className="contact-list">
                        <li>Email: <a href="mailto:support@healthcareapp.com">support@healthcareapp.com</a></li>
                        <li>Phone: +91 98765 43210</li>
                        <li>Address: 123 Health Street, Hyderabad, India</li>
                        <li className="link-list-item">
                            <a className="linked-in-ele" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/rakeshsangu/">
                                <FaLinkedin />
                                Linkedin
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            <FooterSection />
            
        </>
    )
}

export default ContactUs