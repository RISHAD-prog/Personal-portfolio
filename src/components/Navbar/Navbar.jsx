import { Link } from "react-router-dom";
import { FaTools, FaUserAlt, FaUserGraduate } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
const Navbar = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/uc?export=download&id=1pd2kYbDzBPB2sVjVl0cn6S_Piog626HP';
        link.download = 'resume.pdf';

        link.click();
    }
    return (
        <div className="">
            <div className="navbar fixed top-0 z-10 bg-opacity-60 text-white bg-gray-800 ">

                <div className="navbar-start">
                    <div className="dropdown text-black">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href="#about" className="hover:text-warning" ><FaUserAlt></FaUserAlt>About</a></li>
                            <li  ><a href="#project" className="hover:text-warning" > <GiSkills className=" "></GiSkills> Projects</a></li>
                            <li>
                                <a href="#skill" className="hover:text-warning"><FaTools></FaTools>Skills</a>
                            </li>
                            <li><a href="#education" className="hover:text-warning"><FaUserGraduate></FaUserGraduate>Education</a></li>
                            <li><a href="#contact" className="hover:text-warning"><AiFillMail></AiFillMail>Contact</a></li>
                            <li><button onClick={handleDownload} className=" hover:text-warning"  ><BsFileEarmarkPdfFill></BsFileEarmarkPdfFill>Resume</button></li>
                        </ul>
                    </div>
                    <div className=" flex flex-col text-warning ms-36" >
                        <Link to="/" className="text-3xl font-bold" >Ismail Hossain Rishad</Link>

                    </div>
                </div>
                <div className="navbar-end hidden w-full me-11 lg:flex">
                    <ul className="menu menu-horizontal px-1  text-white text-xl">
                        <li><a href="#about" className="hover:text-warning" ><FaUserAlt></FaUserAlt>About</a></li>
                        <li  ><a href="#project" className="hover:text-warning" > <GiSkills className=" "></GiSkills> Projects</a></li>
                        <li>
                            <a href="#skill" className="hover:text-warning"><FaTools></FaTools>Skills</a>
                        </li>
                        <li><a href="#education" className="hover:text-warning"><FaUserGraduate></FaUserGraduate>Education</a></li>
                        <li><a href="#contact" className="hover:text-warning"><AiFillMail></AiFillMail>Contact</a></li>
                        <li><button onClick={handleDownload} className=" hover:text-warning"  ><BsFileEarmarkPdfFill></BsFileEarmarkPdfFill>Resume</button></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;