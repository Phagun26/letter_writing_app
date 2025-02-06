'use client';

import React, { useState } from 'react';
import Header from '@/components/Header/Header';
import ChatMessage from '@/components/ChatMessage/ChatMessage';
import InputBox from '@/components/InputBox/InputBox';
import ActionButtons from '@/components/ActionButtons/ActionButtons';
import { Message } from '@/types';

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    {
      content: "Hi!\nLet's get started with your site setup.\nFirst, tell me what your site is all about.",
      timestamp: new Date(),
    }
  ]);
  

  const handleSubmit = (message: string) => {
    setMessages((prev) => [
      ...prev,
      { content: message, timestamp: new Date() },
    ]);
  };

  return (
    <div className="min-h-screen grid-background relative">
      <Header />
      <main className="max-w-4xl mx-auto p-4 pb-40">
        <div className="space-y-6">
          {messages.map((msg, index) => (
            <ChatMessage
              key={index}
              isBot={index % 2 === 0}
              message={msg.content}
            />
          ))}
        </div>
        <div className="fixed bottom-0 left-0 right-0 py-6">
          <div className="max-w-4xl mx-auto px-4">
            <ActionButtons
              onHelp={() => console.log('Help requested')}
              onSkip={() => console.log('Question skipped')}
              onEnd={() => console.log('Chat ended')}
            />
            <InputBox onSubmit={handleSubmit} />
          </div>
        </div>
      </main>
    </div>
  );
}