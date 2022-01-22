import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Note = (props) => {
  const del = () => {
    props.delItem(props.id);
  };


  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <p className="Time">{props.dat}
        <br />
        {props.ti}
        </p>
        <span className="deleteBtn" onClick={del}>
          <DeleteOutlineIcon className="Btn" />
        </span>
      </div>
    </>
  );
};

export default Note;
