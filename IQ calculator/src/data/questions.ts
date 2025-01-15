export const questions = [
  {
    id: 1,
    type: 'pattern',
    question: 'What number comes next in the sequence: 2, 4, 8, 16, __?',
    options: ['24', '32', '20', '28'],
    correctAnswer: 1,
    explanation: 'Each number is doubled to get the next number in the sequence.'
  },
  {
    id: 2,
    type: 'logical',
    question: 'If all roses are flowers, and some flowers fade quickly, then:',
    options: [
      'All roses fade quickly',
      'Some roses fade quickly',
      'No roses fade quickly',
      'Cannot be determined'
    ],
    correctAnswer: 1,
    explanation: 'Since some flowers fade quickly and all roses are flowers, we can conclude that some roses might fade quickly.'
  },
  {
    id: 3,
    type: 'mathematical',
    question: 'If 3x + 7 = 22, what is the value of x?',
    options: ['5', '3', '6', '15'],
    correctAnswer: 0,
    explanation: 'Subtract 7 from both sides: 3x = 15. Then divide by 3: x = 5'
  },
  // Add more questions as needed
];