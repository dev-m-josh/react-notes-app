import React from 'react';

const Note = ({ note, setNotes }) => {
  const handleDelete = () => {
    setNotes(prevNotes => prevNotes.filter(noteToDelete => noteToDelete.id !== note.id));
  };

  return (
    <div className='note'>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Note;
