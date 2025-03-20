import { StudentProfile } from '../types';

// Helper function to get tomorrow's date in YYYY-MM-DD format
const getTomorrowDate = (): string => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split('T')[0];
};

export const studentProfiles: StudentProfile[] = [
  {
    id: getTomorrowDate(), // Automatically sets to tomorrow's date
    academicStats: {
      gpa: 3.9,
      classRank: 'Top 5%',
      satScore: 1480,
      actScore: 33
    },
    activities: [
      {
        name: 'Drama Club',
        role: 'Lead Actor',
        description: 'Performed in 8 school productions, directed junior year play',
        yearsInvolved: 4
      },
      {
        name: 'School Newspaper',
        role: 'Editor-in-Chief',
        description: 'Led team of 15 writers, published weekly editions',
        yearsInvolved: 3
      },
      {
        name: 'Model United Nations',
        role: 'Club President',
        description: 'Organized state conference, won Best Delegate at 3 conferences',
        yearsInvolved: 3
      },
      {
        name: 'Community Theater',
        role: 'Performer/Volunteer',
        description: 'Acted in community productions, taught theater to elementary students',
        yearsInvolved: 4
      },
      {
        name: 'Writing Internship',
        role: 'Editorial Intern',
        description: 'Summer position at local magazine, published 5 articles',
        yearsInvolved: 1
      }
    ],
    awards: [
      {
        name: 'National Scholastic Writing Award',
        level: 'National',
        year: 2023,
        description: 'Gold Key for personal essay collection'
      },
      {
        name: 'Thespian Society Excellence Award',
        level: 'State',
        year: 2023,
        description: 'Outstanding achievement in theater arts'
      },
      {
        name: 'Best Delegate Award',
        level: 'Regional',
        year: 2022,
        description: 'Highest honor at Regional Model UN Conference'
      },
      {
        name: 'National Honor Society',
        level: 'National',
        year: 2021,
        description: 'Selected based on scholarship, leadership, service, and character'
      },
      {
        name: 'Young Journalist Award',
        level: 'State',
        year: 2022,
        description: 'Recognized for outstanding high school journalism'
      }
    ],
    essays: [
      {
        topic: 'Creative Expression',
        description: 'How theater transformed my understanding of empathy and human connection'
      },
      {
        topic: 'Social Justice',
        description: 'Reporting on housing inequality in my community and organizing awareness campaign'
      }
    ],
    recommendations: [
      {
        source: 'English Teacher/Newspaper Advisor',
        strength: 'Outstanding'
      },
      {
        source: 'Drama Director',
        strength: 'Outstanding'
      },
      {
        source: 'School Counselor',
        strength: 'Very Strong'
      }
    ],
    demographics: {
      type: 'Hispanic/Latino',
      firstGen: true,
      international: false
    },
    colleges: [
      {
        name: 'Columbia',
        status: 'Accepted',
        finalChoice: true,
        explanation: 'Perfect fit for journalism and theater interests in NYC. Strong arts programs with access to professional opportunities in the city. First-gen support programs were also a significant factor.'
      },
      {
        name: 'Yale',
        status: 'Accepted',
        finalChoice: false,
        explanation: 'Strong humanities programs and theater opportunities impressed admissions committee. Essays about creative expression and social justice reporting aligned with Yale\'s values.'
      },
      {
        name: 'Stanford',
        status: 'Rejected',
        finalChoice: false,
        explanation: 'While academic profile was strong, had fewer STEM-focused activities compared to typical Stanford admits. Competition especially high for humanities-focused students.'
      },
      {
        name: 'Northwestern',
        status: 'Accepted',
        finalChoice: false,
        explanation: 'Exceptional fit for journalism program with strong theater opportunities. Writing samples and newspaper experience stood out to admissions committee.'
      },
      {
        name: 'UPenn',
        status: 'Waitlisted',
        finalChoice: false,
        explanation: 'Strong humanities profile but competition was high. Essays were well-received but activities weren\'t as uniquely distinguished from other applicants with similar interests.'
      }
    ]
  },
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
  }
];
