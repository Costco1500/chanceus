import React, { useState, useEffect } from 'react';
import { Share2, Trophy, ChevronDown, ChevronUp, Info } from 'lucide-react';
import { CollegeGuess } from '../types';
import { collegeInsights } from '../data/collegeInsights';

interface Props {
  guesses: CollegeGuess[];
  finalChoice: string;
  onShare: () => void;
  animateResults: boolean;
}

export const Results: React.FC<Props> = ({ guesses, finalChoice, onShare, animateResults }) => {
  const [expandedGuess, setExpandedGuess] = useState<string | null>(null);
  const [showInsight, setShowInsight] = useState<string | null>(null);

  const statusColors = {
    correct: 'bg-green-500',
    waitlisted: 'bg-yellow-500',
    incorrect: 'bg-red-500',
    unselected: 'bg-gray-300'
  };

  const statusText = {
    correct: '✓ Accepted',
    waitlisted: '⌛ Waitlisted',
    incorrect: '✗ Rejected',
    unselected: '○ Not Selected'
  };
  
  // Animation delay for each result card
  const getAnimationDelay = (index: number) => {
    return `${index * 0.2}s`;
  };

  return (
    <div className="mt-8 max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Trophy className="w-6 h-6" />
            Results
          </h2>
          <button
            onClick={onShare}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </div>

        <div className="space-y-3">
          {guesses.map((guess, index) => (
            <div 
              key={guess.name}
              className={`border rounded-lg overflow-hidden transition-all duration-500 ease-out
                ${animateResults ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
              `}
              style={{ transitionDelay: getAnimationDelay(index) }}
            >
              <div 
                className={`p-4 ${statusColors[guess.status]} text-white flex justify-between items-center`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{guess.name}</span>
                  <span className="text-sm">{statusText[guess.status]}</span>
                  {guess.status === 'correct' && guess.name === finalChoice && (
                    <span className="bg-white text-green-600 text-xs px-2 py-1 rounded-full font-bold">
                      Final Choice
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowInsight(showInsight === guess.name ? null : guess.name)}
                    className="p-1 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors"
                    aria-label="Show college insights"
                  >
                    <Info className="w-5 h-5" />
                  </button>
                  {guess.explanation && (
                    <button
                      onClick={() => setExpandedGuess(expandedGuess === guess.name ? null : guess.name)}
                      className="p-1 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors"
                    >
                      {expandedGuess === guess.name ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  )}
                </div>
              </div>
              
              {showInsight === guess.name && collegeInsights[guess.name] && (
                <div className="bg-blue-50 p-4 border-b border-blue-100 animate-fadeIn">
                  <h4 className="font-semibold mb-2">College Insights:</h4>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    <div>
                      <p className="text-gray-600">Acceptance Rate:</p>
                      <p className="font-medium">{collegeInsights[guess.name].acceptanceRate}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Median SAT:</p>
                      <p className="font-medium">{collegeInsights[guess.name].medianStats.sat}</p>
                    </div>
                    <div className="col-span-2 mt-2">
                      <p className="text-gray-600">Key Factors:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {collegeInsights[guess.name].keyFactors.map(factor => (
                          <span key={factor} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                            {factor}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="col-span-2 mt-2">
                      <p className="text-gray-600">Unique Traits:</p>
                      <p className="font-medium">{collegeInsights[guess.name].uniqueTraits}</p>
                    </div>
                  </div>
                </div>
              )}
              
              {expandedGuess === guess.name && guess.explanation && (
                <div className="p-4 bg-gray-50 animate-fadeIn">
                  <h4 className="font-semibold mb-2">Why this decision?</h4>
                  <p className="text-gray-700">{guess.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};