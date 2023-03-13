import React, {useEffect} from 'react';
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import teacher from "../../../../assets/imgTable/teacher.svg";
import edit from "../../../../assets/imgTable/edit-2.svg";
import trash from "../../../../assets/imgTable/trash.svg";
import {useAppSelector} from "../../../../common/hook/useSelect";
import TableBody from '@mui/material/TableBody/TableBody';
import {useAppDispatch} from "../../../../common/hook/useDispatch";
import {removePack, setPacks, updatePack} from "../../cards-slice";
import {CardsPackType} from "../../cards-api";

export const Packs = () => {
    const packsCards = useAppSelector(state => state.packs.packs)
    const sortPack = useAppSelector(state => state.packs.params)
    useEffect(() => {
        dispatch(setPacks())
    }, [sortPack])

    const dispatch = useAppDispatch()
    const removePacksHandler = (packId: string) => {
        dispatch(removePack(packId))
    }
    const updatePacksHandler = (packId: string) => {
        const payload: CardsPackType = {
            _id: packId,
            name: "new name 12233"
        }
        dispatch(updatePack(payload))
    }

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
                                <img src={teacher} alt=""/>
                                <img onClick={() => updatePacksHandler(pack._id)} src={edit} alt=""
                                     style={{paddingLeft: 16}}/>
                                <img onClick={() => removePacksHandler(pack._id)} src={trash} alt=""
                                     style={{paddingLeft: 16}}/>
                            </TableCell>
                        </TableRow>
                    )
                }
            )
            }
        </TableBody>
    );
};

