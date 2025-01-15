import React, { useState, useEffect } from 'react';
import { Brain } from 'lucide-react';
import { Question } from './components/Question';
import { Results } from './components/Results';
import { questions } from './data/questions';
import { UserAnswer, TestResult } from './types';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [startTime, setStartTime] = useState<number>(0);
  const [showResults, setShowResults] = useState(false);
  const [testResult, setTestResult] = useState<TestResult | null>(null);

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  const handleAnswer = (answer: number) => {
    const timeSpent = Date.now() - startTime;
    const isCorrect = answer === questions[currentQuestion].correctAnswer;
    
    const newAnswer: UserAnswer = {
      questionId: questions[currentQuestion].id,
      selectedAnswer: answer,
      isCorrect,
      timeSpent,
    };

    setAnswers([...answers, newAnswer]);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setStartTime(Date.now());
      }, 1000);
    } else {
      calculateResults([...answers, newAnswer]);
    }
  };

  const calculateResults = (finalAnswers: UserAnswer[]) => {
    const correctAnswers = finalAnswers.filter(a => a.isCorrect).length;
    const totalTime = finalAnswers.reduce((acc, curr) => acc + curr.timeSpent, 0);
    
    // Simple IQ calculation (for demonstration)
    const baseScore = 100;
    const scorePerQuestion = 10;
    const timeBonus = Math.min(10, Math.max(0, 20000 - totalTime) / 2000);
    
    const score = Math.round(baseScore + (correctAnswers * scorePerQuestion) + timeBonus);

    // Analyze strengths and weaknesses
    const strengthTypes = new Set(
      finalAnswers
        .filter(a => a.isCorrect)
        .map(a => questions.find(q => q.id === a.questionId)?.type)
    );

    const weaknessTypes = new Set(
      finalAnswers
        .filter(a => !a.isCorrect)
        .map(a => questions.find(q => q.id === a.questionId)?.type)
    );

    const result: TestResult = {
      score,
      timeSpent: totalTime,
      strengths: Array.from(strengthTypes).map(type => 
        type === 'pattern' ? 'Pattern Recognition' :
        type === 'logical' ? 'Logical Reasoning' :
        'Mathematical Aptitude'
      ),
      weaknesses: Array.from(weaknessTypes).map(type =>
        type === 'pattern' ? 'Pattern Recognition' :
        type === 'logical' ? 'Logical Reasoning' :
        'Mathematical Aptitude'
      ),
      answers: finalAnswers,
    };

    setTestResult(result);
    setShowResults(true);
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setStartTime(Date.now());
    setShowResults(false);
    setTestResult(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Brain className="w-12 h-12 mx-auto text-blue-600 mb-2" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">IQ Calculator</h1>
          <p className="text-gray-600">Test your cognitive abilities</p>
        </div>

        {!showResults ? (
          <div className="mb-8">
            <div className="mb-4 text-center">
              <span className="text-sm font-medium text-gray-500">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <Question
              question={questions[currentQuestion]}
              onAnswer={handleAnswer}
              isAnswered={answers.length > currentQuestion}
            />
          </div>
        ) : (
          testResult && <Results result={testResult} onRetry={resetTest} />
        )}
      </div>
    </div>
  );
}

export default App;