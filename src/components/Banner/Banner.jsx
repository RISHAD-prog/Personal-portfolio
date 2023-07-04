import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: "url(https://i.ibb.co/jwm9fwY/md-ferdous-howlader-Wi7o-RJwbn4-I-unsplash.jpg)" }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className=" max-w-6xl">
                    <div className="avatar">
                        <div className=" w-52 rounded-full ring ring-slate-50 ring-offset-base-100 ring-offset-4">
                            <img src="https://i.ibb.co/9yLwx7f/My-Profile.jpg" />
                        </div>
                    </div>
                    <h1 className="mb-5 text-7xl font-bold">Ismail Hossain Rishad</h1>
                    <p className="mb-5 text-2xl font-bold">Software Developer-Undergrad Student @ Computer Science and Engineering -AI/ML Researcher </p>
                    <Link to="/portfolio" ><button className="btn h-16 absolute -bottom-1 -ms-20 text-xl bg-white border">Enter Portfolio </button></Link>
                </div>
            </div>
        </div>
    )
}

export default Banner;