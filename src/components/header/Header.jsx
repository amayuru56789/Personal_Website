import React from 'react'
import "./header.css"
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
//import ME from "../../assets/me.png"
//import {FaDotCircle} from 'react-icons/fa'



const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Amayuru Indeewara</h1>
                <h5 className='text-light'>Full-Stack Developer</h5>
                <button>EN</button>
                <button>PL</button>

                <CTA/>
                {/* <button><FaDotCircle/></button>
                <button><FaDotCircle/></button>
                <button><FaDotCircle/></button>
                <button><FaDotCircle/></button>
                <button><FaDotCircle/></button>
                <button><FaDotCircle/></button>
                <button><FaDotCircle/></button> */}
                <HeaderSocials/>

                <div className="me">
                    <img src={""} alt='me' />
                </div>
                <a href='#contact' className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header