import { useDispatch, useSelector } from "react-redux";
import { noteDel } from "../redux/modules/note";

const NoteForm = () => {
  const notes = useSelector((state) => state.note);
  const dispatch = useDispatch();
  return (
    <div>
      note
      {notes.map((note) => {
        return (
          <div key={note.id}>
            {note.number}{" "}
            <button onClick={() => dispatch(noteDel(note.id))}>del</button>
          </div>
        );
      })}
    </div>
  );
};

export default NoteForm;
