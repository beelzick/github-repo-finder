import NavbarContainer from './NavbarContainer';
import Link from '@mui/material/Link'
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import NextLink from 'next/link'
import SearchBar from '../../Search/SearchBar';
import LoadingSpinner from './LoadingSpinner';

const Navbar = () => {
    return (
        <NavbarContainer>
            <NextLink href='/' passHref>
                <Link
                    variant='h6'
                    underline='none'
                    color='#f0f6fc'
                    sx={{ position: 'absolute', left: '32px' }}

                >
                    GitHub Repo Finder
                </Link>
            </NextLink>
            <LoadingSpinner />
            <SearchBar />
            <IconButton
                sx={{ position: { lg: 'absolute' }, right: { lg: '32px' } }}
                href='https://github.com/'
            >
                <GitHubIcon sx={{ fontSize: '36px', color: '#f0f6fc' }} />
            </IconButton>
        </NavbarContainer>
    )
}

export default Navbar