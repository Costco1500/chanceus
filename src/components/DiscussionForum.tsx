import React, { useState, useEffect } from 'react';
import { collection, query, where, orderBy, getDocs, addDoc, updateDoc, doc, onSnapshot, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { ForumMessage, MessageFilter } from '../types/discussion';
import { MessageForm } from './MessageForm';
import { MessagesList } from './MessagesList';
import { MessageFilter as FilterComponent } from './MessageFilter';
import { MessageCircle, Filter } from 'lucide-react';

interface Props {
  profileId: string;
  refreshTrigger?: number; // Optional prop to trigger refreshes
}

export const DiscussionForum: React.FC<Props> = ({ profileId, refreshTrigger = 0 }) => {
  const [messages, setMessages] = useState<ForumMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<MessageFilter>({
    sortBy: 'newest',
    showRepliesOnly: false,
    searchTerm: '',
  });
  const [showFilters, setShowFilters] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Calculate expiration date (24 hours from now)
  const calculateExpirationDate = (): number => {
    const now = Date.now();
    const oneDayInMs = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    return now + oneDayInMs;
  };

  // Clean up expired messages
  const cleanupExpiredMessages = async () => {
    try {
      const now = Date.now();
      const messagesRef = collection(db, 'messages');
      const q = query(messagesRef, where('expiresAt', '<=', now));
      
      const snapshot = await getDocs(q);
      
      // Delete expired messages
      const deletePromises = snapshot.docs.map(document => 
        deleteDoc(doc(db, 'messages', document.id))
      );
      
      await Promise.all(deletePromises);
      console.log(`Cleaned up ${snapshot.size} expired messages`);
    } catch (error) {
      console.error('Error cleaning up expired messages:', error);
    }
  };

  // Fetch messages from Firestore with real-time updates
  useEffect(() => {
    setLoading(true);
    setError(null);
    
    // Cleanup expired messages when component mounts
    cleanupExpiredMessages();
    
    const messagesRef = collection(db, 'messages');
    const q = query(
      messagesRef,
      where('profileId', '==', profileId),
      where('expiresAt', '>', Date.now()), // Only get non-expired messages
      orderBy('timestamp', 'desc') // Order by timestamp
    );

    // Use onSnapshot for real-time updates
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedMessages: ForumMessage[] = [];
      
      snapshot.forEach((doc) => {
        const data = doc.data();
        fetchedMessages.push({
          id: doc.id,
          content: data.content,
          timestamp: data.timestamp,
          likes: data.likes || 0,
          parentId: data.parentId || undefined,
          profileId: data.profileId,
          expiresAt: data.expiresAt
        });
      });
      
      setMessages(fetchedMessages);
      setLoading(false);
    }, (err) => {
      console.error("Error fetching messages:", err);
      setError("Failed to fetch messages. Please try again later.");
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => {
      unsubscribe();
    };
  }, [profileId, refreshTrigger]); // Add refreshTrigger dependency to re-fetch when it changes

  // Filter messages based on current filter settings
  const filteredMessages = messages.filter(message => {
    // Filter by search term
    if (filter.searchTerm && !message.content.toLowerCase().includes(filter.searchTerm.toLowerCase())) {
      return false;
    }
    
    // Filter by type (top-level or replies)
    if (filter.showRepliesOnly && !message.parentId) {
      return false;
    }
    
    return true;
  });

  // Get top-level messages (not replies)
  const topLevelMessages = filteredMessages.filter(message => !message.parentId);
  
  // Post a new message
  const handlePostMessage = async (content: string, parentId?: string) => {
    try {
      const expiresAt = calculateExpirationDate();
      
      // Save to Firestore
      await addDoc(collection(db, 'messages'), {
        content,
        profileId,
        timestamp: Date.now(),
        likes: 0,
        parentId: parentId || null,
        expiresAt, // Add expiration date
      });
      
      // Optimistically update the UI
      const newMessage: ForumMessage = {
        id: `temp-${Date.now()}`, // Temporary ID for optimistic UI
        content,
        profileId,
        timestamp: Date.now(),
        likes: 0,
        parentId,
        expiresAt,
      };
      
      setMessages(prev => [newMessage, ...prev]);
    } catch (error) {
      console.error('Error posting message:', error);
      setError("Failed to post message. Check console for details.");
    }
  };

  // Like a message
  const handleLikeMessage = async (messageId: string) => {
    try {
      const messageRef = doc(db, 'messages', messageId);
      const message = messages.find(m => m.id === messageId);
      
      if (message) {
        // Optimistic update
        setMessages(prevMessages => 
          prevMessages.map(msg => 
            msg.id === messageId ? { ...msg, likes: msg.likes + 1 } : msg
          )
        );
        
        await updateDoc(messageRef, {
          likes: message.likes + 1
        });
      }
    } catch (error) {
      console.error('Error liking message:', error);
      setError("Failed to like message. Check console for details.");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <MessageCircle className="w-6 h-6" />
          Discussion Forum
          <span className="text-xs text-gray-500 font-normal ml-2">(Messages expire after 24 hours)</span>
        </h2>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
        >
          <Filter className="w-4 h-4" />
          <span className="text-sm">Filters</span>
        </button>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {showFilters && (
        <div className="mb-6 animate-fadeIn">
          <FilterComponent 
            filter={filter} 
            onChange={setFilter} 
          />
        </div>
      )}

      <MessageForm onSubmit={(content) => handlePostMessage(content)} />

      {loading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading discussions...</p>
        </div>
      ) : (
        <MessagesList 
          messages={topLevelMessages} 
          allMessages={messages}
          onReply={handlePostMessage}
          onLike={handleLikeMessage}
        />
      )}

      {!loading && topLevelMessages.length === 0 && !error && (
        <div className="text-center py-8 bg-gray-50 rounded-lg mt-4">
          <p className="text-gray-600">Be the first to start a discussion about this profile!</p>
        </div>
      )}

      <div className="mt-4 text-xs text-gray-500 text-center">
        <p>Messages count: {messages.length}</p>
      </div>
    </div>
  );
};
