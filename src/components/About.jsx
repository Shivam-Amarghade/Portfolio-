import { profileData, assets } from "../assets/asstes";
import { FaCode, FaArrowRight } from "react-icons/fa";

function About() {
    return (
        <div id="About" className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Section */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="text-teal-800">About</span>
                            <span> Me</span>
                        </h2>

                        <p className="text-md mb-2 leading-8">
                            I'm a Full Stack developer with a passion for
                            creating immersive digital experiences.
                        </p>

                        <p className="text-md mb-6 leading-8">
                            My approach combines technical expertise with
                            creative design thinking.
                        </p>

                        {/* Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                            {profileData.map((data, index) => (
                                <div
                                    key={index}
                                    className="w-full p-6 border border-zinc-400 rounded
                                    hover:border-zinc-600 cursor-pointer
                                    hover:border-b-4 hover:border-r-4
                                    hover:border-b-zinc-800 hover:border-r-zinc-800
                                    transition duration-300 hover:-translate-y-1"
                                >
                                    <FaCode className="text-3xl mb-4" />
                                    <h1 className="text-xl font-bold mb-2">
                                        {data.title}
                                    </h1>
                                    <p>{data.technologies.join(", ")}</p>
                                </div>
                            ))}
                        </div>

                        {/* Resume Button */}
                        <a
                            href="https://drive.google.com/uc?export=download&id=1vh3MlpnToQxOOVHTbQesUMP9duFy1E05"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="px-10 py-4 border border-zinc-800 rounded-full flex items-center gap-2 cursor-pointer text-slate-500 hover:text-slate-800 hover:translate-y-1 transition duration-300">
                                Download Resume
                                <FaArrowRight />
                            </button>
                        </a>
                    </div>

                    {/* Right Section */}
                    <div className="flex justify-center">
                        <div className="relative w-full max-w-md">
                            <div className="rounded overflow-hidden">
                                <img src={assets.aboutImg} alt="Profile" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;