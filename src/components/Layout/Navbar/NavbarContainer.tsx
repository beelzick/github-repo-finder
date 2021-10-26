import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import styles from './Navbar.module.css'
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { ReactNode, VFC } from 'react'

interface Props {
    children: ReactNode
}

const NavbarContainer: VFC<Props> = ({ children }) => {
    const trigger = useScrollTrigger({
        threshold: 200
    });

    return (
        <>
            <div className={styles.navPlaceholder} />
            <Slide appear={false} direction='down' in={!trigger}>
                <AppBar position='fixed' sx={{ backgroundColor: '#161b22' }}>
                    <Toolbar sx={{ justifyContent: { xs: 'flex-end', lg: 'center' } }} >
                        {children}
                    </Toolbar>
                </AppBar>
            </Slide>
        </>
    )
}

export default NavbarContainer