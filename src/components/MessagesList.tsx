import React from 'react';
import { ForumMessage } from '../types/discussion';
import { MessageCard } from './MessageCard';

interface Props {
  messages: ForumMessage[];
  allMessages: ForumMessage[];
  onReply: (content: string, parentId: string) => void;
  onLike: (messageId: string) => void;
}

export const MessagesList: React.FC<Props> = ({ messages, allMessages, onReply, onLike }) => {
  // Sort messages by timestamp (newest first)
  const sortedMessages = [...messages].sort((a, b) => b.timestamp - a.timestamp);

  // Get replies for a specific message
  const getReplies = (messageId: string) => {
    return allMessages.filter(message => message.parentId === messageId)
      .sort((a, b) => a.timestamp - b.timestamp);
  };

  return (
    <div className="space-y-4 mt-6">
      {sortedMessages.map(message => (
        <div key={message.id} className="border-b pb-4 last:border-b-0 last:pb-0">
          <MessageCard 
            message={message} 
            onReply={onReply} 
            onLike={onLike} 
          />
          
          {/* Replies */}
          <div className="ml-8 mt-3 space-y-3">
            {getReplies(message.id).map(reply => (
              <MessageCard 
                key={reply.id} 
                message={reply} 
                isReply={true}
                onReply={onReply} 
                onLike={onLike} 
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};