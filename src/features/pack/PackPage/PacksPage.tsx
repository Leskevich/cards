import React from 'react';
import {TablePacks} from "./PackTable/TablePacks";
import style from './PackPage.module.scss'
import {useAppDispatch} from "../../../common/hook/useDispatch";
import {createNewPack} from "../cards-slice";
import {PackFilter} from "../fiterBar/PackFilter";


export const PacksPage = () => {
    const dispatch = useAppDispatch()
    const createNewPackHandler = () => {
        const newPack = {
            name: 'newPack',
        }
        dispatch(createNewPack(newPack))
    }
    return (
        <div>
            <div className={style.headerPack}>
                <span>Packs list</span>
                <button onClick={createNewPackHandler}>Add new pack</button>
            </div>
            <PackFilter/>
            <TablePacks/>
        </div>
    );
};

