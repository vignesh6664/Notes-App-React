import React, { useState } from "react";

const AddNotes = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const handleChange = (event) => {
    if (charCountLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };
  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };
  const charCountLimit = 200;
  return (
    <div className="notes new">
      <textarea
        cols="10"
        rows="8"
        placeholder="Type your notes to add"
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{charCountLimit - noteText.length} Remaning</small>
        <button className="save" onClick={() => handleSaveClick()}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNotes;
