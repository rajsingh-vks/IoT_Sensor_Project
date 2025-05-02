import { Container, Row, Col, Image, Card, Carousel } from 'react-bootstrap';
import mobileImage from '../../assets/mobile.png';
import camera from '../../assets/camera.png';

import { BsFillCloudSunFill, BsCloudSleetFill, BsBroadcast, BsAlarmFill } from "react-icons/bs";


function Banner() {
    return (
        <>
            <main className="banner">
                <Container className="container">
                    <Row>
                        <Col md={5}>
                            <div className="banner_content">
                                <div className="content" data-aos="fade-up">
                                    <h1>Control your home</h1>
                                    <p>A smart house with advanced features that you can control a mobile application</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className=' text-center'>
                    <Container>
                        <Row>
                            <Col md={4}>
                                <div className='sensored_element'>
                                    <div className='element element_1' data-aos="fade-up">
                                        <span>
                                            <BsFillCloudSunFill />
                                        </span>
                                        Temperature
                                    </div>
                                    <div className='element element_2' data-aos="fade-up">
                                        <span>
                                            <BsCloudSleetFill />
                                        </span>
                                        Humidity
                                    </div>
                                    <div className='element element_3' data-aos="fade-up">
                                        <span>
                                            <BsBroadcast />
                                        </span>
                                        CO2 levels
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <Image src={mobileImage} alt="mobileImage" className='bannerImage' data-aos="fade-down" />
                            </Col>
                            <Col md={4}>
                                <div className='sensored_element'>
                                    <div className='element element_4' data-aos="fade-up">
                                        <span>
                                            <BsAlarmFill />
                                        </span>
                                        CO2 levels
                                    </div>
                                    <div className='element element_5' data-aos="fade-up">
                                        <span>
                                            <BsBroadcast />
                                        </span>
                                        CO2 levels
                                    </div>
                                    <div className='element element_6' data-aos="fade-up">
                                        <span>
                                            <BsBroadcast />
                                        </span>
                                        CO2 levels
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </main>
        </>
    )
}

export default Banner