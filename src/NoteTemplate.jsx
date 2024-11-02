import React from 'react';

const NoteTemplate = ({ note, setNotes }) => {
  const handleDelete = () => {
    setNotes(prevNotes => prevNotes.filter(noteToDelete => noteToDelete.id !== note.id));
  };

  return (
    <div className='note' style={{ backgroundColor: note.backgroundColor }}>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={handleDelete}>✖</button>
    </div>
  );
};

export default NoteTemplate;
