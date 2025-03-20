export type Activity = {
  name: string;
  role: string;
  description: string;
  yearsInvolved: number;
};

export type Award = {
  name: string;
  level: 'Regional' | 'State' | 'National' | 'International';
  year: number;
  description?: string;
};

export type StudentProfile = {
  id: string;
  academicStats: {
    gpa: number;
    classRank?: string;
    satScore?: number;
    actScore?: number;
  };
  activities: Activity[];
  awards: Award[];
  essays: {
    topic: string;
    description: string;
  }[];
  recommendations: {
    source: string;
    strength: 'Strong' | 'Very Strong' | 'Outstanding';
  }[];
  demographics?: {
    type: string;
    firstGen: boolean;
    international: boolean;
  };
  colleges: {
    name: string;
    status: 'Accepted' | 'Waitlisted' | 'Rejected';
    finalChoice: boolean;
    explanation?: string;
  }[];
};

export type GameState = {
  currentDate: string;
  guesses: string[];
  completed: boolean;
  streak: number;
  maxStreak: number;
  gamesPlayed: number;
  gamesWon: number;
};

export type CollegeGuess = {
  name: string;
  status: 'correct' | 'waitlisted' | 'incorrect' | 'unselected';
  explanation?: string;
};
