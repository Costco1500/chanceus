import React, { useState } from 'react';
import { UserPlus, Plus, Minus, Send } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import { Activity, StudentProfile } from '../types';

interface Props {
  onClose: () => void;
}

export const ProfileSubmission: React.FC<Props> = ({ onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gpa: '',
    classRank: '',
    satScore: '',
    actScore: '',
    demographics: {
      type: '',
      firstGen: false,
      international: false
    },
    activities: [{ name: '', role: '', description: '', yearsInvolved: 1 }],
    essays: [{ topic: '', description: '' }],
    recommendations: [{ source: '', strength: 'Strong' as const }],
    colleges: [{ name: '', status: 'Accepted' as const, finalChoice: false, explanation: '' }]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDemographicsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData(prev => ({
      ...prev,
      demographics: {
        ...prev.demographics,
        [name]: newValue
      }
    }));
  };

  const handleActivityChange = (index: number, field: keyof Activity, value: string | number) => {
    const updatedActivities = [...formData.activities];
    updatedActivities[index] = {
      ...updatedActivities[index],
      [field]: field === 'yearsInvolved' ? Number(value) : value
    };
    
    setFormData(prev => ({
      ...prev,
      activities: updatedActivities
    }));
  };

  const addActivity = () => {
    setFormData(prev => ({
      ...prev,
      activities: [...prev.activities, { name: '', role: '', description: '', yearsInvolved: 1 }]
    }));
  };

  const removeActivity = (index: number) => {
    if (formData.activities.length > 1) {
      const updatedActivities = formData.activities.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        activities: updatedActivities
      }));
    }
  };

  const handleEssayChange = (index: number, field: 'topic' | 'description', value: string) => {
    const updatedEssays = [...formData.essays];
    updatedEssays[index] = { ...updatedEssays[index], [field]: value };
    
    setFormData(prev => ({
      ...prev,
      essays: updatedEssays
    }));
  };

  const addEssay = () => {
    setFormData(prev => ({
      ...prev,
      essays: [...prev.essays, { topic: '', description: '' }]
    }));
  };

  const removeEssay = (index: number) => {
    if (formData.essays.length > 1) {
      const updatedEssays = formData.essays.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        essays: updatedEssays
      }));
    }
  };

  const handleRecommendationChange = (index: number, field: 'source' | 'strength', value: string) => {
    const updatedRecs = [...formData.recommendations];
    updatedRecs[index] = { 
      ...updatedRecs[index], 
      [field]: field === 'strength' ? value as 'Strong' | 'Very Strong' | 'Outstanding' : value 
    };
    
    setFormData(prev => ({
      ...prev,
      recommendations: updatedRecs
    }));
  };

  const addRecommendation = () => {
    setFormData(prev => ({
      ...prev,
      recommendations: [...prev.recommendations, { source: '', strength: 'Strong' as const }]
    }));
  };

  const removeRecommendation = (index: number) => {
    if (formData.recommendations.length > 1) {
      const updatedRecs = formData.recommendations.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        recommendations: updatedRecs
      }));
    }
  };

  const handleCollegeChange = (index: number, field: string, value: string | boolean) => {
    const updatedColleges = [...formData.colleges];
    updatedColleges[index] = { 
      ...updatedColleges[index], 
      [field]: field === 'finalChoice' ? Boolean(value) : value 
    };
    
    setFormData(prev => ({
      ...prev,
      colleges: updatedColleges
    }));
  };

  const addCollege = () => {
    setFormData(prev => ({
      ...prev,
      colleges: [...prev.colleges, { name: '', status: 'Accepted' as const, finalChoice: false, explanation: '' }]
    }));
  };

  const removeCollege = (index: number) => {
    if (formData.colleges.length > 1) {
      const updatedColleges = formData.colleges.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        colleges: updatedColleges
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Format data for submission
      const profileSubmission = {
        submittedAt: serverTimestamp(),
        contactInfo: {
          name: formData.name,
          email: formData.email
        },
        profile: {
          academicStats: {
            gpa: Number(formData.gpa),
            classRank: formData.classRank,
            satScore: formData.satScore ? Number(formData.satScore) : null,
            actScore: formData.actScore ? Number(formData.actScore) : null
          },
          demographics: formData.demographics,
          activities: formData.activities,
          essays: formData.essays,
          recommendations: formData.recommendations,
          colleges: formData.colleges
        },
        status: 'pending' // pending, approved, rejected
      };
      
      // Submit to Firestore
      await addDoc(collection(db, "profileSubmissions"), profileSubmission);
      
      setSubmitSuccess(true);
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      console.error("Error submitting profile:", error);
      alert("There was an error submitting your profile. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Submission Received!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for sharing your profile with us. If selected, it will be featured in an upcoming game.
            </p>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <UserPlus className="w-6 h-6" />
            Submit Your Profile
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b pb-4">
            <h3 className="font-semibold mb-3">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="border-b pb-4">
            <h3 className="font-semibold mb-3">Academic Stats</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  GPA
                </label>
                <input
                  type="number"
                  step="0.01"
                  name="gpa"
                  value={formData.gpa}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded-lg"
                  min="0"
                  max="5"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Class Rank (e.g., "Top 5%")
                </label>
                <input
                  type="text"
                  name="classRank"
                  value={formData.classRank}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  SAT Score
                </label>
                <input
                  type="number"
                  name="satScore"
                  value={formData.satScore}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                  min="400"
                  max="1600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ACT Score
                </label>
                <input
                  type="number"
                  name="actScore"
                  value={formData.actScore}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                  min="1"
                  max="36"
                />
              </div>
            </div>
          </div>

          <div className="border-b pb-4">
            <h3 className="font-semibold mb-3">Demographics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Background
                </label>
                <input
                  type="text"
                  name="type"
                  value={formData.demographics.type}
                  onChange={handleDemographicsChange}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="firstGen"
                  name="firstGen"
                  checked={formData.demographics.firstGen}
                  onChange={handleDemographicsChange}
                  className="mr-2"
                />
                <label htmlFor="firstGen" className="text-sm text-gray-700">
                  First Generation Student
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="international"
                  name="international"
                  checked={formData.demographics.international}
                  onChange={handleDemographicsChange}
                  className="mr-2"
                />
                <label htmlFor="international" className="text-sm text-gray-700">
                  International Student
                </label>
              </div>
            </div>
          </div>

          <div className="border-b pb-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold">Activities</h3>
              <button
                type="button"
                onClick={addActivity}
                className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <Plus className="w-4 h-4" /> Add Activity
              </button>
            </div>
            {formData.activities.map((activity, index) => (
              <div key={index} className="p-3 border rounded-lg mb-3">
                <div className="flex justify-between mb-2">
                  <h4 className="font-medium">Activity {index + 1}</h4>
                  {formData.activities.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeActivity(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Activity Name
                    </label>
                    <input
                      type="text"
                      value={activity.name}
                      onChange={(e) => handleActivityChange(index, 'name', e.target.value)}
                      required
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Role
                    </label>
                    <input
                      type="text"
                      value={activity.role}
                      onChange={(e) => handleActivityChange(index, 'role', e.target.value)}
                      required
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <input
                    type="text"
                    value={activity.description}
                    onChange={(e) => handleActivityChange(index, 'description', e.target.value)}
                    required
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Years Involved
                  </label>
                  <input
                    type="number"
                    value={activity.yearsInvolved}
                    onChange={(e) => handleActivityChange(index, 'yearsInvolved', e.target.value)}
                    required
                    min="1"
                    max="4"
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="border-b pb-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold">Essays</h3>
              <button
                type="button"
                onClick={addEssay}
                className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <Plus className="w-4 h-4" /> Add Essay
              </button>
            </div>
            {formData.essays.map((essay, index) => (
              <div key={index} className="p-3 border rounded-lg mb-3">
                <div className="flex justify-between mb-2">
                  <h4 className="font-medium">Essay {index + 1}</h4>
                  {formData.essays.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeEssay(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Topic
                  </label>
                  <input
                    type="text"
                    value={essay.topic}
                    onChange={(e) => handleEssayChange(index, 'topic', e.target.value)}
                    required
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    value={essay.description}
                    onChange={(e) => handleEssayChange(index, 'description', e.target.value)}
                    required
                    className="w-full p-2 border rounded-lg"
                    rows={2}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="border-b pb-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold">Recommendations</h3>
              <button
                type="button"
                onClick={addRecommendation}
                className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <Plus className="w-4 h-4" /> Add Recommendation
              </button>
            </div>
            {formData.recommendations.map((rec, index) => (
              <div key={index} className="p-3 border rounded-lg mb-3">
                <div className="flex justify-between mb-2">
                  <h4 className="font-medium">Recommendation {index + 1}</h4>
                  {formData.recommendations.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeRecommendation(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Source
                    </label>
                    <input
                      type="text"
                      value={rec.source}
                      onChange={(e) => handleRecommendationChange(index, 'source', e.target.value)}
                      required
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Strength
                    </label>
                    <select
                      value={rec.strength}
                      onChange={(e) => handleRecommendationChange(index, 'strength', e.target.value)}
                      required
                      className="w-full p-2 border rounded-lg"
                    >
                      <option value="Strong">Strong</option>
                      <option value="Very Strong">Very Strong</option>
                      <option value="Outstanding">Outstanding</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-b pb-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold">College Results</h3>
              <button
                type="button"
                onClick={addCollege}
                className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <Plus className="w-4 h-4" /> Add College
              </button>
            </div>
            {formData.colleges.map((college, index) => (
              <div key={index} className="p-3 border rounded-lg mb-3">
                <div className="flex justify-between mb-2">
                  <h4 className="font-medium">College {index + 1}</h4>
                  {formData.colleges.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeCollege(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      College Name
                    </label>
                    <input
                      type="text"
                      value={college.name}
                      onChange={(e) => handleCollegeChange(index, 'name', e.target.value)}
                      required
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Status
                    </label>
                    <select
                      value={college.status}
                      onChange={(e) => handleCollegeChange(index, 'status', e.target.value)}
                      required
                      className="w-full p-2 border rounded-lg"
                    >
                      <option value="Accepted">Accepted</option>
                      <option value="Waitlisted">Waitlisted</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </div>
                </div>
                <div className="mb-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id={`finalChoice-${index}`}
                      checked={college.finalChoice}
                      onChange={(e) => handleCollegeChange(index, 'finalChoice', e.target.checked)}
                      className="mr-2"
                    />
                    <label htmlFor={`finalChoice-${index}`} className="text-sm text-gray-700">
                      This is my final choice
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Admission Explanation
                  </label>
                  <textarea
                    value={college.explanation || ''}
                    onChange={(e) => handleCollegeChange(index, 'explanation', e.target.value)}
                    className="w-full p-2 border rounded-lg"
                    rows={2}
                    placeholder="Why do you think you were accepted/rejected/waitlisted?"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-3 rounded-lg font-semibold ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Profile'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}; 