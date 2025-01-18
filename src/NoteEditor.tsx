import React from "react";

interface Props {
  content: string;
}

const NoteEditor: React.FC<Props> = ({ content }) => {
  return (
    <textarea
      className="h-[500px] w-full rounded border border-gray-300 p-2"
      value={content}
    />
  );
};

export default NoteEditor;
