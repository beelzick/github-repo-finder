import Skeleton from '@mui/material/Skeleton'

const MadeBySkeleton = () => {
    return (
        <Skeleton
            height={22}
            width={100}
            variant='text'
            sx={{ backgroundColor: '#30363d', marginBottom: '16px' }}
        />
    )
}
export default MadeBySkeleton