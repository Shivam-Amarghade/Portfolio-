import { FaArrowRight } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useRef } from "react";

export default function Contect() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_tt57oei",
            "template_klcguy6",
            form.current,
            "Jx6-jbD8vE_jcZfG6"
        ).then(
            () => {
                alert("Message sent successfully ✅");
            },
            (error) => {
                console.log(error);
                alert("Failed to send ❌");
            }
        );
    };

    return (
        <div id="Contact" className="py-20">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold">
                        Get In <span className="text-teal-800">Touch</span>
                    </h1>
                </div>

                <form ref={form} onSubmit={sendEmail} className="space-y-6 max-w-3xl mx-auto">

                    <div className="grid md:grid-cols-2 gap-6">
                        <input name="user_name" placeholder="Enter Name"
                            className="px-4 py-3 border rounded w-full" />

                        <input name="user_email" placeholder="Enter Email"
                            className="px-4 py-3 border rounded w-full" />
                    </div>

                    <input name="subject" placeholder="Enter Subject"
                        className="px-4 py-3 border rounded w-full" />

                    <textarea name="message" placeholder="Enter Message"
                        className="px-4 py-3 border rounded w-full h-40" />

                    <div className="text-center">
                        <button className="flex items-center gap-2 px-8 py-3 bg-black text-white rounded-full mx-auto">
                            Send Message <FaArrowRight />
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
