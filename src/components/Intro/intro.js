import React from 'react';
import './intro.scss';
import bg from '../../assets/image.png';
import {Link} from 'react-scroll';

const Intro = () => {
    return (
        <div>
            <section id="intro">

                <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introText">I'm</span><span className="introName">Alex</span>
                <p className="introPara">I am a web designer, I</p>
                    <Link><button type="button"></button></Link>
                    </div>

<img src={bg} alt="Profile" className='bg'></img>
            </section>

        </div>
    )
}

export default Intro