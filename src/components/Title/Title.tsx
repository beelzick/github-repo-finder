import Typography from '@mui/material/Typography'
import styles from './Title.module.css'
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Title = () => {
    return (
        <>
            <div className={styles.container}>
                <ThemeProvider theme={theme}>
                    <Typography variant='h2' component='h1' mb={3} className={styles.title}>
                        Welcome to GitHub Repo Finder
                    </Typography>
                    <Typography variant='h5' component='h2' className={styles.title}>
                        Use search bar to find repository you are looking for
                    </Typography>
                </ThemeProvider>
            </div>

        </>
    )
}

export default Title
