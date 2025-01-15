export interface Question {
  id: number;
  type: 'pattern' | 'logical' | 'mathematical';
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface UserAnswer {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
  timeSpent: number;
}

export interface TestResult {
  score: number;
  timeSpent: number;
  strengths: string[];
  weaknesses: string[];
  answers: UserAnswer[];
}