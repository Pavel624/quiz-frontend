import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";

export default function ModalCreateQuiz() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Создать викторину
            </Button>
            <Dialog open={open} onClose={handleClose} fullWidth={true}>
                <DialogTitle>Создать викторину</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Название"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Описание"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <DialogContentText>
                        Картинка
                    </DialogContentText>
                    <input
                        autoFocus
                        id="description"
                        type="file"
                        accept="image/*"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Создать</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

