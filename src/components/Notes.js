import React, { useContext } from "react";
import Noteitem from "./Noteitem";
import NoteContext from "../context/notes/NoteContext";

const Notes = (props) => {
  const notes = useContext(NoteContext);
  return (
    // <div className="container">
    <div className="row">
      <h2>Your notes</h2>
      {notes.map((note) => {
        return (
          <Noteitem
            key={note._id}
            title={`${note.title}`}
            description={`${note.description}`}
          />
        );
      })}
    </div>
    // </div>
  );
};

export default Notes;
