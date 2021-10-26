import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            &copy; GitHub Repo Finder {new Date().getFullYear()} | Made with GitHub GraphQL API
        </div>
    )
}

export default Footer