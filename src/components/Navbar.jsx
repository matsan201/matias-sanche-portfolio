import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/logo.png"

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="home">
                    <img src={logo} className="mx-2" width={50} height={33} alt="logo"/>
                </a>
            </div>

            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/matias-ignacio-sanchez-b1289226a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub">
                    <FaLinkedin/>
                </a>
                <a href="https://github.com/matsan201"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/matias.sanchez.96/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn">
                    <FaInstagram />
                </a>
                <a href="https://x.com/MatiasIgna48930"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter">
                    <FaXTwitter />
                </a>
            </div>
        </nav>
    )
}


export default Navbar