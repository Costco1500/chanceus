export interface CollegeInsight {
  keyFactors: string[];
  acceptanceRate: string;
  medianStats: {
    sat?: number;
    act?: number;
    gpa?: number;
  };
  uniqueTraits: string;
  lookingFor: string[];
}

export const collegeInsights: Record<string, CollegeInsight> = {
  'MIT': {
    keyFactors: ['STEM excellence', 'Research experience', 'Innovation mindset'],
    acceptanceRate: '4%',
    medianStats: { sat: 1535, act: 35, gpa: 4.0 },
    uniqueTraits: 'Values hands-on building and technical creativity',
    lookingFor: ['Math/science competitions', 'Technical projects', 'Research publications']
  },
  'Stanford': {
    keyFactors: ['Academic excellence', 'Intellectual vitality', 'Community impact'],
    acceptanceRate: '3.9%',
    medianStats: { sat: 1505, act: 34, gpa: 3.96 },
    uniqueTraits: 'Emphasizes impact and leadership potential',
    lookingFor: ['Demonstrated leadership', 'Interdisciplinary interests', 'Community service']
  },
  'Harvard': {
    keyFactors: ['Academic excellence', 'Leadership', 'Character development'],
    acceptanceRate: '3.4%',
    medianStats: { sat: 1520, act: 34, gpa: 4.0 },
    uniqueTraits: 'Values well-roundedness and humanities/liberal arts',
    lookingFor: ['Exceptional achievement in chosen field', 'Character and integrity', 'Diverse interests']
  },
  'CalTech': {
    keyFactors: ['Scientific rigor', 'Research potential', 'Mathematical aptitude'],
    acceptanceRate: '3.9%',
    medianStats: { sat: 1545, act: 36, gpa: 4.0 },
    uniqueTraits: 'Extremely focused on scientific achievement and research potential',
    lookingFor: ['Math/Physics/Chemistry competitions', 'Advanced research', 'Scientific publications']
  },
  'UC Berkeley': {
    keyFactors: ['Academic excellence', 'Intellectual curiosity', 'Public service'],
    acceptanceRate: '14.5%',
    medianStats: { sat: 1440, act: 32, gpa: 3.89 },
    uniqueTraits: 'Values social justice and public mission',
    lookingFor: ['Academic excellence', 'Overcoming challenges', 'Commitment to community']
  },
  'Princeton': {
    keyFactors: ['Academic excellence', 'Leadership', 'Service'],
    acceptanceRate: '4.4%',
    medianStats: { sat: 1505, act: 34, gpa: 3.9 },
    uniqueTraits: 'Strong emphasis on undergraduate education and writing skills',
    lookingFor: ['Writing ability', 'Independent research', 'Character development']
  },
  'Yale': {
    keyFactors: ['Academic excellence', 'Community engagement', 'Leadership'],
    acceptanceRate: '4.6%',
    medianStats: { sat: 1510, act: 34, gpa: 4.0 },
    uniqueTraits: 'Values intellectual curiosity and community contribution',
    lookingFor: ['Intellectual depth', 'Community involvement', 'Diverse perspectives']
  },
  'Columbia': {
    keyFactors: ['Academic rigor', 'Intellectual curiosity', 'Urban engagement'],
    acceptanceRate: '3.9%',
    medianStats: { sat: 1505, act: 34, gpa: 4.0 },
    uniqueTraits: 'Values engagement with New York City and global perspective',
    lookingFor: ['Global perspective', 'Cultural engagement', 'Intellectual passion']
  },
  'UPenn': {
    keyFactors: ['Academic excellence', 'Interdisciplinary thinking', 'Innovation'],
    acceptanceRate: '5.9%',
    medianStats: { sat: 1500, act: 34, gpa: 3.9 },
    uniqueTraits: 'Values practical application of knowledge',
    lookingFor: ['Entrepreneurial mindset', 'Collaborative projects', 'Intellectual engagement']
  },
  'Cornell': {
    keyFactors: ['Academic excellence', 'Practical application', 'Diverse interests'],
    acceptanceRate: '8.7%',
    medianStats: { sat: 1480, act: 34, gpa: 4.0 },
    uniqueTraits: 'Values both theoretical knowledge and practical application',
    lookingFor: ['Applied knowledge', 'Research experience', 'Interdisciplinary approach']
  }
}; 