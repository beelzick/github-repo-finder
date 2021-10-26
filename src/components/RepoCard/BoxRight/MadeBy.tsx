import Typography from '@mui/material/Typography'
import { VFC } from 'react'

interface Login {
    login: string
}

const MadeBy: VFC<Login> = ({ login }) => {
    return (
        <Typography sx={{ fontWeight: 400, fontSize: '12px' }} mb={1} color='#8b949e'>
            Made by {login}
        </Typography>
    )
}

export default MadeBy