import Banner from "../components/Banner/Banner";
import Contact from "../components/Contact/Contact";
import Details from "../components/Deatils/Details";
import Education from "../components/Education/Education";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

const Portfolio = () => {
    return (
        <div>
            <Banner></Banner>
            <Details></Details>
            <Skills></Skills>
            <Projects></Projects>
            <Education></Education>
            <Contact></Contact>
        </div>
    );
};

export default Portfolio;