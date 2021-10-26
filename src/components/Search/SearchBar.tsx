import SearchDeskopt from './SearchDeskopt'
import SearchMobile from './SearchMobile/SearchMobile'
import SearchIconMobile from './SearchMobile/SearchIconMobile'

const SearchBar = () => {
    return (
        <>
            <SearchDeskopt />
            <SearchMobile />
            <SearchIconMobile />
        </>
    )
}

export default SearchBar