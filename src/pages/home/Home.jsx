import React from "react"
import Header from "../../components/header/Header";
import Resume from "../../components/resume/Resume";
import Footer from "../../components/footer/Footer";
import Contact from "../../components/contact/Contact";
import About from "../../components/about/About";
import Experience from "../../components/experience/Experience";
import Education from "../../components/education/Education";
import Skill from "../../components/skill/Skill";
import { ang } from "../../data";

// import useTheme from "../../hooks/useTheme";

export default function Home() {
    // const [, { toggle }] = useTheme();

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header about={ang.about}/>
            <Resume about={ang.about} />
            <About  about={ang.about}/>
            <Experience experience={ang.experience} />
            <Education education={ang.education} />
            <Skill skill={ang.skill}/>
            <Contact />
            <Footer footer={ang.footer} />
        </div>
    );
}
