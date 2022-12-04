import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(noteToAdd) {
    setNotes((prevValue) => [...prevValue, noteToAdd]);
  }

  function deleteNote(idToDelete) {
    setNotes((prevNotes) => {
      // create a new array and assign ti to notes
      // need to return filtered array
      return prevNotes.filter((note, id) => {
        return id !== idToDelete;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            index={index}
            title={note.title}
            content={note.content}
            deleteNote={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
