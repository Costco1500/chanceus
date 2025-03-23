import { StudentProfile } from '../types';

// Helper function to get tomorrow's date in YYYY-MM-DD format


export const studentProfiles: StudentProfile[] = [
  {
    id: '2024-03-20',
    academicStats: {
      gpa: 4.0,
      classRank: 'Top 1%',
      satScore: 1550,
      actScore: 35
    },
    activities: [
      {
        name: 'Science Olympiad',
        role: 'Team Captain',
        description: 'Led team to state championships, won 3 gold medals',
        yearsInvolved: 4
      },
      {
        name: 'Student Government',
        role: 'President',
        description: 'Implemented recycling program, organized mental health awareness week',
        yearsInvolved: 3
      },
      {
        name: 'Robotics Club',
        role: 'Lead Programmer',
        description: 'Developed AI-based navigation system for competition robot',
        yearsInvolved: 4
      },
      {
        name: 'Local Food Bank',
        role: 'Volunteer Coordinator',
        description: 'Organized weekly food drives, managed 50+ volunteers',
        yearsInvolved: 2
      },
      {
        name: 'Research Internship',
        role: 'Research Assistant',
        description: 'Conducted cancer research at university lab',
        yearsInvolved: 1
      }
    ],
    awards: [
      {
        name: 'National Merit Scholar',
        level: 'National',
        year: 2023,
        description: 'Recognized for outstanding academic achievement'
      },
      {
        name: 'Presidential Volunteer Service Award',
        level: 'National',
        year: 2022,
        description: 'Awarded for 250+ hours of community service'
      },
      {
        name: 'Science Olympiad Gold Medal',
        level: 'State',
        year: 2023,
        description: 'First place in Chemistry Lab competition'
      },
      {
        name: 'Robotics Regional Champion',
        level: 'Regional',
        year: 2022,
        description: 'First place in FIRST Robotics Competition'
      },
      {
        name: 'International Science Fair Finalist',
        level: 'International',
        year: 2023,
        description: 'Selected among top 300 projects worldwide'
      }
    ],
    essays: [
      {
        topic: 'Personal Growth',
        description: 'Overcoming social anxiety through debate club'
      },
      {
        topic: 'Community Impact',
        description: 'Creating a STEM mentorship program for middle school girls'
      }
    ],
    recommendations: [
      {
        source: 'AP Physics Teacher',
        strength: 'Outstanding'
      },
      {
        source: 'Research Mentor',
        strength: 'Very Strong'
      },
      {
        source: 'Principal',
        strength: 'Strong'
      }
    ],
    demographics: {
      type: 'Asian American',
      firstGen: true,
      international: false
    },
    colleges: [
      {
        name: 'MIT',
        status: 'Accepted',
        finalChoice: true,
        explanation: 'Strong STEM focus with exceptional achievements in Science Olympiad and Robotics. Research experience and outstanding recommendation from Physics teacher aligned perfectly with MIT\'s technical emphasis.'
      },
      {
        name: 'Stanford',
        status: 'Accepted',
        finalChoice: false,
        explanation: 'Balanced profile with both technical excellence and leadership. Community service and STEM mentorship program demonstrated Stanford\'s mission of positive impact.'
      },
      {
        name: 'Harvard',
        status: 'Waitlisted',
        finalChoice: false,
        explanation: 'Strong academic profile, but could have shown more humanities/liberal arts engagement. Leadership roles impressive, but competition was exceptionally high this year.'
      },
      {
        name: 'CalTech',
        status: 'Rejected',
        finalChoice: false,
        explanation: 'While academic stats were strong, CalTech typically looks for more advanced research experience and physics/math competition achievements.'
      },
      {
        name: 'UC Berkeley',
        status: 'Accepted',
        finalChoice: false,
        explanation: 'Perfect fit for Berkeley\'s STEM programs. Strong academic profile combined with leadership and community service aligned with Berkeley\'s public mission.'
      }
    ]
  },
  {
    id: '2025-03-21', // New ID for the new profile
    academicStats: {
      gpa: 3.8,
      classRank: 'Top 10%',
      satScore: 1450,
      actScore: 32
    },
    activities: [
      {
        name: 'Debate Club',
        role: 'Member',
        description: 'Participated in regional debate competitions',
        yearsInvolved: 3
      },
      {
        name: 'Art Club',
        role: 'Vice President',
        description: 'Organized art exhibitions and workshops',
        yearsInvolved: 2
      }
    ],
    awards: [
      {
        name: 'Artistic Excellence Award',
        level: 'Regional',
        year: 2023,
        description: 'Recognized for outstanding contributions to the art community'
      }
    ],
    essays: [
      {
        topic: 'Creative Expression',
        description: 'The importance of art in personal development'
      }
    ],
    recommendations: [
      {
        source: 'Art Teacher',
        strength: 'Strong'
      }
    ],
    demographics: {
      type: 'Hispanic',
      firstGen: true,
      international: false
    },
    colleges: [
      {
        name: 'UCLA',
        status: 'Accepted',
        finalChoice: true,
        explanation: 'Strong art program and vibrant campus life aligned with personal interests.'
      },
      {
        name: 'NYU',
        status: 'Waitlisted',
        finalChoice: false,
        explanation: 'Impressive arts curriculum, but competition was high this year.'
      }
    ]
  },
  // New profiles for the next 7 days
  {
    id: '2025-03-22',
    academicStats: {
      gpa: 3.9,
      classRank: 'Top 5%',
      satScore: 1500,
      actScore: 34
    },
    activities: [
      {
        name: 'Math Team',
        role: 'Captain',
        description: 'Led the team to state championships',
        yearsInvolved: 3
      },
      {
        name: 'Environmental Club',
        role: 'Member',
        description: 'Participated in local clean-up events',
        yearsInvolved: 2
      }
    ],
    awards: [
      {
        name: 'Math Olympiad Gold Medal',
        level: 'State',
        year: 2023,
        description: 'First place in state math competition'
      }
    ],
    essays: [
      {
        topic: 'Passion for Mathematics',
        description: 'How math has shaped my life'
      }
    ],
    recommendations: [
      {
        source: 'Math Teacher',
        strength: 'Outstanding'
      }
    ],
    demographics: {
      type: 'Caucasian',
      firstGen: false,
      international: false
    },
    colleges: [
      {
        name: 'University of Michigan',
        status: 'Accepted',
        finalChoice: true,
        explanation: 'Strong engineering program and research opportunities.'
      },
      {
        name: 'University of Chicago',
        status: 'Waitlisted',
        finalChoice: false,
        explanation: 'Highly competitive admissions process.'
      }
    ]
  },
  {
    id: '2025-03-23',
    academicStats: {
      gpa: 4.2,
      classRank: 'Valedictorian',
      satScore: 1580,
      actScore: 36
    },
    activities: [
      {
        name: 'Student Council',
        role: 'President',
        description: 'Organized school events and initiatives',
        yearsInvolved: 4
      },
      {
        name: 'Robotics Team',
        role: 'Lead Engineer',
        description: 'Designed and built competition robots',
        yearsInvolved: 3
      }
    ],
    awards: [
      {
        name: 'National Honor Society',
        level: 'National',
        year: 2023,
        description: 'Recognized for academic excellence and leadership'
      }
    ],
    essays: [
      {
        topic: 'Leadership Experience',
        description: 'My journey as a student leader'
      }
    ],
    recommendations: [
      {
        source: 'Principal',
        strength: 'Outstanding'
      }
    ],
    demographics: {
      type: 'Asian American',
      firstGen: false,
      international: false
    },
    colleges: [
      {
        name: 'Harvard',
        status: 'Accepted',
        finalChoice: true,
        explanation: 'Prestigious institution with a strong focus on leadership.'
      },
      {
        name: 'Stanford',
        status: 'Accepted',
        finalChoice: false,
        explanation: 'Excellent programs in engineering and technology.'
      }
    ]
  },
  {
    id: '2025-03-24',
    academicStats: {
      gpa: 3.7,
      classRank: 'Top 15%',
      satScore: 1400,
      actScore: 30
    },
    activities: [
      {
        name: 'Theater Club',
        role: 'Actor',
        description: 'Performed in school plays and musicals',
        yearsInvolved: 4
      },
      {
        name: 'Volunteer Tutor',
        role: 'Tutor',
        description: 'Helped younger students with their studies',
        yearsInvolved: 2
      }
    ],
    awards: [
      {
        name: 'Best Actor Award',
        level: 'Regional',
        year: 2023,
        description: 'Recognized for outstanding performance in the school play'
      }
    ],
    essays: [
      {
        topic: 'The Power of Storytelling',
        description: 'How theater has influenced my life'
      }
    ],
    recommendations: [
      {
        source: 'Drama Teacher',
        strength: 'Very Strong'
      }
    ],
    demographics: {
      type: 'African American',
      firstGen: true,
      international: false
    },
    colleges: [
      {
        name: 'University of Southern California',
        status: 'Accepted',
        finalChoice: true,
        explanation: 'Strong film and theater program.'
      },
      {
        name: 'New York University',
        status: 'Waitlisted',
        finalChoice: false,
        explanation: 'Highly competitive arts program.'
      }
    ]
  },
  {
    id: '2025-03-25',
    academicStats: {
      gpa: 3.6,
      classRank: 'Top 20%',
      satScore: 1350,
      actScore: 28
    },
    activities: [
      {
        name: 'Science Club',
        role: 'Member',
        description: 'Conducted experiments and participated in science fairs',
        yearsInvolved: 3
      },
      {
        name: 'Cross Country Team',
        role: 'Runner',
        description: 'Competed in regional meets',
        yearsInvolved: 2
      }
    ],
    awards: [
      {
        name: 'Science Fair Winner',
        level: 'Regional',
        year: 2023,
        description: 'First place in the annual science fair'
      }
    ],
    essays: [
      {
        topic: 'My Scientific Journey',
        description: 'How science has shaped my future aspirations'
      }
    ],
    recommendations: [
      {
        source: 'Science Teacher',
        strength: 'Strong'
      }
    ],
    demographics: {
      type: 'Hispanic',
      firstGen: true,
      international: false
    },
    colleges: [
      {
        name: 'University of California, San Diego',
        status: 'Accepted',
        finalChoice: true,
        explanation: 'Strong emphasis on research and innovation.'
      },
      {
        name: 'University of Washington',
        status: 'Waitlisted',
        finalChoice: false,
        explanation: 'Competitive admissions process.'
      }
    ]
  },
  {
    id: '2025-03-26',
    academicStats: {
      gpa: 3.5,
      classRank: 'Top 25%',
      satScore: 1300,
      actScore: 27
    },
    activities: [
      {
        name: 'Photography Club',
        role: 'Member',
        description: 'Captured school events and created a photo gallery',
        yearsInvolved: 2
      },
      {
        name: 'Debate Team',
        role: 'Member',
        description: 'Participated in local and state competitions',
        yearsInvolved: 3
      }
    ],
    awards: [
      {
        name: 'Best Photography Award',
        level: 'Regional',
        year: 2023,
        description: 'Recognized for outstanding photography work'
      }
    ],
    essays: [
      {
        topic: 'The Art of Photography',
        description: 'How photography has influenced my perspective'
      }
    ],
    recommendations: [
      {
        source: 'Art Teacher',
        strength: 'Strong'
      }
    ],
    demographics: {
      type: 'Caucasian',
      firstGen: false,
      international: false
    },
    colleges: [
      {
        name: 'California State University, Long Beach',
        status: 'Accepted',
        finalChoice: true,
        explanation: 'Strong arts program and supportive community.'
      },
      {
        name: 'San Francisco State University',
        status: 'Waitlisted',
        finalChoice: false,
        explanation: 'Competitive admissions process.'
      }
    ]
  },
  {
    id: '2025-03-27',
    academicStats: {
      gpa: 3.4,
      classRank: 'Top 30%',
      satScore: 1250,
      actScore: 25
    },
    activities: [
      {
        name: 'Chess Club',
        role: 'Member',
        description: 'Competed in local chess tournaments',
        yearsInvolved: 3
      },
      {
        name: 'Community Service',
        role: 'Volunteer',
        description: 'Participated in various community service projects',
        yearsInvolved: 2
      }
    ],
    awards: [
      {
        name: 'Chess Tournament Winner',
        level: 'Regional',
        year: 2023,
        description: 'First place in local chess tournament'
      }
    ],
    essays: [
      {
        topic: 'Strategic Thinking',
        description: 'How chess has taught me valuable life skills'
      }
    ],
    recommendations: [
      {
        source: 'Math Teacher',
        strength: 'Very Strong'
      }
    ],
    demographics: {
      type: 'Asian American',
      firstGen: true,
      international: false
    },
    colleges: [
      {
        name: 'University of Florida',
        status: 'Accepted',
        finalChoice: true,
        explanation: 'Strong programs in mathematics and engineering.'
      },
      {
        name: 'University of North Carolina',
        status: 'Waitlisted',
        finalChoice: false,
        explanation: 'Highly competitive admissions process.'
      }
    ]
  },
  {
    id: '2025-03-28',
    academicStats: {
      gpa: 3.3,
      classRank: 'Top 35%',
      satScore: 1200,
      actScore: 24
    },
    activities: [
      {
        name: 'Band',
        role: 'Member',
        description: 'Performed in school concerts and competitions',
        yearsInvolved: 4
      },
      {
        name: 'Yearbook Committee',
        role: 'Editor',
        description: 'Helped design and edit the school yearbook',
        yearsInvolved: 2
      }
    ],
    awards: [
      {
        name: 'Best Band Member',
        level: 'Regional',
        year: 2023,
        description: 'Recognized for outstanding contributions to the band'
      }
    ],
    essays: [
      {
        topic: 'The Importance of Music',
        description: 'How music has shaped my identity'
      }
    ],
    recommendations: [
      {
        source: 'Music Teacher',
        strength: 'Strong'
      }
    ],
    demographics: {
      type: 'Hispanic',
      firstGen: true,
      international: false
    },
    colleges: [
      {
        name: 'Berklee College of Music',
        status: 'Accepted',
        finalChoice: true,
        explanation: 'Strong music program and vibrant community.'
      },
      {
        name: 'University of Southern California',
        status: 'Waitlisted',
        finalChoice: false,
        explanation: 'Highly competitive music program.'
      }
    ]
  },
  {
    id: '2025-03-29',
    academicStats: {
      gpa: 3.2,
      classRank: 'Top 40%',
      satScore: 1150,
      actScore: 23
    },
    activities: [
      {
        name: 'Cooking Club',
        role: 'Member',
        description: 'Participated in cooking competitions and events',
        yearsInvolved: 2
      },
      {
        name: 'Gardening Club',
        role: 'Member',
        description: 'Helped maintain the school garden',
        yearsInvolved: 3
      }
    ],
    awards: [
      {
        name: 'Best Chef Award',
        level: 'Regional',
        year: 2023,
        description: 'Recognized for outstanding culinary skills'
      }
    ],
    essays: [
      {
        topic: 'The Joy of Cooking',
        description: 'How cooking has brought me joy and creativity'
      }
    ],
    recommendations: [
      {
        source: 'Home Economics Teacher',
        strength: 'Strong'
      }
    ],
    demographics: {
      type: 'Caucasian',
      firstGen: false,
      international: false
    },
    colleges: [
      {
        name: 'Culinary Institute of America',
        status: 'Accepted',
        finalChoice: true,
        explanation: 'Strong culinary program and hands-on experience.'
      },
      {
        name: 'Johnson & Wales University',
        status: 'Waitlisted',
        finalChoice: false,
        explanation: 'Highly regarded culinary school.'
      }
    ]
  },
  {
    id: '2025-03-30',
    academicStats: {
      gpa: 3.1,
      classRank: 'Top 45%',
      satScore: 1100,
      actScore: 22
    },
    activities: [
      {
        name: 'Film Club',
        role: 'Member',
        description: 'Participated in film screenings and discussions',
        yearsInvolved: 2
      },
      {
        name: 'Creative Writing Club',
        role: 'Member',
        description: 'Wrote and shared original stories',
        yearsInvolved: 3
      }
    ],
    awards: [
      {
        name: 'Best Short Film',
        level: 'Regional',
        year: 2023,
        description: 'Recognized for outstanding short film production'
      }
    ],
    essays: [
      {
        topic: 'The Art of Storytelling',
        description: 'How storytelling has influenced my life'
      }
    ],
    recommendations: [
      {
        source: 'English Teacher',
        strength: 'Strong'
      }
    ],
    demographics: {
      type: 'African American',
      firstGen: true,
      international: false
    },
    colleges: [
      {
        name: 'New York Film Academy',
        status: 'Accepted',
        finalChoice: true,
        explanation: 'Strong film program and industry connections.'
      },
      {
        name: 'Columbia College Chicago',
        status: 'Waitlisted',
        finalChoice: false,
        explanation: 'Highly competitive film program.'
      }
    ]
  }
];
