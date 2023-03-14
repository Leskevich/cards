import React from 'react';
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from '@mui/material/TableBody/TableBody';
import {useAppSelector} from "../../common/hook/useSelect";



export const Pack = () => {
  const packsCards = useAppSelector(state => state.packs.packs)
  console.log(packsCards)

  return (
    <TableBody>
      {packsCards.map((pack) => {
          return (
            <TableRow key={pack._id} sx={{height: 48}}>
              <TableCell component="th" scope="row" sx={{padding: 0}}>
                <div style={{paddingLeft: 36}}>{pack.name}</div>
              </TableCell>
              <TableCell align="left" sx={{width: 230, padding: 0}}>
                {pack.cardsCount}
              </TableCell>
              <TableCell align="left" sx={{width: 216, padding: 0}}>
                {pack.updated}
              </TableCell>
              <TableCell sx={{width: 154, padding: 0}} align="left">
                {pack.user_name}
              </TableCell>
              <TableCell align="left" sx={{width: 108, padding: 0,}}>
                {/*<img src={teacher} alt=""/>*/}
                {/*<img onClick={() => updatePacksHandler(pack._id)} src={edit} alt=""*/}
                {/*     style={{paddingLeft: 16}}/>*/}
                {/*<img onClick={() => removePacksHandler(pack._id)} src={trash} alt=""*/}
                {/*     style={{paddingLeft: 16}}/>*/}
              </TableCell>
            </TableRow>
          )
        }
      )
      }
    </TableBody>
  );
};
