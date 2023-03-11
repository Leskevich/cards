import React from 'react';
import {Search} from "../../common/components/Search/Search";
import {ToggleAffiliation} from "./ToggleAffiliation";
import Button from '@mui/material/Button';

export const PackFilter = () => {
  return (
    <div>
      <Search length={'413px'}/>
      <div>
        <Button variant="outlined" sx={{width: '96px', borderColor: '#D9D9D9', color: '#000000'}}>My</Button>
        <Button variant="contained" sx={{width: '96px'}}>All</Button>
      </div>
    </div>
  )
}