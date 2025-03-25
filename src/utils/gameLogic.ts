import { StudentProfile, GameState, CollegeGuess } from '../types';
import { studentProfiles } from '../data/profiles';

const GAME_STATE_KEY = 'collegeAdmissionsGame';

// src/utils/gameLogic.ts

const allColleges = [
  'MIT', 'Stanford', 'Harvard', 'CalTech', 'UC Berkeley',
  'Princeton', 'Yale', 'Columbia', 'UPenn', 'Cornell',
  'UCLA', 'NYU', 'University of Michigan', 'University of Chicago',
  'University of Southern California', 'University of Florida'
];

export const generateDailyGuesses = (profile: StudentProfile): string[] => {
  const acceptedColleges = profile.colleges
    .filter(college => college.status === 'Accepted')
    .map(college => college.name);

  // Randomly select additional colleges to fill the guesses
  const additionalColleges = allColleges.filter(college => !acceptedColleges.includes(college));
  const randomColleges = additionalColleges.sort(() => 0.5 - Math.random()).slice(0, 3); // Select 3 random colleges

  // Combine accepted colleges with random selections
  const dailyGuesses = [...acceptedColleges, ...randomColleges];

  // Shuffle the guesses to randomize their order
  return dailyGuesses.sort(() => 0.5 - Math.random());
};

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