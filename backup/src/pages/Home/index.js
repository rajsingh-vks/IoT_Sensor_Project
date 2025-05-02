// const Home = () => <h2>Home Pagea</h2>;

import AddedDevice from "../../components/AddedDevice";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Home() {
    return (
        <>
            <Header />
            <Banner />
            <AddedDevice />
            <Footer />
        </>
    )
}
export default Home;