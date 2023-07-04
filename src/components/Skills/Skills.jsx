import { FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { CgCPlusPlus } from "react-icons/cg";
import { BiLogoMongodb, BiLogoPhp } from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import { SiClickup, SiDotnet } from "react-icons/si";
import { BsLaptop, BsShareFill } from "react-icons/bs";
import { TbBrandCSharp } from "react-icons/tb";
import "./Skills.css"
const Skills = () => {
    return (
        <div id="skill" className="text-white text-center bg-sky-600 ">
            <h1 className="pt-24 text-6xl font-bold ">Skills</h1>
            <p className="text-xl px-96">These are my skills that I have learned in my University Life. I am always to learn new things so I will update my skills here.</p>
            <div className="grid grid-cols-1 py-16 lg:grid-cols-3 gap-8 mx-36 my-9">
                <div className="">
                    <BsShareFill className="w-36 h-36 ms-28 text-warning bg-white rounded-full p-5"></BsShareFill>
                    <h1 className="text-2xl font-bold my-4">Machine Learning, Artificial Intelligence, Deep Learning</h1>
                    <p>I have experience on the AI, Machine Learning and Deep Learning Technology. I worked on some Computer Vision Tools in my undergraduate life. I have experience using Tensorflow, PyTorch, and Keras.I have done some Deep Learning projects with the help of Python programming language.</p>
                </div>
                <div className="">
                    <CgCPlusPlus className="w-36 h-36 ms-28 text-warning bg-white rounded-full p-5"></CgCPlusPlus>
                    <h1 className="text-2xl font-bold my-4">C++</h1>
                    <p>I have over 4 years of experience programming in C++ in my university. My C++ projects include a custom game engine using the OpenGL graphics library, and solved many problems from different problem solving website like Leetcode, HackerRank ect.</p>
                </div>
                <div className="">
                    <FaJava className="w-36 h-36 ms-28 text-warning bg-white rounded-full p-5"></FaJava>
                    <h1 className="text-2xl font-bold my-4">Java</h1>
                    <p>I have experience with the Java and GUI. I have done a project named E-Commerce system with banking. This was a console projects.I have solved many OOP problems, Data structure courses with the knowledge of Java.</p>
                </div>

                <div className="">
                    <TbBrandCSharp className="w-36 h-36 ms-28 text-warning bg-white rounded-full p-5"></TbBrandCSharp>
                    <h1 className="text-2xl font-bold my-4">C#</h1>
                    <p>I have experience with the C# programming language.I build a C# project which is an Islamic app . Here I have used MySql databases to store the information.</p>
                </div>
                <div className="">
                    <SiDotnet className="w-36 h-36 ms-28 text-warning bg-white rounded-full p-5"></SiDotnet>
                    <h1 className="text-2xl font-bold my-4">.NET</h1>
                    <p>I have Experience with the .NET Framework and many of its modules, including LINQ, SOLID principles, N-tier architecture, .NET MVC, Entity Framework. I have build some project on my own, including Waste Collection system and Hospital Management system.</p>
                </div>
                <div className="">
                    <BiLogoPhp className="w-36 h-36 ms-28 text-warning bg-white rounded-full p-5"></BiLogoPhp>
                    <h1 className="text-2xl font-bold my-4">PHP</h1>
                    <p> I have Experience with the PHP Framework and many of its modules, including Xampp, NVC architecture, JQuery.I have build some project on my own, including University Management System and Admin part for an E-Commerce software. </p>
                </div>
                <div className="">
                    <FaNodeJs className="w-36 h-36 ms-28 text-warning bg-white rounded-full p-5"></FaNodeJs>
                    <h1 className="text-2xl font-bold my-4">Node.Js</h1>
                    <p>I have Experience with the Node.js and many of its modules, including Express,  Request, DotEnv,JWT, Oauth2-server and have created many of my own, including Summer Camp </p>
                </div>
                <div className="">
                    <FaReact className="w-36 h-36 ms-28 text-warning bg-white rounded-full p-5"></FaReact>
                    <h1 className="text-2xl font-bold my-4">REACT.JS</h1>
                    <p>I have Experience with the React.js and many of its modules, including React Router, Vite, component based architecture, react hooks, react swiper, react tabs, moment.js and have created many of my own, including Summer Camp, Toy-Market. </p>
                </div>
                <div className="">
                    <BsLaptop className="w-36 h-36 ms-28 text-warning bg-white rounded-full p-5"></BsLaptop>
                    <h1 className="text-2xl font-bold my-4">JavaScript,HTML,CSS </h1>
                    <p>I have Experience with the JavaScript,HTML,CSS and many of its modules, including Boostrap, Tailwinnd, DaisyUi and created Knowledge Cafe, Believers Territory, Donation for people,G3_Architecture . I often develop full-stack applications, consisting of HTML/JavaScript/CSS, various web libraries, and a Node.js/MongoDB backend. </p>
                </div>

                <div className="">
                    <DiMysql className="w-36 h-36 ms-28 text-warning bg-white rounded-full p-5"></DiMysql>
                    <h1 className="text-2xl font-bold my-4">MySql</h1>
                    <p>I have utilized MySql with many of my projects, including E-Commerce, Cricket Club Management. MySQLcombination of reliability, performance, scalability, ease of use, and cost-effectiveness has made it a preferred choice for many applications, ranging from small-scale websites to large-scale enterprise systems.</p>
                </div>
                <div className="">
                    <BiLogoMongodb className="w-36 h-36 ms-28 text-warning bg-white rounded-full p-5"></BiLogoMongodb>
                    <h1 className="text-2xl font-bold my-4">MongoDB</h1>
                    <p>With many years of experience using MongoDB for backends, many of my projects utilize Node MongoDB driver. Working for Summer champ and Toy-Market, I was responsible for using MongoDB databases efficiently and creating services that allowed for easy interaction between web apps and databases</p>
                </div>
                <div className="">
                    <SiClickup className="w-36 h-36 ms-28 text-warning bg-white rounded-full p-5"></SiClickup>
                    <h1 className="text-2xl font-bold my-4">ClickUp</h1>
                    <p>I also have some experience with the project Management software including ClickUp, Trello. I have manages some projects, including BiCycle Management System.</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;