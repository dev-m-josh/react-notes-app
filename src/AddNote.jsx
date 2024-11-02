import React, { useState } from 'react';

export default function AddNote({ setNotes }) {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');

  //generate random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  function handleAddNote() {
    if (!noteTitle.trim() || !noteContent.trim()) {
      setNoteTitle('');
      setNoteContent('');
      return;
    }

    const newNote = {
      id: Date.now(),
      title: noteTitle,
      content: noteContent,
      backgroundColor: getRandomColor(), // Generate a random color for this note
    };

    setNotes(prevNotes => [...prevNotes, newNote]);
    setNoteTitle('');
    setNoteContent('');
  }

  return (
    <div className='header'>
      <input
        type="text"
        value={noteTitle}
        onChange={(e) => setNoteTitle(e.target.value)}
        placeholder='Title'
      />
      <textarea
        value={noteContent}
        onChange={(e) => setNoteContent(e.target.value)}
        placeholder='Write your notes...'
      />
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
}
