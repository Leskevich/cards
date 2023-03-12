import React, {useEffect} from "react"
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useAppDispatch} from "../../../../common/hook/useDispatch";
import {setPacks} from "../../cards-slice";
import {Packs} from "./Packs";
import filter from './../../../../assets/imgTable/Polygon 2.svg'


export const TablePacks = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setPacks())
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 1000,}} aria-label="simple table">
                <TableHead sx={{height: 48}}>
                    <TableRow>
                        <TableCell sx={{padding: 0}}>
                            <div style={{marginLeft: 36}}>
                                Name
                            </div>
                        </TableCell>
                        <TableCell align="left"
                                   sx={{padding: 0}}

                        >Cards
                            <img src={filter} alt=""/>
                        </TableCell>

                        <TableCell align="left"
                                   sx={{padding: 0}}
                        >
                            Last Updated
                            <img src={filter} alt=""/>
                        </TableCell>
                        <TableCell align="left"
                                   sx={{padding: 0}}
                        >Created by</TableCell>
                        <TableCell align="left"
                                   sx={{padding: 0}}
                        >Actions</TableCell>
                    </TableRow>
                </TableHead>
                <Packs/>
            </Table>
        </TableContainer>
    );
}

