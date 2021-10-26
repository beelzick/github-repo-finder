import Skeleton from '@mui/material/Skeleton'

const NameSkeleton = () => {
    return (
        <Skeleton
            variant='rectangular'
            height={29}
            sx={{
                width: '60%',
                backgroundColor: '#30363d',
                borderRadius: '6px'
            }}
        />
    )
}

export default NameSkeleton