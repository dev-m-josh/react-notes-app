import React, {useState} from 'react';
import AddNote from './AddNote';
import NotesList from './NotesList';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div className="App">
      <h1>Notes App</h1>
      <AddNote setNotes={setNotes}/>
      <NotesList notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
