import styles from '../../styles/Project.module.css'
import ProjectsNavbar from '../../components/projectsNavbar/ProjectsNavbar'
import { useRouter } from 'next/router'

const ProjectPage = () => {
    const router = useRouter()
    const projectId = router.query.projectId

    return (
        <>
            <ProjectsNavbar projectId={projectId} />
            Project Page
        </>
    )
}

export default ProjectPage