import { Card, CardBody, CardHeader, Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import DashboardCommon from '../../components/DashboardCommon';
import axios from 'axios';


const DeviceManagment = () => {
    // const [devices, setDevices] = useState([])
    // const [isOpen, setIsOpen] = useState(false);
    // const [userName, setUserName] = useState('');
    const [devices, setDevices] = useState([])
    const [editingDevice, setEditingDevice] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        location: '',
        description: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/device/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const newDevice = await response.json();
                alert('Device successfully added!');

                // ✅ Add the new device to devices list
                setDevices((prevDevices) => [...prevDevices, newDevice]);

                // Reset form
                setFormData({ name: '', location: '', description: '' });
            } else {
                alert('Failed to add device.');
            }

        } catch (error) {
            console.error('Error posting device:', error);
            alert('An error occurred while adding the device.');
        }
    };

    // useEffect(() => {
    //     axios.get('http://localhost:3000/device/get') // replace with your backend URL
    //         .then(res => {
    //             setDevices(res.data)
    //         })
    //         .catch(err => console.error(err))
    // }, [])

    const loadDevices = async () => {
        try {
            const res = await axios.get('http://localhost:3000/device/get')
            setDevices(res.data);
        } catch (err) {
            console.error('Error fetching devices:', err);
        }
    }
    useEffect(() => {
        // async function loadDevices() {

        //     // const res = await axios.get('http://localhost:3000/device/get') // replace with your backend URL
        //     const res = await fetch('http://localhost:3000/device/get')
        //     const data = await res.json();
        //     setDevices(data);
        // }

        loadDevices();


        // const user = JSON.parse(localStorage.getItem('user'));
        // if (user && user.fullName) {
        //     setUserName(user.fullName);
        // }
    }, [])

    const handleEditClick = (device) => {
        setEditingDevice(device._id);
        setFormData({
            name: device.name,
            location: device.location,
            description: device.description
        });
    };

    // const handleUpdate = async (id) => {
    //     try {
    //         const res = await axios.put(`http://localhost:3000/device/get/${id}`, loadDevices);
    //         const updated = res.data;

    //         // Update local state
    //         setDevices((prev) =>
    //         prev.map((dev) => (dev._id === id ? updated : dev))
    //         );
    //         setEditingDevice(null);
    //     } catch (error) {
    //         console.error('Error updating device:', error);
    //         alert('Failed to update');
    //     }
    // };


    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this device?')) return;

        try {
            await axios.delete(`http://localhost:3000/device/get/${id}`);

            alert('Device deleted successfully');

            // Remove from state
            setDevices((prevDevices) => prevDevices.filter((d) => d._id !== id));
        } catch (error) {
            //console.error('Error deleting device:', error);
            console.error('Delete error:', error.response || error.message || error);

            alert('Failed to delete device');
        }
    };

    return (
        <>
            <div className='dashboard'>
                <div className="wrapper">

                    <DashboardCommon />

                    <div className="main-panel">
                        <div className="content">
                            <div className="container-fluid">
                                <h4 className="page-title">Device Managment</h4>
                                <Row>
                                    <Col md={12}>
                                        <form onSubmit={handleSubmit} className='my-4'>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Device Name"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                            <input
                                                type="text"
                                                name="location"
                                                placeholder="Location"
                                                value={formData.location}
                                                onChange={handleChange}
                                            />
                                            <input
                                                type="text"
                                                name="description"
                                                placeholder="Description"
                                                value={formData.description}
                                                onChange={handleChange}
                                            />
                                            <button type="submit">Create Device</button>
                                        </form>
                                    </Col>
                                </Row>


                                <Row className='mb-5'>
                                    <Col md={12}>
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
                                                            <th scope="col">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {/* {devices.map((dev, id) => (
                                                            <tr key={dev.id}>
                                                                <td>{id + 1}</td>
                                                                <td>{dev.name}</td>
                                                                <td>{dev.location}</td>
                                                                <td>{dev.description}</td>
                                                                <td><button onClick={() => handleDelete(dev.id)} className='btn btn-danger'>Delete</button></td>
                                                            </tr>
                                                        ))} */}

                                                        {devices.map((dev, index) => (
                                                            <tr key={dev._id}>
                                                                <td>{index + 1}</td>
                                                                <td>{dev.name}</td>
                                                                <td>{dev.location}</td>
                                                                <td>{dev.description}</td>
                                                                <td>
                                                                    {editingDevice === dev._id ? (
                                                                        <>
                                                                            {/* <input
                                                                            value={formData.name}
                                                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                                        />
                                                                        <input
                                                                            value={formData.location}
                                                                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                                                        />
                                                                        <input
                                                                            value={formData.description}
                                                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                                                        />
                                                                        <button onClick={() => handleUpdate(dev._id)}>Save</button> */}
                                                                            <button onClick={() => handleEditClick(dev)} className='btn btn-secondary'>Edit</button>
                                                                        </>
                                                                    ) : (
                                                                        <button onClick={() => handleEditClick(dev)} className='btn btn-secondary'>Edit</button>
                                                                    )}
                                                                </td>
                                                                <td>
                                                                    <button onClick={() => handleDelete(dev._id)} className='btn btn-danger'>Delete</button>
                                                                </td>
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

export default DeviceManagment;
