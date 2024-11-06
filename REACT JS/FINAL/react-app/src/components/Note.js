import React from "react";

function Note({ title, date, body }) {
  return (
    <div className="note">
      <h3 className="title">{title}</h3>
      <p className="date">{date}</p>
      <p className="text">{body}</p>
    </div>
  );
}

export default Note;
