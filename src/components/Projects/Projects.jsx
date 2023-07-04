
import { BsDatabaseAdd } from 'react-icons/bs';
import { SiCsharp, SiDotnet } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import Tilt from 'react-parallax-tilt';

const Projects = () => {
    return (
        <div id='projects' >
            <h1 className='text-center text-3xl font-bold' >My Projects</h1>
            <div className='flex items-center mx-16 my-24 gap-5' >
                <Tilt>
                    <img src="https://i.ibb.co/42Ys8vP/Screenshot-74.png" alt="" className=" max-w-2xl" />
                </Tilt>
                <div>
                    <h1 className='text-xl font-bold mb-5'>Health Care 360 Backend</h1>
                    <div className='flex items-center gap-3 mb-5'>Made with:<SiDotnet className='w-6 h-6'></SiDotnet> <TbBrandCSharp className='w-6 h-6'></TbBrandCSharp> <BsDatabaseAdd className='w-6 h-6'></BsDatabaseAdd></div>
                    <p>This project mainly focused on back-end implementation. <br />
                        ➢ Better security has been ensured with pure abstraction in the
                        database also in authentication and authorization. <br />
                        ➢ Patient bed service and doctor appointment service has saved
                        time for thee users and makes easier to get those services. <br />
                        ➢ Keeps track on the number of user’s login, number of
                        appointment creation and the attendance for the staffs. <br />
                        ➢ Medicine and billing system have reduced the sufferings of the
                        users. <br />
                        ➢ A RESTful API interface has been implemented.</p>
                </div>
            </div>
            <div className='flex items-center mx-16 my-24 gap-5' >
                <Tilt>
                    <img src="https://i.ibb.co/2NBTCJ9/Screenshot-76.png" alt="" className=" max-w-2xl" />
                </Tilt>
                <div>
                    <h1 className='text-xl font-bold mb-5'>NGO Food Collection</h1>
                    <div className='flex items-center gap-3 mb-5'>Made with:<SiDotnet className='w-6 h-6'></SiDotnet> <SiCsharp className='w-6 h-6'></SiCsharp> <BsDatabaseAdd className='w-6 h-6'></BsDatabaseAdd></div>
                    <p>By this system that will help us to automate and track our works. We are an NGO who works for feeding deprived people and children. This app will keep record on the employee and the collection request from the restaurants. <br />
                        ➢ Restaurants will open a collect request from their dashboard with the maximum time they can preserve. <br />
                        ➢ System will accept collect request and assign an employee to collect the foods <br />
                        ➢ After collection the foods will be distributed by our employee and upon completion the collect request will be completed. <br />
                        ➢ System also keeps track all collect requests and their details.</p>
                </div>
            </div>
        </div>
    );
};

export default Projects;