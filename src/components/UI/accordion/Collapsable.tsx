import React from 'react';
import {
    Box,
    Collapse,
    IconButton, Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {Question, Quiz} from "../../../models/quiz.model";
import {DeleteForever, EditAttributesOutlined} from "@mui/icons-material";

interface CollapsableProps {
    row?: Quiz
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
        createdAt,
        createdBy,
        published,
        history: [
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

const Row: React.FC<CollapsableProps> = (props) => {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row?.title}
                </TableCell>
                <TableCell align="right">{row?.createdAt}</TableCell>
                <TableCell align="right">{row?.createdBy}</TableCell>
                <TableCell align="right">{row?.published}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Список вопросов
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Customer</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {/*{row?.questions?.map((question) => (*/}
                                    {/*    <TableRow key={question.id}>*/}
                                    {/*        <TableCell component="th" scope="row">*/}
                                    {/*            {question.title}*/}
                                    {/*        </TableCell>*/}
                                    {/*        <TableCell>{question.createdBy}</TableCell>*/}
                                    {/*        <TableCell align="right">{question.createdBy}</TableCell>*/}
                                    {/*        <TableCell align="right">*/}
                                    {/*            /!*{Math.round(historyRow.amount * row.price * 100) / 100}*!/*/}
                                    {/*        </TableCell>*/}
                                    {/*    </TableRow>*/}
                                    {/*))}*/}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
};

const rows = [
    createData('Frozen yoghurt', "159", "des","6.0", "24", false),
    createData('Frozen yoghurt', "159", "des","6.0", "24", false),
];

export default function CollapsibleTable() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Название</TableCell>
                        <TableCell align="right">Описание</TableCell>
                        <TableCell align="right">Количество раундов</TableCell>
                        <TableCell align="right">Количество вопросов</TableCell>
                        <TableCell align="right">Опубликован?</TableCell>
                        <TableCell align="right">Действия?</TableCell>
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
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/*{rows.map((row) => (*/}
                    {/*    // <Row key={row.id} row={row} />*/}
                    {/*))}*/}
                </TableBody>
            </Table>
        </TableContainer>
    );
}