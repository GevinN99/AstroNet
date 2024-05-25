import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "../styles/App.css";
import icon from "../assets/images/logo512.png";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

export default function Home() {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <>
            <Navbar/>
            <div className="home-container position-relative">
                <div className="particles-container">
                    <Particles
                        id="tsparticles"
                        init={particlesInit}
                        loaded={particlesLoaded}
                        options={{
                            background: {
                                color: {
                                    value: "#000000",
                                },
                            },
                            fpsLimit: 120,
                            interactivity: {
                                events: {
                                    onClick: {
                                        enable: true,
                                        mode: "push",
                                    },
                                    onHover: {
                                        enable: true,
                                        mode: "repulse",
                                    },
                                    resize: true,
                                },
                                modes: {
                                    push: {
                                        quantity: 4,
                                    },
                                    repulse: {
                                        distance: 200,
                                        duration: 0.4,
                                    },
                                },
                            },
                            particles: {
                                color: {
                                    value: "#ffffff",
                                },
                                links: {
                                    color: "#cbcbcb",
                                    distance: 150,
                                    enable: true,
                                    opacity: 0.3,
                                    width: 0.5,
                                },
                                move: {
                                    direction: "none",
                                    enable: true,
                                    outModes: {
                                        default: "bounce",
                                    },
                                    random: false,
                                    speed: 4,
                                    straight: false,
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        area: 800,
                                    },
                                    value: 80,
                                },
                                opacity: {
                                    value: 0.5,
                                },
                                shape: {
                                    type: "circle",
                                },
                                size: {
                                    value: { min: 0.5, max: 2.5 },
                                },
                            },
                            detectRetina: true,
                        }}
                        className="particles-effect h-100"
                    />
                </div>

                {/* Content */}
                <div className="home-content " style={{marginBottom:'170px', marginTop:'155px'}}>
                    <center>
                        <img
                            src={icon}
                            alt="icon"
                            className="home-icon"
                            style={{
                                animation: "moveIcon 2s ease-in-out forwards",
                                width: "250px",
                                height: "250px",
                            }}
                        />
                    </center>
                    <h1 className="home-title sign">
                        <span className="fast-flicker">As</span>tro
                        <span className="flicker">N</span>et
                    </h1>
                    <center>
                        <p className="home-description">
                            Explore the universe with NasaAPIs
                        </p>
                    </center>
                </div>
            </div>

            {/* Footer */}
            <Footer  />
        </>
    );
}
