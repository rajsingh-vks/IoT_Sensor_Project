import { Card, CardBody, CardHeader, Col, Row } from 'react-bootstrap';
// import logoImage from '../../assets/logo.png'
// import { useAuth } from '../../redux/AuthContext';
// import { MdDashboard } from "react-icons/md";
// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DashboardCommon from '../../components/DashboardCommon';


const Dashboard = () => {
    // const { auth, logout } = useAuth();

    const [images, setImages] = useState([])
    const [devices, setDevices] = useState([])



    useEffect(() => {
        axios.get('http://localhost:3000/getImage') // 
            .then(response => {
                setImages(response.data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });


        axios.get('http://localhost:3000/device/get')
            .then(res => {
                setDevices(res.data)
            })
            .catch(err => console.error(err))
    }, [])


    return (
        <>
            {/* <div className='dashboard'>
                <h2>Welcome, {auth.user?.fullName}</h2>
                <button onClick={logout}>Logout</button>
            </div> */}
            <div className='dashboard'>
                <div className="wrapper">

                    <DashboardCommon />

                    <div className="main-panel">
                        <div className="content">
                            <div className="container-fluid">
                                <Row>
                                    {images.map((img, id) => (
                                        <>
                                            <Col sm={4} className='mb-4'>
                                                <Card>
                                                    <CardBody>
                                                        <Row key={img._id}>
                                                            <Col sm={5}>
                                                                <img
                                                                    key={id}
                                                                    src={`http://localhost:3000/images/${img.image}`}
                                                                    alt="Uploaded"
                                                                    style={{ width: '120px' }} />
                                                            </Col>
                                                            <Col sm={7}>
                                                                <h6 className='mt-3'><b>{img.name}</b></h6>
                                                                <p className='mt-3'><b>{img.location}</b></p>
                                                            </Col>
                                                        </Row>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </>
                                    ))}
                                </Row>

                                <Row className='mb-5'>
                                    <Col sm={12}>
                                        <Card>
                                            <CardHeader>
                                                <h5 className="card-title pt-2">Device Managnment</h5>
                                            </CardHeader>
                                            <CardBody>
                                                <table className="table table-head-bg-success table-striped table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">SI. No.</th>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Location</th>
                                                            <th scope="col">Description</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {devices.map((dev, id) => (
                                                            <tr key={dev.id}>
                                                                <td>{id + 1}</td>
                                                                <td>{dev.name}</td>
                                                                <td>{dev.location}</td>
                                                                <td>{dev.description}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <footer className="footer">
                            <div className="container-fluid">
                                <div className='d-flex'>
                                    <div className="copyright ms-auto">
                                        Made with <i className="la la-heart heart text-danger"></i> by Raaz Singh
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
