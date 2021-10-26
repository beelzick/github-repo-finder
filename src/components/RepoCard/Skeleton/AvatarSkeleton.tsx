import Skeleton from '@mui/material/Skeleton'

const AvatarSkeleton = () => {
    return (
        <Skeleton
            variant='circular'
            height={40}
            width={40}
            sx={{ backgroundColor: '#30363d ' }}
        />
    )
}

export default AvatarSkeleton