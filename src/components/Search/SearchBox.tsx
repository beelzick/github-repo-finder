import React, { useState, useEffect, useRef } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router';
import { Search, SearchIconWrapper, StyledInputBase } from './Styled';
import { useSelector } from 'react-redux';
import { selectDialogOpen, setDialogOpen } from '../../redux/dialogOpenSlice';
import { useDebounce } from 'use-debounce';
import { useAppDispatch } from '../../redux/store';
import { setLoading } from '../../redux/loadingSlice';

const SearchBox = () => {
    const dialogOpen = useSelector(selectDialogOpen)
    const dispatch = useAppDispatch()
    const router = useRouter()
    const [repoName, setRepoName] = useState('')
    const [debouncedRepoName] = useDebounce(repoName, 500)
    const inputRef = useRef(null)

    useEffect(() => {
        if (debouncedRepoName.length >= 3) {
            router.push(`/search/${debouncedRepoName}`)
            dispatch(setDialogOpen(false))
            dispatch(setLoading(false))
        }
    }, [debouncedRepoName])

    useEffect(() => {
        if (dialogOpen) {
            inputRef.current.focus()
        }
    }, [dialogOpen])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setLoading(true))
        const { value } = e.target
        setRepoName(value)
        if (!value) {
            console.log('here')
            dispatch(setLoading(false))
        }
    }

    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon sx={{ color: '#f0f6fc' }} />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder='Search…'
                inputRef={inputRef}
                inputProps={{ 'aria-label': 'search' }}
                sx={{ width: '100%' }}
                onChange={handleChange}
            />
        </Search>
    )
}

export default SearchBox
