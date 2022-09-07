import React from 'react'
import "./about.css"
import Me from "../../assets/me-about.jpg"
//import {FaAward} from 'react-icons/fa'
//import {FiUsers} from 'react-icons/fi'
//import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <img src={Me} className="about__me-image" alt="About" />
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            {/*<FaAward className='about__icon'/>*/}
                            <h5>Experience</h5>
                            <small>2+ Years Working</small>
                        </article>
                        <article className='about__card'>
                            {/*<FiUsers className='about__icon'/>*/}
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article>
                        <article className='about__card'>
                            {/*<VscFolderLibrary className='about__icon'/>*/}
                            <h5>Projects</h5>
                            <small>80+ Completed</small>
                        </article>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic esse officia ullam, magni laudantium adipisci ipsa necessitatibus ratione velit nam inventore iure autem voluptatibus asperiores tenetur provident blanditiis? Eaque, consequuntur.
                    </p>
                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About