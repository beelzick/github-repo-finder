import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase'
import Fab from '@mui/material/Fab'

export const StyledFab = styled(Fab)(() => ({
    position: 'absolute',
    bottom: '20px',
    right: '15px',
    backgroundColor: '#58a6ff',
    '&:hover': {
        backgroundColor: '#58a6ff'
    }

}))

export const Search = styled('div')(({ theme }) => ({
    width: '100%',
    position: 'relative',
    borderRadius: '40px',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },

}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#f0f6fc',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: '100%',
    },
}));