import { StudentProfile, GameState, CollegeGuess } from '../types';
import { studentProfiles } from '../data/profiles';

const GAME_STATE_KEY = 'collegeAdmissionsGame';

export const getTodayProfile = (): StudentProfile => {
  const today = new Date().toISOString().split('T')[0];
  return studentProfiles.find(profile => profile.id === today) || studentProfiles[0];
};

export const getGameState = (): GameState => {
  const defaultState: GameState = {
    currentDate: new Date().toISOString().split('T')[0],
    guesses: [],
    completed: false,
    streak: 0,
    maxStreak: 0,
    gamesPlayed: 0,
    gamesWon: 0
  };

  const savedState = localStorage.getItem(GAME_STATE_KEY);
  if (!savedState) return defaultState;

  const parsedState = JSON.parse(savedState);
  if (parsedState.currentDate !== defaultState.currentDate) {
    return defaultState;
  }

  return parsedState;
};

export const saveGameState = (state: GameState) => {
  localStorage.setItem(GAME_STATE_KEY, JSON.stringify(state));
};

export const checkGuesses = (profile: StudentProfile, guesses: string[]): CollegeGuess[] => {
  const collegeMap = new Map(
    profile.colleges.map(college => [college.name, college])
  );

  return guesses.map(guess => {
    const college = collegeMap.get(guess);
    return {
      name: guess,
      status: 
        college?.status === 'Accepted' ? 'correct' :
        college?.status === 'Waitlisted' ? 'waitlisted' : 'incorrect',
      explanation: college?.explanation
    };
  });
};

export const generateShareText = (profile: StudentProfile, guesses: CollegeGuess[]): string => {
  const date = new Date().toLocaleDateString();
  const emojiMap = {
    correct: '🟩',
    waitlisted: '🟨',
    incorrect: '🟥',
    unselected: '⬜'
  };

  const guessEmojis = guesses.map(guess => emojiMap[guess.status]).join('');
  return `College Admissions Game ${date}\n${guessEmojis}\nPlay at [URL]`;
};