import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';

import Box from '@mui/material/Box';

import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 28,
    backgroundColor: '#ECE6F0',
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
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
        // vertical padding + font size from searchIcon
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

export default function SearchBar() {
    const location = useLocation();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder={location.pathname === '/' ? 'Search photos...' : 'Search description...'}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
        </Box>
    );
}