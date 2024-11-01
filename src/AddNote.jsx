import React, { useState } from 'react'

export default function AddNote({setNotes}) {
    const [noteTitle, setNoteTitle] = useState('');
    const [noteContent, setNoteContent] = useState('');

    function handleAddNote() {
        //no update if its all blank spaces
        if (!noteTitle.trim() || !noteContent.trim()) 
            return(
            setNoteTitle(''),
            setNoteContent('')
        )
        //note structure    
        const newNote = {
            id: Date.now(),
            title: noteTitle,
            content: noteContent
        };

        //update notes array
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
  )
}
