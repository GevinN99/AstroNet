import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import Navbar from "../components/Navbar.jsx";
import '../styles/MarsRoverPhotos.css';
import Footer from "../components/Footer.jsx";

const MarsRoverPhotos = () => {
    const [photos, setPhotos] = useState([]);
    const [displayCount, setDisplayCount] = useState(12);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await axios.get(
                    'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
                    {
                        params: {
                            sol: 1000,
                            api_key: import.meta.env.VITE_API_KEY
                        }
                    }
                );
                if (response.status !== 200) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                setPhotos(response.data.photos);
            } catch (error) {
                console.error('Error fetching photos:', error);
                // setError(error.message);
            }
        };
        fetchPhotos();
    }, []);

    const handleSeeMore = () => {
        setDisplayCount(displayCount + 12);
    };

    return (
        <div className="mars-rover-photos">
            <Navbar/>
            <Container className="pb-5">
                <h2 className="page-title">Mars Rover Photos</h2>
                <Row className="photo-container">
                    {photos.slice(0, displayCount).map((photo) => (
                        <Col xs={12} sm={6} md={4} lg={3} key={photo.id}>
                            <Image src={photo.img_src} alt={photo.id} thumbnail />
                        </Col>
                    ))}
                </Row>
                {displayCount < photos.length && (
                    <Button className="see-more-btn" onClick={handleSeeMore}>See More</Button>
                )}
            </Container>
            <Footer/>
        </div>
    );
};

export default MarsRoverPhotos;