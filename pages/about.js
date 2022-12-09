import styles from '../styles/About.module.css'
import Image from 'next/image'
import TeachingImg from '../assets/img/classroom-pic2.png'
import ReactIcon from "../assets/images-tech/react.jpg"
import ReactNativeIcon from "../assets/images-tech/react-native.png"
import ReduxIcon from "../assets/images-tech/redux.png"
import Html5Icon from "../assets/images-tech/html.png"
import Css3Icon from "../assets/images-tech/css.png"
import JsIcon from "../assets/images-tech/js.png"
import Es6Icon from "../assets/images-tech/es6.jpg"
import jqueryIcon from "../assets/images-tech/jQuery.png"
import RailsIcon from "../assets/images-tech/rails.png"
import SinatraIcon from "../assets/images-tech/sinatra.jpeg"
import RubyIcon from "../assets/images-tech/ruby.png"
import PythonIcon from "../assets/images-tech/python.png"
import SqlIcon from "../assets/images-tech/sql.png"
import NextJsIcon from "../assets/images-tech/nextjs.png"
import CypressIcon from "../assets/images-tech/cypress.png"

import GithubIcon from "../assets/images-icons/github.png"
import GmailIcon from "../assets/images-icons/gmail.png"
import LinkedInIcon from "../assets/images-icons/linkedin.png"
import TwitterIcon from "../assets/images-icons/twitter.png"


const About = () => {

    return (
        <div className={styles.about}>
            <div className={styles.classroomPicWrapper}>
                <Image 
                    alt="Adam teaching in a classroom"
                    src={TeachingImg}
                    className={styles.classroomPic}
                />
            </div>
            <div className={styles.bio}>
                <div>
                {"I spent the past decade with whiteboard markers in my hands and a timer around my neck, teaching middle school students math in the Bronx.  Along the way, I developed a passion for education technology, and decided to pursue an ability to create greater educational tools."}
                </div>
                <div>
                {"After a few months exploring Python on Coursera, I fell in love with coding.  I was accepted with a scholarship to the Flatiron School.  Now I'm a Full stack web developer with experience in Ruby and JavaScript frameworks. "}
                </div>
            </div>
            <h2 className={styles.techBoxesTitle}>My Technologies</h2>
            <div className={styles.techBoxes}>
                <div className={styles.techBox}>
                    <h3>Front End</h3>
                    <div className={styles.techs}>
                        
                        <Image alt="react" className={styles.techImg} src={ReactIcon} />
                        <Image alt="redux" className={styles.techImg} src={ReduxIcon} />
                        <Image alt="html5" className={styles.techImg} src={Html5Icon} />
                        <Image alt="css3" className={styles.techImg} src={Css3Icon} />
                        <Image alt="js" className={styles.techImg} src={JsIcon} />
                        <Image alt="es6" className={styles.techImg} src={Es6Icon} />
                        <Image alt="jquery" className={styles.techImg} src={jqueryIcon} />
                        <Image alt="nextjs" className={styles.techImg} src={NextJsIcon} />
                        <Image alt="cypress" className={styles.techImg} src={CypressIcon} />
                        <Image alt="react-native" className={styles.techImg} src={ReactNativeIcon} />

                    </div>
                </div>
    
                <div className={styles.techBox}>
                    <h3>Back End</h3>
                    <div className={styles.techs}>
                        <Image alt="rails" className={styles.techImg} src={RailsIcon} />
                        <Image alt="sinatra" className={styles.techImg} src={SinatraIcon} />
                        <Image alt="ruby" className={styles.techImg} src={RubyIcon} />
                        <Image alt="python" className={styles.techImg} src={PythonIcon} />
                        <Image alt="sql" className={styles.techImg} src={SqlIcon} />
                    </div>
                </div>
            </div>
    
            <div className={styles.contactMe}>
                <h2 className="contact-me-title">Connect With Me</h2>
            </div>
            <div className={styles.contactIcons}>
                <a
                    rel="noopener noreferrer"
                    href="https://github.com/mathycoder"
                    target="_blank"
                >
                    <Image className={styles.contactIcon} alt="github" src={GithubIcon} />
                </a>
                <a href="mailto:adam.sarli@gmail.com">
                    <Image className={styles.contactIcon}  alt="gmail" src={GmailIcon} />
                </a>
                <a
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/adam-sarli/"
                    target="_blank"
                >
                    <Image className={styles.contactIcon}  alt="linkedin" src={LinkedInIcon} />
                </a>
                <a
                    rel="noopener noreferrer"
                    href="https://twitter.com/Adam_Sarli"
                    target="_blank"
                >
                    <Image className={styles.contactIcon} alt="twitter" src={TwitterIcon} />
                </a>
            </div>
        </div>
    )
}

export default About