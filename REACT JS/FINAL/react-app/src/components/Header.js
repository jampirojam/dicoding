import React from "react";
import Search from "./Search";

function Header({ searchNote }) {
  return (
    <header className="header">
        <h1>Notes</h1>
        <Search searchNote={searchNote} />
    </header>
  );
}

export default Header;
