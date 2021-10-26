import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch } from '../../../redux/store';
import { setDialogOpen } from '../../../redux/dialogOpenSlice';
import { StyledFab } from '../Styled'

const CloseButton = () => {
    const dispatch = useAppDispatch()
    const handleClick = () => {
        dispatch(setDialogOpen(false))
    }

    return (
        <StyledFab onClick={handleClick}>
            <CloseIcon />
        </StyledFab>
    )
}

export default CloseButton