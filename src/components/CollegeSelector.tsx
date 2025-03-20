import React from 'react';
import { School } from 'lucide-react';

interface Props {
  colleges: string[];
  selectedColleges: string[];
  onSelect: (college: string) => void;
  maxSelections: number;
}

export const CollegeSelector: React.FC<Props> = ({
  colleges,
  selectedColleges,
  onSelect,
  maxSelections
}) => {
  return (
    <div className="mt-8 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <School className="w-6 h-6" />
        Select Colleges ({selectedColleges.length}/{maxSelections})
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {colleges.map(college => (
          <button
            key={college}
            onClick={() => onSelect(college)}
            className={`p-3 rounded-lg text-center transition-colors ${
              selectedColleges.includes(college)
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            } ${
              selectedColleges.length >= maxSelections && !selectedColleges.includes(college)
                ? 'opacity-50 cursor-not-allowed'
                : ''
            }`}
            disabled={selectedColleges.length >= maxSelections && !selectedColleges.includes(college)}
          >
            {college}
          </button>
        ))}
      </div>
    </div>
  );
};