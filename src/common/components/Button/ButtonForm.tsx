import React from "react";
import Button from "@mui/material/Button/Button";



type ButtonFormType = {
  name: string
  isValid: boolean
}

export const ButtonForm = (props: ButtonFormType) => {
  const {name, isValid} = props;
  return (
    <Button
      disabled={!isValid}
      type={"submit"}
      variant={"contained"}
      color={"primary"}
      sx={{
        width: "100%",
        borderRadius: '30px',
        color: '#fff',
        boxShadow: '0 4px 18px rgba(54, 110, 255, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
        marginTop: '40px',
        "&.Mui-disabled": {
          backgroundColor: '#366EFF',
          filter: 'brightness(90%)',
        }
      }}
    >
      {name}
      {/*Sign Up*/}
    </Button>
  )
}