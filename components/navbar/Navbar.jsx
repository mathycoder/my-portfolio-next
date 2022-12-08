import styles from './Navbar.module.css'
import Link from 'next/link';

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <span className={styles.adamTitle}>
                <Link href='/'>Adam Sarli</Link>
            </span>
            <span className={styles.marginLeft}>
                <Link href='/about'>About</Link>
            </span>
            <Link href='/projects'>Projects</Link>
            <span className={styles.blogLink}>
                <Link href='/blog'>Blog</Link>
            </span>
        </div>
    )
}

export default NavBar
