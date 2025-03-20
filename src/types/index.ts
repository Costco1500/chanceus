export type Activity = {
  name: string;
  role: string;
  description: string;
  yearsInvolved: number;
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