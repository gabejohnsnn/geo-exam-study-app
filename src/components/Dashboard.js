import React from 'react';
import { Link } from 'react-router-dom';
import timelineEvents from '../data/timelineData';
import concepts from '../data/conceptsData';

const Dashboard = () => {
  // Get most recent timeline events (for highlights)
  const recentEvents = [...timelineEvents]
    .sort((a, b) => {
      // Sort by year, handling ranges and text years
      const yearA = parseInt(a.year.toString().split('-')[0]);
      const yearB = parseInt(b.year.toString().split('-')[0]);
      return yearB - yearA;
    })
    .slice(0, 3);

  // Get random concepts for quick review
  const randomConcepts = [...concepts]
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return (
    <div className="dashboard">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Geography/CRES Exam Study Dashboard</h1>
        <p className="text-lg text-gray-600">
          Interactive study tools for race, ethnicity, and geographic concepts
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Study Modules</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to="/timeline"
              className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-blue-50 transition-colors"
            >
              <svg className="w-8 h-8 text-blue-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              <span className="text-gray-900 font-medium">Timeline</span>
              <span className="text-sm text-gray-500">Explore events chronologically</span>
            </Link>
            
            <Link
              to="/topics"
              className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-green-50 transition-colors"
            >
              <svg className="w-8 h-8 text-green-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
              <span className="text-gray-900 font-medium">Topics</span>
              <span className="text-sm text-gray-500">Browse by subject area</span>
            </Link>
            
            <Link
              to="/maps"
              className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-yellow-50 transition-colors"
            >
              <svg className="w-8 h-8 text-yellow-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
              </svg>
              <span className="text-gray-900 font-medium">Geographic Focus</span>
              <span className="text-sm text-gray-500">Case studies by location</span>
            </Link>
            
            <Link
              to="/quiz"
              className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-purple-50 transition-colors"
            >
              <svg className="w-8 h-8 text-purple-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-gray-900 font-medium">Quiz Yourself</span>
              <span className="text-sm text-gray-500">Test your knowledge</span>
            </Link>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Key Concepts Flashcards</h2>
          <div className="space-y-4">
            {randomConcepts.map(concept => (
              <div key={concept.id} className="border rounded-lg p-4 hover:bg-gray-50">
                <h3 className="font-medium text-gray-900">{concept.title}</h3>
                <p className="text-gray-600 text-sm">{concept.definition}</p>
                <Link to="/concepts" className="text-blue-500 text-sm hover:underline">
                  Learn more →
                </Link>
              </div>
            ))}
            <Link
              to="/concepts"
              className="block text-center py-2 border rounded-lg text-blue-600 hover:bg-blue-50"
            >
              View All Concepts
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Timeline Highlights</h2>
          <Link to="/timeline" className="text-blue-500 hover:underline">
            View Full Timeline →
          </Link>
        </div>
        <div className="space-y-4">
          {recentEvents.map(event => (
            <div key={event.id} className="border-l-4 border-blue-500 pl-4 py-2">
              <div className="flex justify-between">
                <h3 className="font-medium text-gray-900">{event.title}</h3>
                <span className="text-gray-500">{event.year}</span>
              </div>
              <p className="text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Exam Study Tips</h2>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Use the timeline to understand chronological relationships between events</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Pay special attention to the relationships between concepts like redlining, blockbusting, and segregation</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Study geographic case studies to understand how concepts played out in specific locations</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Take the quiz multiple times to reinforce your knowledge</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
