import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import styles from './Layout.module.css'
import { ReactNode, VFC } from 'react'

interface Props {
    children: ReactNode
}

const Layout: VFC<Props> = ({ children }) => {
    return (
        <div className={styles.container}>
            <Navbar />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout