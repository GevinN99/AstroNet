import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Astro from "../assets/images/Astro.png";
import "../styles/Footer.css";

export default function Footer() {
    return (
        <footer className="footer mt-5">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <h5 className="footer-heading">About AstroNet</h5>
                        <p className="footer-text">
                            AstroNet is a platform that allows you to explore the universe using NASA's APIs. Discover amazing celestial objects, learn about space missions, and more.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
                        <img src={Astro} alt="astro img" className="footer-image" />
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-end">
                        <h5 className="footer-heading">Follow Us :</h5>
                        <br/>
                        <ul className="list-unstyled footer-social">
                            &nbsp;
                            <li>
                                <a href="#" className="footer-icon">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-icon">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-icon">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p className="footer-text text-center">© 2024 AstroNet. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
