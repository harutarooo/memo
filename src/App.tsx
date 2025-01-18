import { useState } from "react";
import { Note } from "./Note";
import NoteList from "./NoteList";
import NoteEditor from "./NoteEditor";
import "./App.css";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  // useEffect(() => {
  //   fetchNotes();
  // }, []);

  const fetchNotes = async () => {
    // TODO：処理を追加
  };

  const handleNewNote = () => {
    // TODO: 処理を追加
  };

  return (
    <div className="flex w-screen">
      <div className="w-[300px] bg-gray-100 p-4">
        <div className="mb-4">
          <button
            className="w-full rounded bg-blue-500 p-2 font-bold text-white"
            onClick={handleNewNote}
          >
            新規作成
          </button>
        </div>
        <NoteList notes={notes} />
      </div>
      <div className="flex-1 p-4">
        <div className="mb-4 flex justify-between">
          <h2 className="text-xl font-bold">Note Editor</h2>
          <button className="rounded bg-green-500 p-2 font-bold text-white">
            Preview
          </button>
        </div>
        <NoteEditor content={notes[0]?.content} />
      </div>
    </div>
  );
}

export default App;
