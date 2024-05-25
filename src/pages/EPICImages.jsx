import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import Navbar from "../components/Navbar.jsx";
import '../styles/EPICImagery.css';
import Footer from "../components/Footer.jsx";

const EPICImages = () => {
    const [imagery, setImagery] = useState(null);

    useEffect(() => {
        const fetchImagery = async () => {
            try {
                const response = await axios.get(
                    'https://epic.gsfc.nasa.gov/api/natural'
                );
                if (response.status !== 200) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                setImagery(response.data[0]);
            } catch (error) {
                console.error('Error fetching EPIC imagery:', error);
                // setError(error.message);
            }
        };
        fetchImagery();
    }, []);

    return (
        <div className="epic-imagery">
            <Navbar/>
            <Container className="epic-container vh-100">
                <h2 className="page-title mb-5">EPIC Daily "Blue Marble" Imagery</h2>
                {imagery && (
                    <Row>
                        <Col xs={12} md={6}>
                            <Image style={{height:'500px'}} src={`https://epic.gsfc.nasa.gov/archive/natural/${imagery.date?.substring(0, 4)}/${imagery.date?.substring(5, 7)}/${imagery.date?.substring(8, 10)}/png/${imagery.image}.png`} alt={imagery.caption} thumbnail />
                        </Col>
                        <Col xs={12} md={6}>
                            <Card className="info-card">
                                <Card.Body>
                                    <Card.Title>{imagery.caption}</Card.Title>
                                    <Card.Text>
                                        <strong>Date:</strong> {imagery.date}<br/>
                                        <strong>Centroid Coordinates:</strong> Latitude: {imagery.centroid_coordinates.lat}, Longitude: {imagery.centroid_coordinates.lon}<br/>
                                        <strong>DSCOVR J2000 Position:</strong> X: {imagery.dscovr_j2000_position.x}, Y: {imagery.dscovr_j2000_position.y}, Z: {imagery.dscovr_j2000_position.z}<br/>
                                        <strong>Lunar J2000 Position:</strong> X: {imagery.lunar_j2000_position.x}, Y: {imagery.lunar_j2000_position.y}, Z: {imagery.lunar_j2000_position.z}<br/>
                                        <strong>Sun J2000 Position:</strong> X: {imagery.sun_j2000_position.x}, Y: {imagery.sun_j2000_position.y}, Z: {imagery.sun_j2000_position.z}<br/>
                                        <strong>Attitude Quaternions:</strong> Q0: {imagery.attitude_quaternions.q0}, Q1: {imagery.attitude_quaternions.q1}, Q2: {imagery.attitude_quaternions.q2}, Q3: {imagery.attitude_quaternions.q3}<br/>
                                        {imagery.coords && (
                                            <p>
                                                <strong>Coordinates:</strong> Latitude: {imagery.coords.lat}, Longitude: {imagery.coords.lon}
                                            </p>
                                        )}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                )}
            </Container>
            <Footer/>
        </div>
    );
};

export default EPICImages;
