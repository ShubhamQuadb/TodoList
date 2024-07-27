import React, { useState, useEffect } from 'react';

function NewNoteForm({ addNote, closeModal, currentNote, darkMode }) {
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    if (currentNote) {
      setNewNote(currentNote);
    }
  }, [currentNote]);

  const handleNewNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleApply = () => {
    if (newNote.trim() !== '') {
      addNote(newNote);
      setNewNote('');
    }
  };

  return (
    <div className={`new-note-form bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-full max-w-sm sm:max-w-md ${darkMode ? 'dark' : ''}`}>
      <div className="content-center">
        <h2 className={`text-lg font-bold mb-3 ${darkMode ? 'text-white' : 'text-black'}`}>
          {currentNote ? 'EDIT NOTE' : 'NEW NOTE'}
        </h2>
        <input
          type="text"
          placeholder="Input your note..."
          value={newNote}
          onChange={handleNewNoteChange}
          className={`note-input border-2 rounded-lg px-3 py-2 mb-3 w-full ${darkMode ? 'border-blue-500 text-white bg-gray-800' : 'border-blue-500 text-black bg-white'}`}
        />
      </div>
      <div className="button-container flex justify-between">
        <button
          className={`cancel-button px-4 py-2 border-2 rounded-lg ${darkMode ? 'border-blue-500 text-blue-500' : 'border-blue-500 text-blue-500'}`}
          onClick={closeModal}
        >
          CANCEL
        </button>
        <button
          className={`apply-button px-4 py-2 border-2 rounded-lg ${darkMode ? 'border-blue-500 text-blue-500' : 'border-blue-500 text-blue-500'}`}
          onClick={handleApply}
        >
          APPLY
        </button>
      </div>
    </div>
  );
}

export default NewNoteForm;
