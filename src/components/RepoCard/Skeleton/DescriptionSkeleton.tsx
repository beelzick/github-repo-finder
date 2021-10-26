import Skeleton from '@mui/material/Skeleton'

const DescriptionSkeleton = () => {
    return (
        <Skeleton
            height={70}
            variant='rectangular'
            sx={{ width: '100%', backgroundColor: '#30363d', borderRadius: '6px' }}
        />
    )
}

export default DescriptionSkeleton