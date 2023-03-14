import React from 'react';
import {PackFilter} from "./packFilter/PackFilter";
import {TablePacks} from "./TablePacks";
import {Pack} from "./Pack";

export const PacksPage = () => {
  return (
    <div>
      <PackFilter/>
      <TablePacks/>
    </div>
  )
}