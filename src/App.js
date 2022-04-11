import react, { useState, useEffect } from "react";
import Preview from "./Components/Preview";
import NotesContainer from "./Components/Notes/NotesContainer";
import NotesList from "./Components/Notes/NotesList";
import Note from "./Components/Notes/Note";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedNote, setSelectedNode] = useState(null);
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("notes")) {
      setNotes(JSON.parse(localStorage.getItem("notes")));
    } else {
      localStorage.setItem("notes", JSON.stringify([]));
    }
  }, []);

  const saveToLocalStorage = (value) => {
    localStorage.setItem("notes", JSON.stringify(value));
  };

  const getAddNote = () => {
    const onTitleChangeHandler = (event) => {
      setTitle(event.target.value);
      // console.log(title);
    };
    const onContentChangeHandler = (event) => {
      setContent(event.target.value);
      // console.log(content);
    };
    const onSaveNoteHandler = () => {
      if (editing) {
        const updateNotes = [...notes];
        const noteIndex = notes.findIndex((note) => note.id === selectedNote);
        updateNotes[noteIndex] = {
          id: selectedNote,
          title: title,
          content: content,
        };
        saveToLocalStorage(updateNotes);
        setNotes(updateNotes);
      } else {
        const note = {
          id: new Date(),
          title: title,
          content: content,
        };
        const updatedNotes = [...notes, note];
        saveToLocalStorage(updatedNotes);
        setNotes(updatedNotes);
        setSelectedNode(note.id);
      }
      setCreating(false);
      setEditing(false);
      setTitle("");
      setContent("");
    };
    return (
      <div>
        <h2>Add New Note</h2>
        <div>
          <input
            type="text"
            name="title"
            className="form-input mb-30"
            placeholder="Title"
            value={title}
            onChange={onTitleChangeHandler}
          />

          <textarea
            rows="10"
            name="content"
            className="form-input"
            placeholder="text"
            value={content}
            onChange={onContentChangeHandler}
          />

          <a href="#" className="button green" onClick={onSaveNoteHandler}>
            Save
          </a>
        </div>
      </div>
    );
  };

  const getPreview = () => {
    if (notes.length === 0) {
      return <h2>There is no notes</h2>;
    }
    if (!selectedNote) {
      return <h2>Choose one note</h2>;
    }

    const note = notes.find((note) => {
      return note.id === selectedNote;
    });

    const onEditNoteHandler = (note) => {
      setTitle(note.title);
      setContent(note.content);
      setEditing(true);
      setCreating(true);
    };
    const onDeleteNoteHandler = () => {
      const updateNotes = [...notes];
      const deleteNote = updateNotes.findIndex(
        (note) => note.id === selectedNote
      );
      notes.splice(deleteNote, 1);
      saveToLocalStorage(notes);
      setNotes(notes);
      setSelectedNode(null);
    };

    return (
      <div>
        <div className="note-operations">
          <a href="#" onClick={() => onEditNoteHandler(note)}>
            <i className="fa fa-pencil-alt" />
          </a>
          <a href="#">
            <i className="fa fa-trash" onClick={onDeleteNoteHandler} />
          </a>
        </div>
        <div>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
      </div>
    );
  };
  const addNoteHandler = () => {
    setCreating(true);
  };

  const noteClikedHandler = (noteId) => {
    setSelectedNode(noteId);
  };
  return (
    <div className="App">
      <NotesContainer>
        <NotesList>
          {notes.map((note) => {
            return (
              <Note
                key={note.id}
                title={note.title}
                noteClicked={() => noteClikedHandler(note.id)}
                active={note.id === selectedNote}
              />
            );
          })}
        </NotesList>
        <button className="add-btn" onClick={addNoteHandler}>
          +
        </button>
      </NotesContainer>
      <div className="preview-section">
        {creating ? getAddNote() : getPreview()}
      </div>
    </div>
  );
}

export default App;
