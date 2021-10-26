import SearchIcon from '@mui/icons-material/Search';
import { setDialogOpen } from '../../../redux/dialogOpenSlice';
import { useAppDispatch } from '../../../redux/store';

const SearchIconMobile = () => {
    const dispatch = useAppDispatch()
    const handleClick = () => {
        dispatch(setDialogOpen(true))
    }

    return (
        <SearchIcon
            onClick={handleClick}
            sx={{
                fontSize: '39px',
                color: '#f0f6fc',
                display: { md: 'none' },
                marginRight: '5px',
                marginTop: '2px',
                cursor: 'pointer'
            }}
        />
    )
}

export default SearchIconMobile