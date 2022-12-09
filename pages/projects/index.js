const ProjectIndex = () => <></>

export const getServerSideProps = async () => {  
    return {
        props: {},
        redirect: {
            destination: "/projects/1"
        }
    }
}

export default ProjectIndex