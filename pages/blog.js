import styles from '../styles/BlogPage.module.css'

const BlogPage = () => {
    return (
        <div className={styles.blog}>
            <div className={styles.blogBubble}>
                <div>For now, my blog is hosted here:</div>
                <div>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://mathycoder.github.io/"
                    >
                        A Teacher Learns to Code
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BlogPage