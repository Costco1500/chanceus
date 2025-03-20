import React, { useState, useEffect } from 'react';
import { StudentProfile } from './components/StudentProfile';
import { CollegeSelector } from './components/CollegeSelector';
import { Results } from './components/Results';
import { Stats } from './components/Stats';
import { ProfileSubmission } from './components/ProfileSubmission';
import { getTodayProfile, getGameState, saveGameState, checkGuesses, generateShareText } from './utils/gameLogic';
import { GraduationCap, UserPlus } from 'lucide-react';

function App() {
  const [profile] = useState(getTodayProfile());
  const [gameState, setGameState] = useState(getGameState());
  const [selectedColleges, setSelectedColleges] = useState<string[]>([]);
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);
  const [animateResults, setAnimateResults] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const maxSelections = 3;

  const allColleges = [
    'MIT', 'Stanford', 'Harvard', 'CalTech', 'UC Berkeley',
    'Princeton', 'Yale', 'Columbia', 'UPenn', 'Cornell'
  ];

  // When game is completed, trigger the animation
  useEffect(() => {
    if (gameState.completed) {
      setAnimateResults(true);
    }
  }, [gameState.completed]);

  const handleCollegeSelect = (college: string) => {
    if (selectedColleges.includes(college)) {
      setSelectedColleges(prev => prev.filter(c => c !== college));
    } else if (selectedColleges.length < maxSelections) {
      setSelectedColleges(prev => [...prev, college]);
    }
  };

  const handleSubmit = () => {
    if (selectedColleges.length !== maxSelections) return;
    
    // Set submitting state to show animation
    setIsSubmitting(true);
    
    // Delay to show the animation
    setTimeout(() => {
      const results = checkGuesses(profile, selectedColleges);
      const correctGuesses = results.filter(g => g.status === 'correct').length;
      
      const newState = {
        ...gameState,
        guesses: selectedColleges,
        completed: true,
        gamesPlayed: gameState.gamesPlayed + 1,
        gamesWon: gameState.gamesWon + (correctGuesses === maxSelections ? 1 : 0),
        streak: correctGuesses === maxSelections ? gameState.streak + 1 : 0,
        maxStreak: Math.max(
          gameState.maxStreak,
          correctGuesses === maxSelections ? gameState.streak + 1 : 0
        )
      };

      setGameState(newState);
      saveGameState(newState);
      setIsSubmitting(false);
    }, 800); // Duration of the animation
  };

  const handleShare = () => {
    const results = checkGuesses(profile, gameState.guesses);
    const shareText = generateShareText(profile, results);
    navigator.clipboard.writeText(shareText);
    alert('Results copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <header className="max-w-2xl mx-auto mb-8 text-center">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2 mb-2">
          <GraduationCap className="w-8 h-8" />
          College Admissions Game
        </h1>
        <p className="text-gray-600">
          Can you guess which colleges accepted this student?
        </p>
        <button
          onClick={() => setShowSubmissionForm(true)}
          className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 gap-1 font-medium"
        >
          <UserPlus className="w-4 h-4" />
          Submit Your Profile
        </button>
      </header>

      <StudentProfile profile={profile} />

      {!gameState.completed ? (
        <>
          <CollegeSelector
            colleges={allColleges}
            selectedColleges={selectedColleges}
            onSelect={handleCollegeSelect}
            maxSelections={maxSelections}
          />
          <div className="mt-6 text-center">
            <button
              onClick={handleSubmit}
              disabled={selectedColleges.length !== maxSelections || isSubmitting}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isSubmitting 
                  ? 'bg-blue-400 text-white scale-95' 
                  : selectedColleges.length === maxSelections
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Guesses'}
            </button>
          </div>
        </>
      ) : (
        <>
          <Results
            guesses={checkGuesses(profile, gameState.guesses)}
            finalChoice={profile.colleges.find(c => c.finalChoice)?.name || ''}
            onShare={handleShare}
            animateResults={animateResults}
          />
          <Stats stats={gameState} />
        </>
      )}

      {showSubmissionForm && (
        <ProfileSubmission onClose={() => setShowSubmissionForm(false)} />
      )}
    </div>
  );
}

export default App;