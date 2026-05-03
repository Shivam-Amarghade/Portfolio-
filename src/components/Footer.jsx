import { FaLinkedin, FaGithub, FaInstagram, FaArrowRight } from "react-icons/fa";
function Footer() {
    return <div className="py-12 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">

                {/* Logo / Name */}
                <div className="mb-6 md:mb-0">
                    <span className="uppercase text-2xl font-bold">
                        The-Shivam-Amarghade
                    </span>
                </div>

                {/* Social Links */}
                <div className="flex space-x-6 text-2xl">

                    <a
                        href="www.linkedin.com/in/shivam-amarghade"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://github.com/Shivam-Amarghade"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.instagram.com/shivamcode99?igsh=dWRkdndtdmhkYXk1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-500 transition"
                    >
                        <FaInstagram />
                    </a>

                </div>

            </div>
        </div>
    </div>
}

export default Footer;