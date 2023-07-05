import { useState } from "react";
import emailjs from 'emailjs-com';
import Swal from "sweetalert2";
const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name, email, message);

        emailjs.sendForm('service_kdrenc8', 'template_jfv3mqc', e.target, 'b7I_Sq_Cz5GuAwkPS')
            .then((response) => {
                console.log('Email sent successfully:', response.text);
                Swal.fire(
                    'Good job!',
                    'Email sent successfully:',
                    response.text
                )
                // Reset the form
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Error sending email',
                    footer: error
                })
            });
    };
    return (
        <div id="contact">
            <h1 className="text-4xl font-bold text-warning mt-60  text-center">Contact With Me!</h1>
            <div className="hero min-h-screen bg-transparent mb-16">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">

                        <img src="https://thecapplug.com/img/cms/94599-contact-us.gif" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-3xl text-center font-bold">Send Email !</h1>
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="from_name" value={name} placeholder="Your Name" className="input input-bordered" onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="from_email" value={email} placeholder="Your Email" className="input input-bordered" onChange={(e) => setEmail(e.target.value)} />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea value={message} name="message" className="textarea textarea-bordered h-24" placeholder="Message" onChange={(e) => setMessage(e.target.value)}></textarea>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Send </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;