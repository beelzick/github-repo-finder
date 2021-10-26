import { truncate } from '../../../helpers/functions'
import Typography from '@mui/material/Typography'
import { VFC } from 'react'

interface DescriptionProps {
    description: string
}

const Description: VFC<DescriptionProps> = ({ description }) => {
    return (
        <Typography color='#c9d1d9' sx={{ overflowWrap: 'anywhere' }}>
            {description ? truncate(description) : 'This repository doesn\'t have the description'}
        </Typography>
    )
}

export default Description