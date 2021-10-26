import SearchMobileContainer from './SearchMobileContainer'
import SearchBox from '../SearchBox'
import Box from '@mui/material/Box'
import CloseButton from './CloseButton'

const SearchMobile = () => {
    return (
        <SearchMobileContainer>
            <Box sx={{ height: '39px', width: '100%' }}>
                <SearchBox />
            </Box>
            <CloseButton />
        </SearchMobileContainer>
    )
}

export default SearchMobile