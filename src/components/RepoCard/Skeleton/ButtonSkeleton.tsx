import Skeleton from '@mui/material/Skeleton'

const ButtonSkeleton = () => {
    return (
        <Skeleton
            variant='rectangular'
            width={82.98}
            height={30}
            sx={{ backgroundColor: '#30363d', borderRadius: '4px' }}
        />
    )
}

export default ButtonSkeleton