import { useState } from "react";
import { useSelector } from "react-redux";

const NoteForm = () => {
  const notes = useSelector((state) => state.note);

  console.log("note", notes);

  return (
    <div>
      note
      {notes.map((note) => {
        return <div key={note}>{note.number}</div>;
      })}
    </div>
  );
};

export default NoteForm;
