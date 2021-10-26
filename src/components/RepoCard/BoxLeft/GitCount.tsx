import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { VFC, ReactNode } from 'react'

interface Count {
    count: number
    icon: ReactNode
}

const GitCount: VFC<Count> = ({ count, icon }) => {
    return (
        <Grid container justifyContent='center' mt={1}>
            {icon}
            <Typography ml={0.5} color='#f0f6fc' fontSize='14px' sx={{ width: '48px' }}>
                {count}
            </Typography>
        </Grid>
    )
}

export default GitCount