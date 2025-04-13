import { Container } from "react-bootstrap"
import { BsAirplaneFill } from "react-icons/bs"

function Footer() {
    return (
        <>
            <footer className="py-4">
                <Container>
                    <p class="float-end">
                        <a href="#" className="float_top">
                            <BsAirplaneFill />
                        </a>
                    </p>
                    <p className="pt-2">&copy; 2025 – Raj Singh &middot; IOT Sersor Home
                        {/* <a href="#" className="text-success">Privacy</a> &middot; <a href="#" className="text-success">Terms</a> */}
                    </p>
                </Container>
            </footer>
        </>
    )
}

export default Footer