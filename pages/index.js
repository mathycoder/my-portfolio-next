import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import AdamProfilePic from '../assets/img/homepage-pic2.png'

const Home = () => {
    return (
        <div className={styles.homePage}>
            <div className={styles.leftWrapper}>
                <h1 className={styles.heading1Style}>Adam Sarli</h1>
                <h2 className={styles.heading2Style}>Full Stack Developer</h2>
                <h2 className={styles.heading2Style}>Lifelong Educator</h2>
                <h3 className={styles.heading3Style}>
                    <Link className={styles.linkStyle} href="/projects">
                        View My Projects!
                    </Link>
                </h3>
            </div>
            <Image 
                alt="Adam profile pic"
                src={AdamProfilePic} 
                className={styles.imageStyle}
            />
            {/* <img src="/images/homepage-pic2.png" alt="Adam hiking"/> */}
        </div>
    )
}

export default Home