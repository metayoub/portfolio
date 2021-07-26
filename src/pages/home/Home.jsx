import React from "react"
import Header from "../../components/header/Header";
import Resume from "../../components/resume/Resume";
import Footer from "../../components/footer/Footer";
import Contact from "../../components/contact/Contact";
import About from "../../components/about/About";
import Experience from "../../components/experience/Experience";
import Education from "../../components/education/Education";
import Skill from "../../components/skill/Skill";
import SeoHeader from "../../components/seo/Seo";
import { ang } from "../../data";

export default function Home() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
            <SeoHeader seo={ang.seo}/>
            <Header about={ang.about}/>
            <Resume about={ang.about} />
            <About  about={ang.about}/>
            <Experience experience={ang.experience} />
            <Education education={ang.education} />
            <Skill skill={ang.skill}/>
            <Contact contact={ang.about}/>
            <Footer footer={ang.footer} />
        </div>
    );
}
