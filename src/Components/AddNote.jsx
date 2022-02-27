import React, { useState } from "react";
import Button from "@mui/material/Button";

const AddNote = (props) => {
  const opened = () => {
    document.querySelector("input").classList.add("active");
    document.querySelector("form").classList.add("active");
    document.querySelector(".submitBtn").classList.add("active");
    document.querySelector(".textArea").classList.add("active");
  };
  const closed = () => {
    document.querySelector("input").classList.remove("active");
    document.querySelector("form").classList.remove("active");
    document.querySelector(".submitBtn").classList.remove("active");
    document.querySelector(".textArea").classList.remove("active");
  };

  const d = new Date();

  const year = d.getFullYear();
  const da = d.getDate();
  const month = d.getMonth();
  const m = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = `${da}/${m[month]}/${year} `;

  let min = d.getMinutes();
  let hrs = d.getHours();
  if(min < 10){
    min = `0${min}`;
  };
  let time;

  if (hrs < 12) {
    time = `${hrs} : ${min} : AM`;
  } else if (hrs > 12) {
    time = `${hrs - 12} : ${min} : PM`;
  }
  const [note, setNote] = useState({
    title: "",
    content: "",
    daa: "",
    ti: "",
  });

  const inputNote = (events) => {
    const { name, value } = events.target;

    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
        daa: date,
        ti: time,
      };
    });
  };
  const submit = () => {
    props.add(note);
    setNote({
      title: "",
      content: "",
      daa: "",
      ti: "",
    });
  };
  
  return (
    <>
      <div className="main_div">
        <form onClick={opened} onDoubleClick={closed}>
          <input
            type="text"
            placeholder="Title"
            autoComplete="false"
            name="title"
            value={note.title}
            onChange={inputNote}
          />
          <textarea
            className="textArea"
            name="content"
            value={note.content}
            cols="30"
            rows="10"
            placeholder="Write A Note...."
            onChange={inputNote}
          />
          <Button onClick={submit} className="submitBtn ">+</Button>
        </form>
      </div>
    </>
  );
};

export default AddNote;
