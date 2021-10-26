import SearchBox from './SearchBox'
import Box from '@mui/material/Box'

const SearchDeskopt = () => {
    return (
        <Box sx={{ width: '40%', display: { xs: 'none', md: 'block' } }}>
            <SearchBox />
        </Box>
    )
}

export default SearchDeskopt