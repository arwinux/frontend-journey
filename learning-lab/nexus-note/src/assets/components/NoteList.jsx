import NoteStatus from "./NoteStatus";

function NoteList({ notes, onDelete, onComplete, sortBy }) {
  let sortedNotes = notes;

  if (sortBy === "earliest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    ); // a - b

  if (sortBy === "latest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    ); // b - a => a > b ? -1 : 1

  if (sortBy === "completed")
    sortedNotes = [...notes].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );

  return (
    <div className="lg:w-2/3 w-full flex flex-col items-center hover:scale-[103%] transition-all text-zinc-300 p-8 bg-gray-800 ring-4 ring-gray-800 ring-offset-4 ring-offset-[#EBE3D5] rounded-2xl">
      <div className="w-full flex flex-col gap-4 mb-5">
        <h2 className="text-3xl font-bold text-center">Notes Overview</h2>
        <NoteStatus notes={notes} />
      </div>

      <div className="w-full flex flex-col gap-y-4 justify-center items-center">
        {/* Start notes List */}
        {sortedNotes.map((note, index) => (
          <NoteItem
            key={note.id}
            note={note}
            noteid={index + 1}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}

        {/* End notes list */}
      </div>
    </div>
  );
}

export default NoteList;

function NoteItem({ note, noteid, onDelete, onComplete }) {
  const option = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div
      className={`w-full hover:scale-[103%] transition-all flex flex-col text-slate-800 rounded-lg border-b-8 border-zinc-500 font-medium bg-[#EBE3D5] ${
        note.completed ? "opacity-50" : ""
      } px-4 py-2`}
    >
      <div className="flex justify-between">
        <div className="flex justify-center items-center gap-2">
          <span className="bg-[#77bad1] px-3 border h-5 flex items-center rounded-2xl">
            {noteid}
          </span>
          <h2
            className={`text-lg font-bold p-2 ${
              note.completed ? "line-through" : ""
            }`}
          >
            {note.title}
          </h2>
        </div>
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => onDelete(note.id)}
            className="size-8 bg-red-500 hover:bg-red-600 transition-all p-1.5 rounded-lg text-black cursor-pointer"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <g fill="#fff">
                <path d="M3 6.39c0-.49.35-.88.77-.88h2.67c.53-.02 1-.4 1.17-.97l.03-.1.12-.39c.07-.24.13-.45.21-.63.34-.74.97-1.26 1.7-1.39.17-.03.37-.03.6-.03h3.47c.22 0 .42 0 .6.03.72.13 1.35.65 1.69 1.39.08.18.14.4.21.63l.12.4.03.1c.18.56.74.94 1.27.96h2.57c.42 0 .77.4.77.88s-.35.87-.77.87H3.77c-.42 0-.77-.39-.77-.87Z" />
                <path
                  fillRule="evenodd"
                  d="M11.6 22h.8c2.79 0 4.18 0 5.08-.89.9-.88 1-2.33 1.19-5.24l.26-4.19c.1-1.58.15-2.36-.3-2.86-.45-.5-1.22-.5-2.75-.5H8.12c-1.53 0-2.3 0-2.75.5-.45.5-.4 1.28-.3 2.86l.26 4.19c.19 2.9.28 4.36 1.19 5.24.9.89 2.3.89 5.08.89Zm-1.35-9.81a.76.76 0 0 0-.82-.7.78.78 0 0 0-.68.86l.5 5.26c.04.43.41.75.82.7a.78.78 0 0 0 .68-.86l-.5-5.26Zm4.32-.7c.42.04.72.42.68.86l-.5 5.26a.76.76 0 0 1-.82.7.78.78 0 0 1-.68-.86l.5-5.26c.04-.44.41-.75.82-.7Z"
                  clipRule="evenodd"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>

      <div className="w-11/12">
        <p className="text-gray-500 break-words">{note.description}</p>
      </div>

      <div className="flex justify-between items-center text-sm mt-2">
        <div className="flex items-center justify-center gap-1 bg-[#D2DE32] px-3 border h-5 rounded-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h8M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
          <span className="text-sm">
            {new Date(note.createdAt).toLocaleDateString("en-Us", option)}
          </span>
        </div>
        <div>
          <input
            className="size-8 hover:bg-green-600 rounded-lg focus:ring-green-600 text-green-600 cursor-pointer"
            type="checkbox"
            name={note.id}
            id={note.id}
            value={note.id}
            checked={note.completed}
            onChange={onComplete}
          />
        </div>
      </div>
    </div>
  );
}
