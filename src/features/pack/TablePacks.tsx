import React from "react"
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Pack} from "./Pack";


export const TablePacks = () => {

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
              </div>
            </TableCell>

            <TableCell align="left" sx={{padding: 0}}>
              Cards
            </TableCell>

            <TableCell align="left" sx={{padding: 0}}>
              Last Updated
            </TableCell>

            <TableCell align="left" sx={{padding: 0}}>
              Created by
            </TableCell>

            <TableCell align="left" sx={{padding: 0}}>
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <Pack/>
      </Table>
    </TableContainer>
  );
}