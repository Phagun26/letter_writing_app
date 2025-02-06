import React from 'react';

interface ChatMessageProps {
  isBot: boolean;
  message: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ isBot, message }) => {
  return (
    <div className="w-full max-w-2xl mx-auto mb-4">
      <div className={`p-6 rounded-lg shadow-md ${
        isBot 
          ? 'bg-white' 
          : 'bg-blue-50'
      }`}>
        {isBot ? (
          <div className="flex items-start gap-4">
            <span className="text-blue-500 text-xl flex-shrink-0">✦</span>
            <p className="text-gray-800 whitespace-pre-line">{message}</p>
          </div>
        ) : (
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white">
                P
              </div>
            </div>
            <p className="text-gray-800 pt-1 whitespace-pre-line">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;