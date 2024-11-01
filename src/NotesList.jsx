import React from 'react';
import NoteTemplate from './NoteTemplate';

const NoteList = ({ notes, setNotes }) => {
  return (
    <div className='notes'>
      {notes.map(note => (
        <NoteTemplate key={note.id} note={note} setNotes={setNotes} />
      ))}
    </div>
  );
};

export default NoteList;
