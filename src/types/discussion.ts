export type ForumMessage = {
  id: string;
  content: string;
  timestamp: number;
  likes: number;
  parentId?: string; // If this is a reply, the ID of the parent message
  profileId: string; // ID of the profile being discussed
  author?: string; // Optional author name, defaults to "Anonymous"
};

export type MessageFilter = {
  sortBy: 'newest' | 'oldest' | 'popular';
  showRepliesOnly: boolean;
  searchTerm: string;
};

export type DiscussionStats = {
  totalMessages: number;
  totalLikes: number;
  mostLikedMessageId?: string;
};
