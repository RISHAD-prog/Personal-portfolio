import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTools, FaUserGraduate } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
const Details = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/uc?export=download&id=1pd2kYbDzBPB2sVjVl0cn6S_Piog626HP';
        link.download = 'resume.pdf';

        link.click();
    }
    return (
        <div id="about" >
            <div className="flex align-middle items-center justify-center gap-28 mt-8">
                <Link to="https://www.aiub.edu/" className="flex items-center text-2xl gap-8 font-serif font-bold text-blue-700"><img
                    className="w-36" src="https://www.aiub.edu/Files/Templates/NewAIUB/assets/images/aiub-logo.svg" alt="American International University-Bangladesh" />American <br /> International <br /> University- <br />Bangladesh</Link>
                <Link to="https://www.programming-hero.com/" className="  flex items-center text-2xl  font-serif font-bold text-blue-700 ">
                    <img src="https://web.programming-hero.com/static/media/ph_logo.cda7f338.svg" className=" w-36" alt="Programming Hero" />Programming Hero <br /> Lets Code_ <br /> Your Career</Link>
                <Link to="https://www.aiub.edu/faculties/fst" className="  flex items-center text-2xl  font-serif font-bold gap-3 text-blue-700 "><img className="w-36" src="https://www.aiub.edu/Files/Uploads/fst-short-logo.png" alt="" />AIUB <br /> Faculty of <br />Science and <br />Technology</Link>
            </div>
            <div className="" style={{ backgroundColor: "#edeeef" }}>
                <div className="ms-40 mt-20  px-40 py-20 lg:flex items-center gap-10 ">
                    <div className="m-0" >
                        <div className="avatar">
                            <div className=" w-66  h-72 rounded-full ring ring-slate-50 ring-offset-base-100 ring-offset-4">
                                <img src="https://i.ibb.co/d2cxthk/Rishad-Photo.jpg" />
                            </div>
                        </div>

                        <div className=" flex items-center gap-3 ms-20 mt-3">
                            <a><BsFacebook style={{ width: "30px", height: "30px" }} ></BsFacebook></a>
                            <a><BsLinkedin style={{ width: "30px", height: "30px" }}></BsLinkedin></a>
                            <a><BsGithub style={{ width: "30px", height: "30px" }}></BsGithub></a>
                        </div>
                    </div>

                    <div>
                        <h1 className="font-bold text-2xl" > Ismail Hossain Rishad</h1> <br />
                        <p className="font-bold" >AIUB 20th batch, BSC in CSE. Student, Software Engineer, and AI/ML Researcher
                        </p> <br />

                        <p>I am a under-graduate student of AIUB Class of 2020 and my passion is Computer Science.
                            My interests include software design and development, artificial intelligence, machine learning, computer vision.</p>

                        <p>I am currently a Under-graduate student working towards my final year Thesis on Deep Learning and seeking for an Internship to develop my software development Skills.</p>
                    </div>
                </div>

            </div>
            <div className="" style={{ backgroundColor: "#edeeef" }}>
                <div className="pb-24 text-center">
                    <h1 className="text-5xl font-bold mb-3">Learn More About My:</h1>
                    <button className="btn btn-neutral me-3  h-16 "><a href="#skill" className="flex items-center" ><FaTools className="me-3 h-4 w-4"></FaTools>Skills</a> </button>
                    <button className="btn btn-neutral me-3  h-16"><a href="#project" className="flex items-center"  ><GiSkills className="me-3 h-4 w-4"></GiSkills>Projects</a></button>
                    <button className="btn btn-neutral me-3  h-16 "><a href="#contact" className="flex items-center"  ><AiFillMail className="me-3 h-4 w-4"></AiFillMail>Contact</a></button> <br />
                    <button className="btn btn-neutral me-3 mt-4 h-16"><a href="#education" className="flex items-center"  ><FaUserGraduate className="me-3 h-4 w-4"></FaUserGraduate>Education</a></button>
                    <button onClick={handleDownload} className="btn btn-neutral me-3  h-16"  ><BsFileEarmarkPdfFill className=" h-4 w-4"></BsFileEarmarkPdfFill>Resume</button>
                </div>
            </div>

        </div>
    );
};

export default Details;