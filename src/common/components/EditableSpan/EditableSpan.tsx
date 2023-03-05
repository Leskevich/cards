import React, { ChangeEvent, useState } from "react";
import style from "./EditableSpan.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

type EditableSpanPropsType = {
  value: string;
  onChange: (newValue: string) => void;
  label?: string;
};

export const EditableSpan = React.memo(function (props: EditableSpanPropsType) {
  let [editMode, setEditMode] = useState(false);
  let [title, setTitle] = useState(props.value);
  const activateEditMode = () => {
    setEditMode(true);
    setTitle(props.value);
  };
  const activateViewMode = () => {
    setEditMode(false);
    props.onChange(title);
  };
  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };
  return editMode ? (
    <div>
      <TextField
        label="Nickname"
        variant="standard"
        value={title}
        onChange={changeTitle}
        autoFocus
        onBlur={activateViewMode}
      />

      <div className={style.buttonParent}>
        <Button variant="contained" size="small">
          SAVE
        </Button>
      </div>
    </div>
  ) : (
    <span onDoubleClick={activateEditMode}>{props.value}</span>
  );
});
