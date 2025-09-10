import { createContext, useContext, useReducer } from "react";

const NotesContext = createContext(null);
const NotesDispatchContext = createContext(null);

function notesReducer(state, { type, payload }) {
  switch (type) {
    case "add": {
      return [...state, payload];
    }
    case "delete": {
      return state.filter((n) => n.id !== payload);
    }
    case "complete": {
      return state.map((note) =>
        note.id === payload ? { ...note, completed: !note.completed } : note
      );
    }
    default:
      return state;
  }
}

export function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(notesReducer, []);
  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext value={dispatch}>{children}</NotesDispatchContext>
    </NotesContext.Provider>
  );
}
export function useNotes() {
  return useContext(NotesContext);
}

export function useNotesDispatch() {
  return useContext(NotesDispatchContext);
}
