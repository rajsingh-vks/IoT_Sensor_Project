import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import camera from '../../assets/camera.png';


function AddedDevice() {
    return (
        <>
            <div className='added_device py-5 mt-5'>
                <Container>
                    <h2>Added Devices</h2>
                    <Row>
                        <Col sm={12}>
                            <Carousel interval={3000} className='my-4'>
                                <Carousel.Item>
                                    <Row>
                                        <Col>
                                            <Card>
                                                <Card.Body>
                                                    <img src={camera} alt="camera" />
                                                    Outdoors camera
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <Card.Body>
                                                    <img src={camera} alt="camera" />

                                                    Robot cleaner
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <Card.Body>
                                                    <img src={camera} alt="camera" />

                                                    Smart spotlight
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <Card.Body>
                                                    <img src={camera} alt="camera" />

                                                    Wi-Fi router
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <Card.Body>
                                                    <img src={camera} alt="camera" />

                                                    Smart spotlight
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Row>
                                        <Col>
                                            <Card>
                                                <Card.Body>

                                                    <img src={camera} alt="camera" />
                                                    Item 1</Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <Card.Body>
                                                    <img src={camera} alt="camera" />
                                                    Item 2</Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <Card.Body>
                                                    <img src={camera} alt="camera" />
                                                    Item 3</Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <Card.Body>
                                                    <img src={camera} alt="camera" />
                                                    Item 4</Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <Card.Body>

                                                    <img src={camera} alt="camera" />
                                                    Item 4</Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default AddedDevice