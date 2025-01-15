import React from 'react';
import { TestResult } from '../types';
import { Brain, Clock, Trophy, AlertTriangle } from 'lucide-react';

interface ResultsProps {
  result: TestResult;
  onRetry: () => void;
}

export function Results({ result, onRetry }: ResultsProps) {
  return (
    <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <Trophy className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Your IQ Score: {result.score}</h2>
        <p className="text-gray-600">
          Completed in {Math.round(result.timeSpent / 1000)} seconds
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-4 bg-green-50 rounded-lg">
          <Brain className="w-6 h-6 text-green-600 mb-2" />
          <h3 className="font-semibold text-green-800 mb-2">Strengths</h3>
          <ul className="list-disc list-inside text-green-700">
            {result.strengths.map((strength, index) => (
              <li key={index}>{strength}</li>
            ))}
          </ul>
        </div>

        <div className="p-4 bg-red-50 rounded-lg">
          <AlertTriangle className="w-6 h-6 text-red-600 mb-2" />
          <h3 className="font-semibold text-red-800 mb-2">Areas for Improvement</h3>
          <ul className="list-disc list-inside text-red-700">
            {result.weaknesses.map((weakness, index) => (
              <li key={index}>{weakness}</li>
            ))}
          </ul>
        </div>
      </div>

      <button
        onClick={onRetry}
        className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}