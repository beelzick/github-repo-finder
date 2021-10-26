import Skeleton from '@mui/material/Skeleton'

const StatsSkeleton = () => {
    return (
        <Skeleton
            variant='text'
            width={66}
            height={25}
            sx={{ backgroundColor: '#30363d', marginTop: '8px' }}
        />
    )
}

export default StatsSkeleton