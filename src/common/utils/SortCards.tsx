import React from 'react'
import upIcon from "./../../assets/imgTable/UP.svg"
import downIcon from "./../../assets/imgTable/down.svg"
import {useAppSelector} from "../hook/useSelect";

export type SuperSortPropsType = {
    value: string
    onChange: (sortPack: string) => void
}

export const SuperSort = (props: SuperSortPropsType) => {
    const {value, onChange} = props
    console.log(value)
    const sortPacks = useAppSelector(state => state.packs.params.sortPacks)

    const pureChange = (sortPacks: string, down: string, up: string) => {
        if (sortPacks === down) return up
        if (sortPacks === up) return down
        return down
    }

    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sortPacks, down, up))
    }

    const icon = sortPacks === down ? downIcon : upIcon

    return (
        <span onClick={onChangeCallback}>
            <img src={icon}/>
        </span>
    )
}