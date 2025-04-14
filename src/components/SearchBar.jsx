import * as React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { setInputValue, setLostFocus, searchPhotos, searchRandomPhotos } from '../redux/slices/searchSlice';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 28,
    backgroundColor: '#ECE6F0',
    marginLeft: 0,
    width: '90%',
    height: '55px',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#49454F',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(2, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const LoadingWrapper = styled('div')({
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
});

export default function SearchBar() {
    const location = useLocation();
    const dispatch = useDispatch();
    const { inputValue, loading } = useSelector((state) => state.search);

    // Carga inicial
    useEffect(() => {
        if (location.pathname === '/') {
            dispatch(searchRandomPhotos());
        }
    }, [location.pathname, dispatch]);

    const handleBlur = () => {
        if (location.pathname === '/' && inputValue.trim()) {
            dispatch(searchPhotos(inputValue));
        } else if (location.pathname === '/' && inputValue === '') {
            dispatch(searchRandomPhotos());
        }
    }

    return (
        <Box sx={{ flexGrow: 1, position: 'relative' }}>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder={location.pathname === '/' ? 'Search photos...' : 'Search description...'}
                    inputProps={{ 'aria-label': 'search' }}
                    value={inputValue}
                    onChange={(e) => dispatch(setInputValue(e.target.value))}
                    onBlur={handleBlur}
                    disabled={loading}
                />
                {loading && (
                    <LoadingWrapper>
                        <CircularProgress size={24} color="inherit" />
                    </LoadingWrapper>
                )}
            </Search>
        </Box>
    );
}
