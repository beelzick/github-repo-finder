import Grid from '@mui/material/Grid'
import { ReactNode, VFC } from 'react'

interface Props {
    children: ReactNode
}

const PageContainer: VFC<Props> = ({ children }) => {
    return (
        <Grid container p={4}>
            {children}
        </Grid>
    )
}

export default PageContainer