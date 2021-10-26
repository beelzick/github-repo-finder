import Skeleton from '@mui/material/Skeleton'
import { v4 as uuidv4 } from 'uuid'
import TopicsContainer from '../BoxRight/Topics/TopicsContainer';

const topics = [...Array(3).keys()].map(i => i + 1);

const TopicsSkeleton = () => {
    return (
        <TopicsContainer>
            {topics.map(() => (
                <Skeleton
                    key={uuidv4()}
                    variant='rectangular'
                    width={70}
                    height={24}
                    sx={{
                        marginRight: '2px',
                        borderRadius: '16px',
                        backgroundColor: '#30363d',
                        display: 'inline-block'
                    }}
                />
            ))}
        </TopicsContainer>
    )
}

export default TopicsSkeleton