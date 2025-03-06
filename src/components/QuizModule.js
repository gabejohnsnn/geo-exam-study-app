import React, { useState, useEffect } from 'react';
import { quizQuestions, quizCategories } from '../data/quizData';

const QuizModule = () => {
  // State for quiz modes: 'category', 'quiz', 'results'
  const [quizMode, setQuizMode] = useState('category');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  
  // Filter questions when category changes
  useEffect(() => {
    if (selectedCategory && selectedCategory !== 'all') {
      const categoryQuestions = quizQuestions.filter(
        question => question.category.toLowerCase() === selectedCategory.toLowerCase()
      );
      setCurrentQuestions(categoryQuestions);
    } else if (selectedCategory === 'all') {
      // Get a mix of questions from all categories
      const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random());
      setCurrentQuestions(shuffled.slice(0, 10)); // Limit to 10 questions for a short quiz
    }
  }, [selectedCategory]);
  
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setQuizMode('quiz');
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setAnswers([]);
    setScore(0);
  };
  
  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };
  
  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    const currentQuestion = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setAnswers([
      ...answers,
      {
        questionId: currentQuestion.id,
        selectedAnswer,
        isCorrect
      }
    ]);
    
    setShowAnswer(true);
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
    } else {
      // Quiz completed
      setQuizMode('results');
    }
  };
  
  const handleRestartQuiz = () => {
    setQuizMode('category');
    setSelectedCategory(null);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setAnswers([]);
    setScore(0);
  };
  
  return (
    <div className="quiz-module">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Quiz Yourself</h1>
        <p className="text-lg text-gray-600">
          Test your knowledge of key concepts and events
        </p>
      </div>
      
      {quizMode === 'category' && (
        <div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Select a Quiz Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div 
                className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white"
                onClick={() => handleCategorySelect('all')}
              >
                <h3 className="font-medium text-lg text-gray-900">Mixed Questions</h3>
                <p className="text-gray-600">A selection of questions from all categories</p>
              </div>
              
              {quizCategories.map(category => (
                <div 
                  key={category.id}
                  className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white"
                  onClick={() => handleCategorySelect(category.id)}
                >
                  <h3 className="font-medium text-lg text-gray-900">{category.name}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h3 className="font-medium text-blue-800 mb-2">Quiz Tips</h3>
            <ul className="list-disc pl-5 text-blue-800">
              <li>Read each question carefully before selecting an answer</li>
              <li>Consider the context of the course material when answering</li>
              <li>Try to connect concepts across different aspects of the course</li>
              <li>Don't worry if you get some wrong - this is a learning tool!</li>
            </ul>
          </div>
        </div>
      )}
      
      {quizMode === 'quiz' && currentQuestions.length > 0 && (
        <div className="bg-white shadow rounded-lg p-6">
          <div className="mb-4 flex justify-between items-center">
            <span className="text-sm font-medium text-gray-500">
              Question {currentQuestionIndex + 1} of {currentQuestions.length}
            </span>
            <span className="text-sm font-medium text-gray-500">
              Score: {score}/{answers.length}
            </span>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {currentQuestions[currentQuestionIndex].question}
            </h2>
            
            <div className="space-y-3">
              {currentQuestions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !showAnswer && handleAnswerSelect(index)}
                  className={`quiz-option ${
                    selectedAnswer === index 
                      ? showAnswer 
                        ? index === currentQuestions[currentQuestionIndex].correctAnswer 
                          ? 'correct' 
                          : 'incorrect'
                        : 'selected'
                      : ''
                  } ${
                    showAnswer && index === currentQuestions[currentQuestionIndex].correctAnswer
                      ? 'correct'
                      : ''
                  }`}
                  disabled={showAnswer}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          
          {showAnswer ? (
            <div>
              <div className="mb-4 p-4 rounded-lg bg-gray-50">
                <h3 className="font-medium text-gray-900 mb-2">Explanation:</h3>
                <p className="text-gray-700">
                  {currentQuestions[currentQuestionIndex].explanation}
                </p>
              </div>
              
              <div className="flex justify-end">
                <button
                  onClick={handleNextQuestion}
                  className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
                >
                  {currentQuestionIndex < currentQuestions.length - 1 ? 'Next Question' : 'See Results'}
                </button>
              </div>
            </div>
          ) : (
            <div className="flex justify-end">
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className={`px-4 py-2 rounded-md ${
                  selectedAnswer === null
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                Submit Answer
              </button>
            </div>
          )}
        </div>
      )}
      
      {quizMode === 'results' && (
        <div className="bg-white shadow rounded-lg p-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Quiz Results</h2>
            <p className="text-lg text-gray-600">
              You scored {score} out of {currentQuestions.length}
            </p>
            
            <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
              <div
                className="bg-primary-600 h-4 rounded-full"
                style={{ width: `${(score / currentQuestions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Question Review</h3>
            <div className="space-y-6">
              {answers.map((answer, index) => {
                const question = currentQuestions.find(q => q.id === answer.questionId);
                return (
                  <div key={index} className={`p-4 rounded-lg ${answer.isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
                    <div className="flex justify-between">
                      <h4 className="font-medium text-gray-900">{question.question}</h4>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${answer.isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {answer.isCorrect ? 'Correct' : 'Incorrect'}
                      </span>
                    </div>
                    <p className="text-gray-700 mt-2">
                      <strong>Your answer:</strong> {question.options[answer.selectedAnswer]}
                    </p>
                    {!answer.isCorrect && (
                      <p className="text-gray-700 mt-1">
                        <strong>Correct answer:</strong> {question.options[question.correctAnswer]}
                      </p>
                    )}
                    <p className="text-gray-600 text-sm mt-2">
                      {question.explanation}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={handleRestartQuiz}
              className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
            >
              Take Another Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizModule;
