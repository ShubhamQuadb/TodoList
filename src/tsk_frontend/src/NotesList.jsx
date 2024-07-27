import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import emptyImage from './assets/empty.png'; // Adjust the path according to your project structure
import './NotesList.css'; // Import the CSS file

function NotesList({ notes, deleteNote, editNote, toggleComplete }) {
  if (notes.length === 0) {
    return (
      <div className="empty-state">
        <img src={emptyImage} alt="Empty" className="empty-image" />
        <p className="empty-text">Empty...</p>
      </div>
    );
  }

  return (
    <ul className="notes-list space-y-2">
      {notes.map((note, index) => (
        <li key={index} className="flex items-center space-x-2">
          <Checkbox
            checked={note.completed}
            onChange={() => toggleComplete(index)}
            sx={{ color: 'blue' }}
          />
          <span className={`flex-grow ${note.completed ? 'line-through' : ''}`}>{note.text}</span>
          <div className="flex items-center space-x-1">
            <img
              src="/image/Vector.png"
              alt="Edit"
              className="icon edit-icon"
              style={{ width: '1em', cursor: 'pointer', margin: 1, padding: 10 }}
              onClick={() => editNote(index)}
            />
            <img
              src="/image/trash-svgrepo-com 1.png"
              alt="Delete"
              className="icon delete-icon"
              style={{ width: '1em', cursor: 'pointer', margin: 0, padding: 0 }}
              onClick={() => deleteNote(index)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default NotesList;
