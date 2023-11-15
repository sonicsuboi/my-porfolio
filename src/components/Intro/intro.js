import React from "react";
import "./intro.scss";
import bg from "../../assets/image.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <div>
      <section id="intro">
        <div className="introContent">
          <span className="hello">Hello</span>
          <span className="introText">I'm</span>
          <span className="introName">Alex</span>
          <p className="introPara">My name is [Your Name], and I am [mention your role or occupation]. I have a background in [your field of study or work], with a focus on [specific skills or expertise]. I recently [mention any recent achievements, projects, or experiences].

In my previous role at [previous company or organization], I [briefly describe your responsibilities and achievements]. I am particularly passionate about [mention a specific interest or aspect related to your field].

Outside of work, I enjoy [mention any hobbies or interests]. Whether it's [specific activities or pursuits], I find that it [mention how your hobbies complement or balance your professional life].

I am excited about [mention what you're currently excited about or looking forward to], and I am always eager to [mention your goals or what you enjoy doing in your professional life].</p>
          <Link>
            <button type="button"></button>
          </Link>
        </div>

        <img src={bg} alt="Profile" className="bg"></img>
      </section>
    </div>
  );
};

export default Intro;
