import React from 'react';
import { StudentProfile as StudentProfileType } from '../types';
import { GraduationCap, Award, BookOpen, Users, Star, Trophy } from 'lucide-react';

interface Props {
  profile: StudentProfileType;
}

export const StudentProfile: React.FC<Props> = ({ profile }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <div className="space-y-6">
        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <GraduationCap className="w-6 h-6" />
            Academic Profile
          </h2>
          <div className="grid grid-cols-2 gap-4 mt-3">
            <div>
              <p className="text-gray-600">GPA</p>
              <p className="font-semibold">{profile.academicStats.gpa}</p>
            </div>
            {profile.academicStats.classRank && (
              <div>
                <p className="text-gray-600">Class Rank</p>
                <p className="font-semibold">{profile.academicStats.classRank}</p>
              </div>
            )}
            {profile.academicStats.satScore && (
              <div>
                <p className="text-gray-600">SAT</p>
                <p className="font-semibold">{profile.academicStats.satScore}</p>
              </div>
            )}
            {profile.academicStats.actScore && (
              <div>
                <p className="text-gray-600">ACT</p>
                <p className="font-semibold">{profile.academicStats.actScore}</p>
              </div>
            )}
          </div>
        </div>

        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Trophy className="w-6 h-6" />
            Awards
          </h2>
          <div className="space-y-3 mt-3">
            {profile.awards && profile.awards.length > 0 ? (
              profile.awards.map((award, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded">
                  <div className="flex justify-between">
                    <p className="font-semibold">{award.name}</p>
                    <span className={`text-sm px-2 py-1 rounded ${
                      award.level === 'National' ? 'bg-blue-100 text-blue-800' : 
                      award.level === 'International' ? 'bg-purple-100 text-purple-800' : 
                      award.level === 'State' ? 'bg-green-100 text-green-800' : 
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {award.level}
                    </span>
                  </div>
                  {award.description && (
                    <p className="text-sm text-gray-600 mt-1">{award.description}</p>
                  )}
                  <p className="text-sm text-gray-500 mt-1">{award.year}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 italic">No awards listed</p>
            )}
          </div>
        </div>

        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Award className="w-6 h-6" />
            Activities
          </h2>
          <div className="space-y-3 mt-3">
            {profile.activities.map((activity, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded">
                <p className="font-semibold">{activity.name} - {activity.role}</p>
                <p className="text-sm text-gray-600">{activity.description}</p>
                <p className="text-sm text-gray-500">{activity.yearsInvolved} years</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <BookOpen className="w-6 h-6" />
            Essays
          </h2>
          <div className="space-y-3 mt-3">
            {profile.essays.map((essay, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded">
                <p className="font-semibold">{essay.topic}</p>
                <p className="text-sm text-gray-600">{essay.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Star className="w-6 h-6" />
            Recommendations
          </h2>
          <div className="space-y-2 mt-3">
            {profile.recommendations.map((rec, index) => (
              <div key={index} className="flex justify-between items-center">
                <span>{rec.source}</span>
                <span className="text-green-600 font-semibold">{rec.strength}</span>
              </div>
            ))}
          </div>
        </div>

        {profile.demographics && (
          <div>
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Users className="w-6 h-6" />
              Demographics
            </h2>
            <div className="mt-3 space-y-1">
              <p>Background: {profile.demographics.type}</p>
              <p>First Generation: {profile.demographics.firstGen ? 'Yes' : 'No'}</p>
              <p>International: {profile.demographics.international ? 'Yes' : 'No'}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
