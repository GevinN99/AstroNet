import { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Navbar from "../components/Navbar.jsx";
import '../styles/AstronomyPictureOfDay.css';
import Footer from "../components/Footer.jsx";

const AstronomyPictureOfDay = () => {
    const [apodData, setApodData] = useState(null);

    useEffect(() => {
        const fetchApodData = async () => {
            try {
                const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_API_KEY}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setApodData(data);
            } catch (error) {
                console.error('Error fetching APOD data:', error);
                // setError(error.message);
            }
        };
        fetchApodData();
    }, []);

    if (!apodData) return <div>Loading...</div>;

    return (
        <div className="astronomy-picture-of-day">
            <Navbar/>
            <Container fluid className="pb-5">
                <h2 className="page-title">{apodData.title}</h2>
                <Row className="photo-container justify-content-md-center">
                    {apodData.media_type === 'image' ? (
                        <Col xs={12} md={8}>
                            <Image src={apodData.url} alt={apodData.title} thumbnail fluid />
                        </Col>
                    ) : (
                        <Col xs={12} md={8}>
                            <iframe title={apodData.title} src={apodData.url} frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen></iframe>
                        </Col>
                    )}
                </Row>
                <p>{apodData.explanation}</p>
                <p>Date: {apodData.date}</p>
                {apodData.hdurl && <p>HD Image: <a href={apodData.hdurl}>Link</a></p>}
                {apodData.copyrigh && <p>Copyright: {apodData.copyrigh}</p>}
            </Container>
            <Footer/>
        </div>
    );
};

export default AstronomyPictureOfDay;