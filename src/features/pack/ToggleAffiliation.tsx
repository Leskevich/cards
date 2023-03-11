import React from 'react';

type ToggleAffiliation = {
  name: string
}

export const ToggleAffiliation = ({name}: ToggleAffiliation) => {
  return (
    <div>
      <button>{name}</button>
    </div>
  )
}