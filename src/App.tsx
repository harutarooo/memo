import { useState } from "react";
// import { Note } from "./Note";
// import NoteList from "./NoteList";
import NoteEditor from "./NoteEditor";
import "./App.css";

function App() {
  const [notes, setnotes] = useState<string>("");

  const saveMd = () => {
    if (notes.trim() !== "") {
      const blob = new Blob([notes], { type: "text/markdown" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "note.md";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      // setnotes(""); // エディタをクリア
    } else {
      alert("内容を入力してください。");
    }
  };

  return (
    <div className="flex w-screen">
      <div className="flex-1 p-4">
        <div className="mb-4 flex justify-between">
          <h2 className="text-xl font-bold">Note Editor</h2>
          <button
            className="rounded bg-green-500 p-2 font-bold text-white"
            onClick={saveMd}
          >
            Save
          </button>
        </div>
        <NoteEditor content={notes} onChange={setnotes} />
      </div>
    </div>
  );
}

export default App;
