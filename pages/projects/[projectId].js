import styles from '../../styles/ProjectPage.module.css'
import ProjectsNavbar from '../../components/projectsNavbar/ProjectsNavbar'
import Project from '../../components/project/Project'
import { useRouter } from 'next/router'
import { myProjects } from '../../data/projectData'

const ProjectPage = () => {
    const router = useRouter()
    const projectId = router.query.projectId
    const project = myProjects.find(project => project.id === projectId)

    return (
        <div className={styles.projects}>
            <ProjectsNavbar projectId={projectId} />
            {project && <Project project={project} />}
        </div>
    )
}

export default ProjectPage