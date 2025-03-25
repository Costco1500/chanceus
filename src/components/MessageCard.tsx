import React, { useState, useEffect } from 'react';
import { ForumMessage } from '../types/discussion';
import { MessageForm } from './MessageForm';
import { ThumbsUp, Reply, User, Clock } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface Props {
  message: ForumMessage;
  isReply?: boolean;
  onReply: (content: string, parentId: string) => void;
  onLike: (messageId: string) => void;
}

export const MessageCard: React.FC<Props> = ({ 
  message, 
  isReply = false, 
  onReply, 
  onLike 
}) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState<string>('');

  // Calculate and update time remaining
  useEffect(() => {
    const updateTimeRemaining = () => {
      const now = Date.now();
      const timeLeft = message.expiresAt - now;
      
      if (timeLeft <= 0) {
        setTimeRemaining('Expired');
        return;
      }
      
      // Convert to hours and minutes
      const hours = Math.floor(timeLeft / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      
      if (hours > 0) {
        setTimeRemaining(`${hours}h ${minutes}m left`);
      } else {
        setTimeRemaining(`${minutes}m left`);
      }
    };
    
    // Update immediately
    updateTimeRemaining();
    
    // Update every minute
    const interval = setInterval(updateTimeRemaining, 60 * 1000);
    
    return () => clearInterval(interval);
  }, [message.expiresAt]);

  const handleSubmitReply = (content: string) => {
    onReply(content, message.id);
    setShowReplyForm(false);
  };

  const formattedDate = formatDistanceToNow(new Date(message.timestamp), { addSuffix: true });

  return (
    <div className={`bg-gray-50 rounded-lg p-4 ${isReply ? 'border-l-4 border-blue-200' : ''}`}>
      <div className="flex items-center gap-2 mb-2">
        <div className="bg-blue-100 text-blue-800 rounded-full p-1">
          <User className="w-4 h-4" />
        </div>
        <span className="text-sm font-medium">Anonymous</span>
        <span className="text-xs text-gray-500">{formattedDate}</span>
        <div className="ml-auto flex items-center text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
          <Clock className="w-3 h-3 mr-1" />
          {timeRemaining}
        </div>
      </div>
      
      <p className="text-gray-700 mb-3">{message.content}</p>
      
      <div className="flex gap-4">
        <button 
          onClick={() => onLike(message.id)} 
          className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600"
        >
          <ThumbsUp className="w-4 h-4" />
          <span>{message.likes}</span>
        </button>
        
        <button 
          onClick={() => setShowReplyForm(!showReplyForm)}
          className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600"
        >
          <Reply className="w-4 h-4" />
          <span>{showReplyForm ? 'Cancel' : 'Reply'}</span>
        </button>
      </div>
      
      {showReplyForm && (
        <div className="mt-3 pl-3 border-l-2 border-gray-200 animate-fadeIn">
          <MessageForm 
            onSubmit={handleSubmitReply} 
            placeholder="Write a reply..." 
            buttonText="Reply"
          />
        </div>
      )}
    </div>
  );
};
