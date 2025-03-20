import { StudentProfile } from '../types';

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