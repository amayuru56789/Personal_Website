import {React, useEffect, useRef, useState} from 'react'
import "./header.css"
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from "../../assets/NEW.jpeg"
//import {FaDotCircle} from 'react-icons/fa'



const Header = () => {

    const [isSpinning, setIsSpinning] = useState(true);
    const [spinComplete, setSpinComplete] = useState(false);
    const imageRef = useRef(null);

    useEffect(() => {
        // Initial right-side spin animation when component mounts
        const timer = setTimeout(() => {
            setIsSpinning(false);
            setSpinComplete(true);
        }, 1800); // Spin duration

        return () => clearTimeout(timer);
    }, []);

    // Click handler for manual spin
    const handleImageClick = () => {
        setIsSpinning(true);
        setSpinComplete(false);
        
        setTimeout(() => {
            setIsSpinning(false);
            setSpinComplete(true);
        }, 1800);
    };


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

                <div 
                          className={`me ${isSpinning ? 'spinning' : ''} ${spinComplete ? 'spin-complete' : ''}`}
                    onClick={handleImageClick}
                    ref={imageRef}
                    style={{
                        animation: isSpinning ? 'flip-right 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : '',
                        cursor: 'pointer',
                        transformStyle: 'preserve-3d'
                    }}
                >
                    <img src={ME} alt='Amayuru Indeewara' />
                    
                   
        
                </div>


                


                <a href='#contact' className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header