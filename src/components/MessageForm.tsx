import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface Props {
  onSubmit: (content: string) => void;
  placeholder?: string;
  buttonText?: string;
}

export const MessageForm: React.FC<Props> = ({ 
  onSubmit, 
  placeholder = "Share your thoughts on this profile...", 
  buttonText = "Post"
}) => {
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!content.trim()) return;
    
    setIsSubmitting(true);
    onSubmit(content.trim());
    setContent('');
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={placeholder}
          className="w-full p-3 outline-none resize-none"
          rows={3}
        />
        
        <div className="bg-gray-50 px-3 py-2 flex justify-end">
          <button
            type="submit"
            disabled={!content.trim() || isSubmitting}
            className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-colors ${
              !content.trim() || isSubmitting
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isSubmitting ? 'Posting...' : buttonText}
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </form>
  );
};