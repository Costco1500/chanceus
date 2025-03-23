import React from 'react';
import { StudentProfile } from '../types';
import { GraduationCap, Check, X, Clock } from 'lucide-react';

interface Props {
  profile: StudentProfile;
}

export const StudentCollegeResults: React.FC<Props> = ({ profile }) => {
  // Sort colleges with accepted first, then waitlisted, then rejected
  // Also place final choice at the top
  const sortedColleges = [...profile.colleges].sort((a, b) => {
    // Final choice always comes first
    if (a.finalChoice) return -1;
    if (b.finalChoice) return 1;
    
    // Then sort by status
    const statusOrder = { Accepted: 0, Waitlisted: 1, Rejected: 2 };
    return statusOrder[a.status] - statusOrder[b.status];
  });

  return (
    <div className="mt-8 max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-6">
          <GraduationCap className="w-6 h-6" />
          Complete College Results
        </h2>
        
        <div className="space-y-4">
          {sortedColleges.map((college, index) => (
            <div 
              key={index}
              className={`border rounded-lg overflow-hidden ${
                college.finalChoice ? 'border-blue-500 border-2' : ''
              }`}
            >
              <div 
                className={`p-4 flex justify-between items-center ${
                  college.status === 'Accepted' ? 'bg-green-100' : 
                  college.status === 'Waitlisted' ? 'bg-yellow-100' : 'bg-red-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${
                    college.status === 'Accepted' ? 'bg-green-500' : 
                    college.status === 'Waitlisted' ? 'bg-yellow-500' : 'bg-red-500'
                  } text-white`}>
                    {college.status === 'Accepted' ? (
                      <Check className="w-5 h-5" />
                    ) : college.status === 'Waitlisted' ? (
                      <Clock className="w-5 h-5" />
                    ) : (
                      <X className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{college.name}</h3>
                    <p className={`text-sm ${
                      college.status === 'Accepted' ? 'text-green-700' : 
                      college.status === 'Waitlisted' ? 'text-yellow-700' : 'text-red-700'
                    }`}>
                      {college.status}
                    </p>
                  </div>
                </div>
                
                {college.finalChoice && (
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Final Choice
                  </div>
                )}
              </div>
              
              {college.explanation && (
                <div className="p-4 bg-white">
                  <h4 className="font-semibold mb-1 text-sm text-gray-600">Why this decision?</h4>
                  <p className="text-gray-800">{college.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Final Choice:</span> {profile.colleges.find(c => c.finalChoice)?.name || 'Not decided'}
          </p>
        </div>
      </div>
    </div>
  );
};
