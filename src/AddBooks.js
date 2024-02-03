import React, { useState } from "react";

const AddBooks = () => {
  const [book, setBook] = useState([
    {
      id: 1,
      todo: "Playing Cricket",
      checked: false,
    },
    {
      id: 2,
      todo: "practice coding",
      checked: false,
    },
    {
      id: 3,
      todo: "Listen music",
      checked: false,
    },
  ]);

  const handleAddBook = () => {
    const listitems = book.map((data) => data.id);
    setBook(listitems);
  };
  return (
    <div>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input type="text" value={book} onChange={(e) => e.target.value} />
        <button onClick={() => handleAddBook(book.id)}>Add Book</button>
      </form>
    </div>
  );
};

export default AddBooks;
