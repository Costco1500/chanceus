import React from 'react';
import { BarChart2 } from 'lucide-react';
import { GameState } from '../types';

interface Props {
  stats: GameState;
}

export const Stats: React.FC<Props> = ({ stats }) => {
  return (
    <div className="mt-8 max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <BarChart2 className="w-6 h-6" />
          Statistics
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold">{stats.gamesPlayed}</p>
            <p className="text-gray-600">Played</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">
              {stats.gamesPlayed > 0
                ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100)
                : 0}%
            </p>
            <p className="text-gray-600">Win Rate</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">{stats.streak}</p>
            <p className="text-gray-600">Current Streak</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">{stats.maxStreak}</p>
            <p className="text-gray-600">Max Streak</p>
          </div>
        </div>
      </div>
    </div>
  );
};