import Grid from '@mui/material/Grid'
import Image from 'next/image'
import Typography from '@mui/material/Typography'

const NoData = () => {
    return (
        <Grid container justifyContent='center' direction='column'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Image
                    src='/Octocat.png'
                    width={600}
                    height={491.25}
                />
            </div>
            <Typography align='center' variant='h5' color='#c9d1d9' mt={2}>
                GitHub Octocat says that there is no data for this query
            </Typography>
            <Typography align='center' variant='h6' color='#c9d1d9' sx={{ fontWeight: 400 }}>
                Please use different search term
            </Typography>
        </Grid>
    )
}

export default NoData