import "./style.css"
import { FaLinkedin } from "react-icons/fa6";


const FooterSection = () => {
    return (
        <footer>
            <div className="footor-info-container">
                <h3>NirogGyan</h3>
                <p>Your trusted platform for booking healthcare appointments.</p>
            </div>
            <div className="footer-content-section">
                <ul>
                    <p>We Serve at: </p>
                    <li>Hyderabad</li>
                    <li>Delhi</li>
                    <li>Chennai</li>
                    <li>Bengalore</li>
                    <li>Mumbai</li>
                    <li>Kolkata</li>
                </ul>
                <ul>
                    <p>Specialized in: </p>
                    <li>Cardiologist</li>
                    <li>Dermatologist</li>
                    <li>Pediatrician</li>
                    <li>Neurologist</li>
                    <li>Orthopedic</li>
                </ul>
                <ul>
                    <p>support:</p>
                    <li>+91-956789-43210</li>
                    <li mailto="help@nirog.com">help@nirog.com</li>
                    <li className="footer-linkedin">
                        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/rakeshsangu/">
                            <FaLinkedin />
                            Linkedin
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footor-bottom">
                2025 NirogGyan. All rights are reserved. <br />
                Made By <span>Rakesh</span> | NirogCare
            </div>
        </footer>
    )
}
export default FooterSection