import React, {useState} from 'react';
import {Question, Quiz} from "../../../../models/quiz.model";
import {IconButton, TableCell, TableRow} from "@mui/material";
import {PlayCircleOutlined, SaveAltOutlined, SaveAltSharp} from "@mui/icons-material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export interface QuizItemProps {
    id: string,
    title: string,
    // questions?: Question[],
    description: string,
    createdAt: string,
    createdBy: string,
    active: boolean,
    poster?: JSX.Element
}

const QuizItem : React.FC<Quiz> = (props) => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <React.Fragment>
            <TableRow key={props.id}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell align="right">{props.id}</TableCell>
                <TableCell align="right">{props.title}</TableCell>
                <TableCell align="right">{props.description}</TableCell>
                <TableCell align="right">{props.createdAt}</TableCell>
                <TableCell align="right">{props.createdBy}</TableCell>
                <TableCell align="right">{props.published.toString()}</TableCell>
                <TableCell align="right">{props.poster}</TableCell>
                <TableCell align="right">
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => {}}
                    >
                        <SaveAltSharp color="warning" fill="black" />
                    </IconButton>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => {}}
                    >
                        <PlayCircleOutlined color="info" fill="green" />
                    </IconButton>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => {}}
                    >
                        <ModeEditOutlineOutlinedIcon color="info" fill="blue" />
                    </IconButton>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => {}}
                    >
                        <DeleteOutlinedIcon color="error" fill="red" />
                    </IconButton>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
};

export default QuizItem;