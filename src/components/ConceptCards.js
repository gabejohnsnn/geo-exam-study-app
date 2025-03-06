import React, { useState, useEffect } from 'react';
import concepts from '../data/conceptsData';

const ConceptCards = () => {
  const [selectedConcept, setSelectedConcept] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredConcepts, setFilteredConcepts] = useState(concepts);
  const [viewMode, setViewMode] = useState('grid'); // grid or flashcard mode
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);

  // Filter concepts when search term changes
  useEffect(() => {
    if (searchTerm) {
      const filtered = concepts.filter(
        concept =>
          concept.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          concept.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
          concept.details.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredConcepts(filtered);
    } else {
      setFilteredConcepts(concepts);
    }
  }, [searchTerm]);

  const handleSelectConcept = (concept) => {
    setSelectedConcept(concept);
  };

  const handleNextFlashcard = () => {
    setFlashcardFlipped(false);
    setCurrentFlashcardIndex((prevIndex) => 
      prevIndex === filteredConcepts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousFlashcard = () => {
    setFlashcardFlipped(false);
    setCurrentFlashcardIndex((prevIndex) => 
      prevIndex === 0 ? filteredConcepts.length - 1 : prevIndex - 1
    );
  };

  const toggleFlashcard = () => {
    setFlashcardFlipped(!flashcardFlipped);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Key Concepts</h1>
        <p className="text-lg text-gray-600">
          Review important concepts and definitions for the Geography/CRES exam
        </p>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row items-center gap-4">
        <div className="sm:w-1/2">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search concepts..."
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 p-2"
          />
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`px-4 py-2 rounded-md ${
              viewMode === 'grid' 
                ? 'bg-primary-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Grid View
          </button>
          <button
            onClick={() => {
              setViewMode('flashcard');
              setFlashcardFlipped(false);
              setCurrentFlashcardIndex(0);
            }}
            className={`px-4 py-2 rounded-md ${
              viewMode === 'flashcard' 
                ? 'bg-primary-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Flashcard View
          </button>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-1 overflow-auto max-h-[70vh] pr-2">
            {filteredConcepts.length > 0 ? (
              <div className="space-y-3">
                {filteredConcepts.map((concept) => (
                  <div
                    key={concept.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      selectedConcept && selectedConcept.id === concept.id
                        ? 'bg-primary-50 border-primary-300'
                        : 'bg-white hover:bg-gray-50'
                    }`}
                    onClick={() => handleSelectConcept(concept)}
                  >
                    <h3 className="font-medium text-gray-900">{concept.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{concept.definition}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-gray-500">
                No concepts found matching your search. Try a different term.
              </div>
            )}
          </div>

          <div className="md:col-span-1">
            {selectedConcept ? (
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedConcept.title}</h2>
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Definition</h3>
                  <p className="text-gray-700">{selectedConcept.definition}</p>
                </div>
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Details</h3>
                  <p className="text-gray-700">{selectedConcept.details}</p>
                </div>

                {selectedConcept.examples && selectedConcept.examples.length > 0 && (
                  <div className="mb-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Examples</h3>
                    <ul className="list-disc pl-5 text-gray-700">
                      {selectedConcept.examples.map((example, index) => (
                        <li key={index}>{example}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedConcept.relatedConcepts && selectedConcept.relatedConcepts.length > 0 && (
                  <div className="mb-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Related Concepts</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedConcept.relatedConcepts.map((related) => (
                        <span
                          key={related}
                          className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm"
                        >
                          {related}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedConcept.people && selectedConcept.people.length > 0 && (
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Key People</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedConcept.people.map((person) => (
                        <span
                          key={person}
                          className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm"
                        >
                          {person}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  ></path>
                </svg>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Select a concept</h3>
                <p className="mt-2 text-gray-500">
                  Click on a concept card to view its details here.
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        // Flashcard View
        <div className="flex flex-col items-center">
          {filteredConcepts.length > 0 ? (
            <>
              <div 
                className="w-full max-w-2xl h-80 bg-white rounded-xl shadow-md cursor-pointer perspective"
                onClick={toggleFlashcard}
              >
                <div className={`relative w-full h-full transition-transform duration-500 transform-style preserve-3d ${flashcardFlipped ? 'rotate-y-180' : ''}`}>
                  {/* Front of the card */}
                  <div className="absolute w-full h-full backface-hidden flex flex-col justify-center items-center p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {filteredConcepts[currentFlashcardIndex].title}
                    </h2>
                    <p className="text-gray-500 text-sm mt-4">Click to flip</p>
                  </div>
                  
                  {/* Back of the card */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col justify-center items-center p-6 overflow-auto">
                    <p className="text-gray-800">
                      <strong>Definition:</strong> {filteredConcepts[currentFlashcardIndex].definition}
                    </p>
                    <p className="text-gray-600 text-sm mt-4">Click to flip back</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center mt-6 space-x-4">
                <button
                  onClick={handlePreviousFlashcard}
                  className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300"
                >
                  Previous
                </button>
                <span className="text-gray-700">
                  {currentFlashcardIndex + 1} / {filteredConcepts.length}
                </span>
                <button
                  onClick={handleNextFlashcard}
                  className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300"
                >
                  Next
                </button>
              </div>
              
              <p className="text-gray-500 mt-6">
                Tip: Use arrow keys (← →) to navigate or spacebar to flip
              </p>
            </>
          ) : (
            <div className="p-8 text-center text-gray-500">
              No concepts found matching your search. Try a different term.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ConceptCards;
