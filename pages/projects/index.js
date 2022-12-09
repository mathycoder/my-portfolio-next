const ProjectIndex = () => <></>

export const getServerSideProps = async () => {  
    return {
        props: {},
        redirect: {
            destination: "/projects/student-agendas"
        }
    }
}

export default ProjectIndex