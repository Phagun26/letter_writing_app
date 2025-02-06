import React from 'react';

interface ActionButtonsProps {
  onHelp: () => void;
  onSkip: () => void;
  onEnd: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onHelp, onSkip, onEnd }) => {
  return (
    <div className="flex gap-4 mb-4 justify-center">
      <button
        onClick={onHelp}
        className="px-4 py-2 text-sm text-gray-600 bg-white rounded-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:bg-gray-50 transition-colors"
      >
        Help me answer
      </button>
      <button
        onClick={onSkip}
        className="px-4 py-2 text-sm text-gray-600 bg-white rounded-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:bg-gray-50 transition-colors"
      >
        Skip question
      </button>
      <button
        onClick={onEnd}
        className="px-4 py-2 text-sm text-gray-600 bg-white rounded-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:bg-gray-50 transition-colors flex items-center gap-2"
      >
        <span>End chat & continue</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14m0 0l-6-6m6 6l-6 6"
          />
        </svg>
      </button>
    </div>
  );
};

export default ActionButtons;