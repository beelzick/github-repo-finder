import Typography from '@mui/material/Typography'
import { VFC } from 'react'
import moment from 'moment';

interface Date {
    date: string
}

const LastUpdate: VFC<Date> = ({ date }) => {
    return (
        <Typography sx={{ fontWeight: 400, fontSize: '12px' }} color='#8b949e'>
            Last update {moment().from(date, true)} ago
        </Typography>
    )
}

export default LastUpdate