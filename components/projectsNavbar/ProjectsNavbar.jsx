import styles from './ProjectsNavbar.module.css'
import { myProjects } from '../../pages/data/projectData'
import { useRouter } from 'next/router'
import Image from 'next/image'

const ProjectsNavbar = ({ projectId }) => {
    const router = useRouter()

    const handleIconClick = projId => {
        router.push("/projects/" + projId)
    }

    return (
        <div className={styles.projects}>
            <h5>Select a Project:</h5>
            <div className={styles.projectIcons}>
                {myProjects.map((proj, key) => {
                    return (
                        <div
                            key={key}
                            onClick={e => handleIconClick(proj.id)}
                            className={parseInt(projectId) === proj.id ? styles.projectIconSelected : styles.projectIcon}
                        >
                            <Image src={proj.titleImage} alt={proj.title} className={styles.logoImg}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectsNavbar