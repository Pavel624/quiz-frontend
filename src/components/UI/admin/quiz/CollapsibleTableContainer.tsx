import {IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import React from "react";
import {PlayCircleOutlined} from "@mui/icons-material";
import QuizItem, {QuizItemProps} from "./QuizItem";
import {Quiz} from "../../../../models/quiz.model";

interface CollapsibleTableContainerProps {
    quzies: Quiz[];
}

function createData(
    id: string,
    title: string,
    description: string,
    createdAt: string,
    createdBy: string,
    published: boolean,
) {
    return {
        id,
        title,
        description,
        createdAt,
        createdBy,
        published,
        questions: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    };
}

const quizes : Quiz[] = [
    createData("1", "quiz 1","desc1","11-11-2011", "admin", false),
    createData("2", "quiz 2", "desc2","20-11-3045", "admin", true),
];

export const CollapsibleTableContainer : React.FC<CollapsibleTableContainerProps> = (props) => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell align="right">id</TableCell>
                        <TableCell align="right">Название</TableCell>
                        <TableCell align="right">Описание</TableCell>
                        <TableCell align="right">Когда создан</TableCell>
                        <TableCell align="right">Кем создан</TableCell>
                        <TableCell align="right">Опубликован?</TableCell>
                        <TableCell align="right">Действия</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {quizes.map(quiz => (
                        <QuizItem {...quiz} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}