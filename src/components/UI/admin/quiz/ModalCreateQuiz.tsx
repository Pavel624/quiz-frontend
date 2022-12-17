import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import QuizItem from "./QuizItem";
import {Quiz} from "@mui/icons-material";

export default function ModalCreateQuiz(props: any) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose : QuizItem = () => {
        setOpen(false);
        return <QuizItem id="3" createdAt="2020-01-02" createdBy="1" title="" description="" published={false}></QuizItem>
    };

    addQuiz = () => {
        this.props.onClick(
            Math.random()
                .toString(36)
                .substring(7) + "?"
        );
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

