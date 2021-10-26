import Chip from '@mui/material/Chip'
import { VFC } from 'react'

interface TopicName {
    topicName: string
}

const Topic: VFC<TopicName> = ({ topicName }) => {
    return (
        <Chip
            size='small'
            label={topicName}
            sx={{ fontSize: '12px', color: '#f0f6fc', borderColor: '#30363d', marginRight: '2px' }}
            variant='outlined'
        />
    )
}

export default Topic