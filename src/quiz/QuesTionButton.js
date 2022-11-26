import React from "react";
import { Button, Typography } from "@mui/material";

function QuesTionButton(props) {
  let keys;
  let isthere;

  if (props.allSavedData.length !== 0) {
    keys = Object.keys(props.allSavedData);

    isthere = keys.some((qno) => {
      return qno === props.qno;
    });
  }



  return (
    <Button
      variant={isthere ? "contained" : "outlined"}
      color={isthere ? "success" : "primary"}
      className="m-1"
      onClick={() => {
        props.quesTionTab(props.qno);
      }}
    >
      <Typography variant="h5">{props.idx}</Typography>
    </Button>
  );
}

export default QuesTionButton;
