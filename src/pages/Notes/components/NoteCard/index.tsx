import { NoteCardWrapper, ActionButton, NoteDateWrapper } from "../../styles";
import { BiEdit, BiTrash } from "react-icons/bi";
import { INoteCardProps } from "../../types";
import moment from "moment";

export function NoteCard({
  note,
  handleEditNote,
  onDeleteNote,
}: INoteCardProps) {
  const { id, description, color, updatedAt } = note;
  const updated = moment(updatedAt);
  return (
    <NoteCardWrapper 
      noteColor={color}
      onDoubleClick={() => handleEditNote(id)}
    >
      <div className="cardHeader"></div>
      <div className="cardBody">
        <div className="cardMenu">
          <div>
            <BiEdit
              style={ActionButton}
              size={22}
              onClick={() => handleEditNote(id)}
            />
            <BiTrash
              style={ActionButton}
              size={22}
              onClick={() => onDeleteNote(id)}
            />
          </div>
        </div>
        <p>{description}</p>
        <NoteDateWrapper>
          <p>{`${updated.format("YYYY.MM.DD")} : ${updated.format(
            "HH:mm"
          )}`}</p>
        </NoteDateWrapper>
      </div>
    </NoteCardWrapper>
  );
}
