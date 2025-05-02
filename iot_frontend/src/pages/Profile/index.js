import DashboardCommon from '../../components/DashboardCommon';


const Profile = () => {
    return (
        <>
            <div className='dashboard'>
                <div className="wrapper">
                    <DashboardCommon />
                    <div className="main-panel">
                        <div className="content">
                            <div className="container-fluid">
                                <h4 className="page-title">Profile</h4>
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

export default Profile;
