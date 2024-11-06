import React from "react";
import Archive from "./buttons/Archive";
import Delete from "./buttons/Delete";
import Unarchive from "./buttons/Unarchive";
import Note from "./Note";
import { tanggalFormat } from "../utils/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbTack } from "@fortawesome/free-solid-svg-icons";

function NoteItem({ id, title, body, createdAt, archived, onDelete, onArchive, onUnarchive }) {
  return (
    <div className="item">
      <div className="pin">
      {
        archived ? <FontAwesomeIcon icon={faThumbTack} /> : ''
      }
      </div>
      <Note title={title} date={tanggalFormat(createdAt)} body={body} />

      <div className="btn">
        <Delete id={id} onDelete={onDelete} />
        {
          archived ? <Unarchive id={id} onUnarchive={onUnarchive} />:<Archive id={id} onArchive={onArchive} />
        }
      </div>
    </div>
  );
}

export default NoteItem;
