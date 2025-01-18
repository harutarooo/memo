import { Note } from "./Note";

type Props = {
  notes: Note[];
};

const NoteList: React.FC<Props> = ({ notes }) => {
  return (
    <ul className="space-y-2">
      {notes.map((note) => (
        <li
          key={note.id}
          className="flex cursor-pointer justify-between rounded p-2"
        >
          <span>{note.title}</span>
        </li>
      ))}
    </ul>
    // by copilot
    // <div>
    //     {notes.map((note) => (
    //         <div key={note.id} className="p-4 border-b border-gray-300">
    //             <h2 className="text-lg font-bold">{note.title}</h2>
    //             <p className="text-gray-500">{note.content}</p>
    //         </div>
    //     ))}
    // </div>
  );
};

export default NoteList;
