import React from 'react';

const FileCounter = ({ files = [] }) => {
  return (
    <div className="p-3 bg-gray-100 rounded-md border border-gray-300 inline-block">
      <span className="font-semibold text-gray-700">
        {files.length} files selected
      </span>
    </div>
  );
};

export default FileCounter;