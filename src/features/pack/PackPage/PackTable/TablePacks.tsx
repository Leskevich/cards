import React from "react"
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useAppDispatch} from "../../../../common/hook/useDispatch";
import {Coloda} from "./Coloda";
import {SuperSort} from "../../../../common/utils/SortCards";
import {setParams} from "../../cards-slice";


export const TablePacks = () => {
    const dispatch = useAppDispatch()
    const setSort = (sortPack: string) => {
        dispatch(setParams({sortPacks: sortPack}))
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 1000,}} aria-label="simple table">
                <TableHead sx={{height: 48}}>
                    <TableRow>
                        <TableCell
                            sortDirection={"asc"}
                            sx={{padding: 0}}>
                            <div style={{marginLeft: 36}}>
                                Name
                                <SuperSort value={"name"} onChange={setSort}/>
                            </div>
                        </TableCell>

                        <TableCell align="left" sx={{padding: 0}}>
                            Cards
                            <SuperSort value={"cardsCount"} onChange={setSort}/>
                        </TableCell>

                        <TableCell align="left" sx={{padding: 0}}>
                            Last Updated
                            <SuperSort value={"updated"} onChange={setSort}/>
                        </TableCell>

                        <TableCell align="left" sx={{padding: 0}}>
                            Created by
                        </TableCell>

                        <TableCell align="left" sx={{padding: 0}}>
                            Actions
                        </TableCell>
                    </TableRow>
                </TableHead>
                <Coloda/>
            </Table>
        </TableContainer>
    );
}

