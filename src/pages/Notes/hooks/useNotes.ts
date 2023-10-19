import { useState } from "react";
import { useNotesService } from "../../../services/notes";
import { NoteColors } from "../../../static";
import { Note } from "../../../@types";
import { IUseNotesProps } from "../types";
import validator from 'validator';
import { toast } from 'react-toastify';

export function useNotes({
  handleNoteModalOpen,
  handleConfirmModalOpen,
}: IUseNotesProps) {
  const [currentNote, setCurrentNote] = useState<Note>({
    id: "",
    description: "",
    color: NoteColors[0],
    updatedAt: "",
  });

  const { saveNote, updateNoteById, deleteNoteById, getNoteById, getNotes } =
    useNotesService();

  const [notes, setNotes] = useState<Note[]>(getNotes());

  const [search, setSearch] = useState("");

  const filteredNotes = notes.filter((note) => {
    const { description } = note;
    return (
      description?.toLowerCase().includes(search.toLowerCase())
    );
  });

  function refreshNotes() {
    setNotes(getNotes());
  }

  function handleAddNote() {
    handleNoteModalOpen();
    clearForm();
  }

  function handleNoteForm({ target }: any, field: string) {
    const { value } = target;
    setCurrentNote({
      ...currentNote,
      [field]: value,
    });
  }

  function handleSaveNote(e: FormDataEvent) {
    e.preventDefault();
    if (validator.isLength(currentNote.description, {
      min: 20, max: 300
    })) {
      if (currentNote.id) {
        updateNoteById(currentNote.id, currentNote);
        toast.success('Update successfully', {
          position: toast.POSITION.TOP_RIGHT
        });
      } else {
        saveNote(currentNote);
        toast.success('Create successfully', {
          position: toast.POSITION.TOP_RIGHT
        });
      }
      handleNoteModalOpen();
      refreshNotes();
    } else {
      toast.error('Description length must less 20 and more than 300', {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  function handleEditNote(id: string) {
    setCurrentNote(getNoteById(id));
    handleNoteModalOpen();
  }

  function onDeleteNote(id: string) {
    handleConfirmModalOpen({ id });
  }

  function handleDeleteNote(id: string) {
    deleteNoteById(id);
    toast.success('Delete successfully', {
      position: toast.POSITION.TOP_RIGHT
    });
    refreshNotes();
  }

  function clearForm() {
    setCurrentNote({
      id: "",
      description: "",
      color: NoteColors[0],
      updatedAt: "",
    });
  }

  return {
    handleAddNote,
    handleNoteForm,
    handleSaveNote,
    handleEditNote,
    handleDeleteNote,
    onDeleteNote,
    search,
    setSearch,
    notes: filteredNotes,
    currentNote,
  };
}
