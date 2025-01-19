import React from "react";

interface Props {
  content: string;
  onChange: (content: string) => void;
}

const NoteEditor: React.FC<Props> = ({ content, onChange }) => {
  return (
    <textarea
      className="h-[500px] w-full rounded border border-gray-300 p-2"
      value={content}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
};

export default NoteEditor;
