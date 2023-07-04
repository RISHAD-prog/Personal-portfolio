import { Link } from "react-router-dom";
import { GrAppsRounded } from "react-icons/gr";
import { FaTools, FaUserAlt, FaUserGraduate } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

const Navbar = () => {
    return (
        <div className="">
            <div className="navbar fixed top-0 z-10 bg-opacity-60 text-white bg-gray-800 ">

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/about" ><FaUserAlt></FaUserAlt>About</Link></li>
                            <li><Link to="/projects"> <GrAppsRounded className=" bg-white"></GrAppsRounded> Projects</Link></li>
                            <li>
                                <Link><FaTools></FaTools>Skills</Link>
                            </li>
                            <li><Link><FaUserGraduate></FaUserGraduate>Education</Link></li>
                            <li><Link><AiFillMail></AiFillMail>Contact</Link></li>
                            <li><Link><AiFillMail></AiFillMail>Resume</Link></li>
                        </ul>
                    </div>
                    <div className=" flex flex-col text-warning ms-36" >
                        <Link to="/" className="text-3xl font-bold" >Ismail Hossain Rishad</Link>

                    </div>
                </div>
                <div className="navbar-end hidden w-full me-11 lg:flex">
                    <ul className="menu menu-horizontal px-1  text-white text-xl">
                        <li><a href="#about" className="hover:text-warning" ><FaUserAlt></FaUserAlt>About</a></li>
                        <li  ><Link to="/projects" className="hover:text-warning" > <GrAppsRounded className=" bg-white"></GrAppsRounded> Projects</Link></li>
                        <li>
                            <Link className="hover:text-warning"><FaTools></FaTools>Skills</Link>
                        </li>
                        <li><Link className="hover:text-warning"><FaUserGraduate></FaUserGraduate>Education</Link></li>
                        <li><Link className="hover:text-warning"><AiFillMail></AiFillMail>Contact</Link></li>
                        <li><Link className="hover:text-warning"><AiFillMail></AiFillMail>Resume</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;