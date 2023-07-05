import { Link } from "react-router-dom";

const Education = () => {
    return (
        <div id="education" className="my-16">
            <h1 className="text-center text-3xl font-bold text-warning mb-4">Education</h1>
            <div className="flex items-center gap-24 mx-60 p-11 shadow-2xl">
                <div className=" ">
                    <Link to="https://www.aiub.edu/" className="flex items-center text-2xl gap-8 font-serif font-bold text-blue-700"><img
                        className="w-36" src="https://www.aiub.edu/Files/Templates/NewAIUB/assets/images/aiub-logo.svg" alt="American International University-Bangladesh" />American <br /> International <br /> University- <br />Bangladesh</Link></div>
                <div className="">
                    <h2 className="text-xl">2023</h2>
                    <p>American International University-Bangladesh - Bachelor of Science in Computer Science and Engineering</p>
                    <p>CGPA - 3.68 / 4</p>
                    <ul>
                        <li>➢Major in Software Engineering</li>
                        <li>➢Minor in COMPUTER ENGINEERING</li>
                        <li>➢Minor in INFORMATION SYSTEMS</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Education;