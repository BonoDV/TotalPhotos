import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const StyledDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialog-paper': {
        borderRadius: '12px',
        padding: theme.spacing(2),
        minWidth: '300px',
    },
}));

const DeleteButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    '&:hover': {
        backgroundColor: theme.palette.error.dark,
    },
}));

const ModalDeleteConfirmation = ({
    open,
    onClose,
    onConfirm,

}) => {
    return (
        <StyledDialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Confirm
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {`Do you want to delete it?`}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    No
                </Button>
                <DeleteButton
                    onClick={onConfirm}
                    autoFocus
                >
                    Yes
                </DeleteButton>
            </DialogActions>
        </StyledDialog>
    );
};

export default ModalDeleteConfirmation;