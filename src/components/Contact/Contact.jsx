
const Contact = () => {
    return (
        <div id="contact">
            <h1 className="text-4xl font-bold text-warning mt-16 mb-3 text-center">Contact With Me!</h1>
            <div className="hero min-h-screen bg-transparent my-16">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">

                        <img src="https://thecapplug.com/img/cms/94599-contact-us.gif" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-3xl text-center font-bold">Send Email !</h1>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Your Email" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea className="textarea textarea-bordered h-24" placeholder="Message"></textarea>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Send </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;