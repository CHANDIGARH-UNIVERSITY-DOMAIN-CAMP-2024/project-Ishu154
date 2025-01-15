import React from 'react';
import { Question as QuestionType } from '../types';

interface QuestionProps {
  question: QuestionType;
  onAnswer: (answer: number) => void;
  isAnswered: boolean;
}

export function Question({ question, onAnswer, isAnswered }: QuestionProps) {
  return (
    <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{question.question}</h3>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !isAnswered && onAnswer(index)}
            className={`w-full p-4 text-left rounded-lg transition-colors ${
              isAnswered
                ? index === question.correctAnswer
                  ? 'bg-green-100 border-green-500'
                  : 'bg-gray-100 border-gray-300'
                : 'bg-white hover:bg-gray-50 border-gray-300'
            } border`}
            disabled={isAnswered}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}