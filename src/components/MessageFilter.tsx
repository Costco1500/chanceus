import React from 'react';
import { MessageFilter as MessageFilterType } from '../types/discussion';
import { Search, ArrowUpDown, MessageSquare } from 'lucide-react';

interface Props {
  filter: MessageFilterType;
  onChange: (filter: MessageFilterType) => void;
}

export const MessageFilter: React.FC<Props> = ({ filter, onChange }) => {
  const handleSortChange = (sortBy: 'newest' | 'oldest' | 'popular') => {
    onChange({ ...filter, sortBy });
  };

  const handleToggleReplies = () => {
    onChange({ ...filter, showRepliesOnly: !filter.showRepliesOnly });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...filter, searchTerm: e.target.value });
  };

  return (
    <div className="bg-gray-50 rounded-lg p-4 space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="text-sm font-medium text-gray-700 mb-1 block">Sort By</label>
          <div className="flex gap-2">
            <button
              onClick={() => handleSortChange('newest')}
              className={`px-3 py-1 text-sm rounded-lg flex items-center gap-1 ${
                filter.sortBy === 'newest'
                  ? 'bg-blue-100 text-blue-800 font-medium'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <ArrowUpDown className="w-3 h-3" />
              Newest
            </button>
            <button
              onClick={() => handleSortChange('oldest')}
              className={`px-3 py-1 text-sm rounded-lg flex items-center gap-1 ${
                filter.sortBy === 'oldest'
                  ? 'bg-blue-100 text-blue-800 font-medium'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <ArrowUpDown className="w-3 h-3" />
              Oldest
            </button>
            <button
              onClick={() => handleSortChange('popular')}
              className={`px-3 py-1 text-sm rounded-lg flex items-center gap-1 ${
                filter.sortBy === 'popular'
                  ? 'bg-blue-100 text-blue-800 font-medium'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <ArrowUpDown className="w-3 h-3" />
              Popular
            </button>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">Message Type</label>
          <button
            onClick={handleToggleReplies}
            className={`px-3 py-1 text-sm rounded-lg flex items-center gap-1 ${
              filter.showRepliesOnly
                ? 'bg-blue-100 text-blue-800 font-medium'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <MessageSquare className="w-3 h-3" />
            {filter.showRepliesOnly ? 'Show All' : 'Only Replies'}
          </button>
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">Search Messages</label>
        <div className="relative">
          <input
            type="text"
            value={filter.searchTerm}
            onChange={handleSearchChange}
            placeholder="Search discussions..."
            className="w-full px-3 py-2 pl-9 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
        </div>
      </div>
    </div>
  );
};
