import { useState, useEffect } from 'react'
import styles from './Project.module.css'
import Image from 'next/image'
import GitHubImage from '../../assets/img/github.png'

const Project = ({ project }) => {
    return (
        <div className={styles.project}>
            <h1>{project.title}</h1>
            <h6>{project.titleDescription}</h6>

            {/* {project.liveLink ?
            <div className="live-site-button">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <button>{project.liveLinkMobile ? 'Visit Live Site (Mobile or Desktop)' : 'Visit Live Site (Desktop only)' }</button>
                </a>
            </div> : ''} */}

            <div className={styles.projectFirstRow}>
                <div>
                    <p>{project.description}</p>
                </div>
                {
                    project.demoUrl ?
                    <div>
                        <iframe
                            title="video preview"
                            id="video" type="text/html"
                            src={project.demoUrl}
                            frameBorder="0"
                            allowFullScreen
                            >
                        </iframe>
                    </div>
                    : <div>
                        <Image src={project.animatedGif} alt="animated" width="350px"/>
                    </div>
                }
            </div>
            <div className={styles.projectSecondRow}>
                <div className={styles.projectImgWrapper}>
                    <Image
                        alt={`${project.title} element`}
                        className={styles.projectMediaImage}
                        src={project.appImage}
                    />
                </div>
                <div className="bulletpoints">
                    <ul className={styles.bulletpointsUl}>
                        {project.bullets.map((bullet, index) => <li key={index}>{bullet}</li>)}
                    </ul>
                    { project.githubUrl ?
                        <div className={styles.githubLinkWrapper}>
                            <a href={project.githubUrl}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <Image src={GitHubImage} alt="github icon" className={styles.githubLogo} />
                            </a> 
                        </div>: ''
                    }

                </div>
            </div>
        </div>
    )
}

export default Project