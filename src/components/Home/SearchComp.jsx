import React from 'react'
import styled from '@emotion/styled';
import { Backdrop, Card, Fade, InputBase, Modal } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const style = {
    position: 'absolute',
    top: '10%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "700px",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#f1f3f4",
    marginLeft: "auto",
    marginRight: "auto",
    width: '500px',
    [theme.breakpoints.up('sm')]: {
        marginLeft: "auto",
        width: '500px',
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
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        color: "#444746",
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '500px',
        [theme.breakpoints.up('sm')]: {
            width: '20ch',
            '&:focus': {
                width: '50ch',
            },
        },
    },
}));

const SearchComp = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <React.Fragment>
            <Search onClick={handleOpen} onKeyDown={handleOpen}>
                <SearchIconWrapper>
                    <SearchIcon sx={{ color: "#444746" }} />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }} sx={{
                        color: "#444746"
                    }}
                />
            </Search>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
                sx={{ border: "none", outline: "none" }}>
                <Fade in={open}>
                    <Card sx={style}>
                        <Search onClick={handleOpen}>
                            <SearchIconWrapper>
                                <SearchIcon sx={{ color: "#444746" }} />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }} sx={{
                                    color: "#444746"
                                }}
                            />
                        </Search>
                    </Card>
                </Fade>
            </Modal>
        </React.Fragment>
    )
}

export default SearchComp