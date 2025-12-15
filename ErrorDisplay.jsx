import React from 'react';

const ErrorDisplay = ({ error, onDismiss }) => {
  if (!error) return null;

  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 rounded shadow-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-red-500 text-xl mr-3">⚠️</span>
          <div>
            <p className="font-bold text-red-700">Error Parsing File</p>
            <p className="text-sm text-red-600">{error}</p>
          </div>
        </div>
        
        {onDismiss && (
          <button 
            onClick={onDismiss}
            className="text-red-400 hover:text-red-600 font-bold px-2"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorDisplay;