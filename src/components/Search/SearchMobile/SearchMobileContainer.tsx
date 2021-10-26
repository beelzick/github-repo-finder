import Dialog from '@mui/material/Dialog'
import Grid from '@mui/material/Grid'
import { useSelector } from 'react-redux';
import { selectDialogOpen } from '../../../redux/dialogOpenSlice';

interface Props {
    children: React.ReactNode
}


const SearchMobileContainer = ({ children }: Props) => {
    const dialogOpen = useSelector(selectDialogOpen)
    return (
        <Dialog open={dialogOpen} fullScreen>
            <Grid container sx={{ backgroundColor: '#161b22', height: '100%' }} p={2}>
                {children}
            </Grid>
        </Dialog>
    )
}

export default SearchMobileContainer