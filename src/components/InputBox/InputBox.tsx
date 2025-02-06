import React, { useState } from 'react';

interface InputBoxProps {
  onSubmit: (message: string) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSubmit(input);
      setInput('');
    }
  };

  return (
    <div className="relative z-10 w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write your answer"
          className="w-full px-6 py-4 pr-16 bg-white rounded-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-gray-100 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors flex items-center justify-center"
        >
          <svg
            className="w-6 h-6"
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
      </form>
    </div>
  );
};

export default InputBox;