export type ForumMessage = {
  id: string;
  content: string;
  timestamp: number;
  likes: number;
  parentId?: string;
  profileId: string;
  expiresAt: number; // New field to track when the message expires
};

export type MessageFilter = {
  sortBy: 'newest' | 'oldest' | 'popular';
  showRepliesOnly: boolean;
  searchTerm: string;
};
