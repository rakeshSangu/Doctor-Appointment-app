import "./style.css"

import Header from "../Header"
import FooterSection from "../FooterSection"

const AboutUs = () => {
    return (
        <>
            <Header />
            <section className="about-container" >
                <div className="about-box">
                    <h1 className="about-heading">About Us</h1>
                    <p className="about-para">
                        We are committed to connecting patients with experienced doctors for hassle-free healthcare appointments. Our platform ensures easy scheduling, timely consultations, and trusted medical support.
                    </p>
                </div>
            </section>
            <FooterSection />
        </>
    )
}

export default AboutUs