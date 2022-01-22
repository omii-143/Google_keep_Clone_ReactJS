import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AddNote from "./Components/AddNote";
import Note from "./Components/Note";
import "./Components/keep.css";

const App = () => {
  const [items, setItems] = useState([]);

  const addNote = (note) => {
    setItems((prev) => {
      return [...prev, note];
    });
  };

  const deleteItem = (id) => {
    setItems((prevs) => {
      return prevs.filter((currData, ind) => {
        return id !== ind;
      });
    });
  };
  return (
    <>
      <Header />
      <AddNote add={addNote} />
      {items.map((val, ind) => {
        return (
          <Note
            key={ind}
            id={ind}
            title={val.title}
            content={val.content}
            delItem={deleteItem}
            dat={val.daa}
            ti={val.ti}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default App;
