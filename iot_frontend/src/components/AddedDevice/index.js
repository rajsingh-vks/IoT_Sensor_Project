import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
// import camera from '../../assets/camera.png';
import step1 from '../../assets/easy-install-67dbcfaba70cc.webp';
import step2 from '../../assets/control-anywhere-67dbcfa962da4.webp';
import step3 from '../../assets/custom-fit-67dbcfa99e5a1.webp';


function AddedDevice() {
    // const [file, setFile] = useState(null)
    // const [image, setImage] = useState([])

    // const handleUpload = (e) => {
    //     const formdata = new FormData()
    //     formdata.append('file', file)
    //     axios.post('http://localhost:3000/upload', formdata)
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    // }

    // const [name, setName] = useState("")
    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     const formData = new FormData()
    //     formData.append('file', file)
    //     formData.append('name', name)

    //     try {
    //       const res = await axios.post('http://localhost:5000/upload', formData)
    //       console.log('Uploaded:', res.data)
    //     } catch (err) {
    //       console.error('Upload failed:', err)
    //     }
    //   }

    // useEffect(() => {
    //     axios.get('http://localhost:3000/getImage')
    //     .then(res => setImage(res.data[1].image))
    //     // .then(res => setImages(res.data))
    //     .catch(err => console.log(err))
    // }, [])

    const [images, setImages] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/getImage') // replace with your backend URL
            .then(res => {
                setImages(res.data)
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <>
            {/* Best in Smart Home Solution */}

            <div className='home_solution pt-5 mt-5'>
                <Container>
                    <h1 className='text-center mb-4'><strong>Best in Smart Home Solution</strong></h1>
                    <p className='text-center w-50 m-auto mb-5'>From seamless installation, effortless remote control, to customized smart integrations, we ensure a hassle-free experience tailored to your needs. Upgrade your home today!</p>
                    <Row>
                        <Col sm={4}>
                            <img src={step1} alt='' style={{ width: '100%', borderRadius: '20px' }} data-aos="fade-up" />
                        </Col>
                        <Col sm={4}>
                            <img src={step2} alt='' style={{ width: '100%', borderRadius: '20px' }} data-aos="fade-up" />
                        </Col>
                        <Col sm={4}>
                            <img src={step3} alt='' style={{ width: '100%', borderRadius: '20px' }} data-aos="fade-up" />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Best in Smart Home Solution */}
            <div className='added_device py-5'>
                <Container>
                    <h2 className='text-center mb-5'>Devices We Provided</h2>
                    {/* <div>
                        <input type='file' onChange={e => setFile(e.target.files[0])} />
                        <button onClick={handleUpload}>Upload</button>
                        <br />
                        <img src={`http://localhost:3000/Images/`+image} alt='' style={{ maxWidth: '300px', marginTop: '10px' }} />
                    </div> */}

                    {/* <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Image name" value={name} onChange={e => setName(e.target.value)} />
                        <input type="file" onChange={e => setFile(e.target.files[0])} />
                        <button type="submit">Upload</button>
                    </form> */}

                    <Row>
                        {images.map((img, id) => (
                            <>
                                <Col sm={2}>
                                    <div className='device text-center py-4 px-2' key={img.id}>
                                        <img
                                            key={id}
                                            src={`http://localhost:3000/images/${img.image}`}
                                            alt="Uploaded"
                                            style={{ width: '150px', height: 'auto' }} />
                                        <br />
                                        <h6 className='mt-4'><b>{img.name}</b></h6>
                                    </div>
                                </Col>
                            </>
                        ))}
                    </Row>

                    {/* <Row>
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
                    </Row> */}
                </Container>
            </div>
        </>
    )
}

export default AddedDevice