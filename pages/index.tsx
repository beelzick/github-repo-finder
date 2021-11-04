import Grid from '@mui/material/Grid'
import Title from '../src/components/Title/Title'
import PageContainer from '../src/components/PageContainer/PageContainer'
import styles from '../src/styles/gitflakes.module.scss'
import GitHub from '@mui/icons-material/GitHub'
import { v4 as uuidv4 } from 'uuid'
import Head from 'next/head'

const gitflakes = [...Array(50).keys()].map(i => i + 1);

const Index = () => {
    return (
        <>
            <Head>
                <title>GitHub Repo Finder</title>
                <meta name='description' content='Search for GitHub repositories | GitHub Repo Finder' />
            </Head>
            <PageContainer>
                <Grid
                    container
                    alignItems='center'
                    direction='column'
                    sx={{ minHeight: 'calc(100vh - 178px)' }}
                >
                    <Title />
                    {gitflakes.map(() => (
                        <GitHub key={uuidv4()} className={styles.gitflake} />
                    ))}
                </Grid>
            </PageContainer>
            <style jsx global>{`
                body {
                    overflow: hidden;
                    -webkit-overflow-scrolling: none
                }
            `}
            </style>
        </>
    )
}

export default Index