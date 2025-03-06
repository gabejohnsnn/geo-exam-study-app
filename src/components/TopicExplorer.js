import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import timelineEvents from '../data/timelineData';
import concepts from '../data/conceptsData';
import { geographicData } from '../data/geographicData';

const TopicExplorer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState(null);
  
  // Extract all unique topics from the data
  const allTopics = new Set();
  
  // Add topics from timelineEvents
  timelineEvents.forEach(event => {
    if (event.relatedTopics) {
      event.relatedTopics.forEach(topic => allTopics.add(topic));
    }
  });
  
  // Add topics from concepts
  concepts.forEach(concept => {
    if (concept.relatedConcepts) {
      concept.relatedConcepts.forEach(topic => allTopics.add(topic));
    }
  });
  
  // Add topics from locations
  geographicData.forEach(location => {
    if (location.concepts) {
      location.concepts.forEach(topic => allTopics.add(topic));
    }
  });
  
  // Convert to array and sort
  const sortedTopics = Array.from(allTopics).sort();
  
  // Group topics
  const topicGroups = {
    'Housing & Urban Development': ['housing-discrimination', 'redlining', 'blockbusting', 'steering', 'suburbanization', 'urban-renewal', 'gentrification', 'displacement', 'urban-planning', 'urban-development', 'public-housing', 'modernism', 'slums', 'housing', 'edge-cities'],
    'Race & Identity': ['racism', 'segregation', 'identity', 'oppression', 'privilege', 'assimilation', 'cultural-appropriation', 'melting-pot', 'othering', 'blackface', 'minstrelsy', 'orientalism', 'western-superiority', 'model-minority'],
    'Politics & Governance': ['governance', 'home-rule', 'representation', 'civil-rights', 'jim-crow', 'busing', 'police-brutality', 'police-violence', 'racial-tensions'],
    'Culture & Media': ['popular-culture', 'film', 'race-films', 'censorship', 'popular-music', 'film-industry'],
    'Migration & Demographics': ['mobility', 'demographic-change', 'migration', 'immigration', 'urbanization', 'white-flight'],
    'Economics & Society': ['disinvestment', 'housing-affordability', 'real-estate', 'urban-change', 'urban-decline']
  };
  
  // Function to find which group a topic belongs to
  const findTopicGroup = (topic) => {
    for (const [group, topics] of Object.entries(topicGroups)) {
      if (topics.includes(topic)) {
        return group;
      }
    }
    return 'Other';
  };
  
  // Filter topics based on search term
  const filteredTopics = searchTerm 
    ? sortedTopics.filter(topic => topic.toLowerCase().includes(searchTerm.toLowerCase())) 
    : sortedTopics;
  
  // Find content related to a selected topic
  const findRelatedContent = (topic) => {
    const related = {
      events: [],
      concepts: [],
      locations: []
    };
    
    // Find related events
    timelineEvents.forEach(event => {
      if (event.relatedTopics && event.relatedTopics.includes(topic)) {
        related.events.push(event);
      }
    });
    
    // Find related concepts
    concepts.forEach(concept => {
      if (concept.relatedConcepts && concept.relatedConcepts.includes(topic)) {
        related.concepts.push(concept);
      }
    });
    
    // Find related locations
    geographicData.forEach(location => {
      if (location.concepts && location.concepts.includes(topic)) {
        related.locations.push(location);
      }
    });
    
    return related;
  };
  
  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };
  
  // Group the filtered topics
  const groupedTopics = {};
  filteredTopics.forEach(topic => {
    const group = findTopicGroup(topic);
    if (!groupedTopics[group]) {
      groupedTopics[group] = [];
    }
    groupedTopics[group].push(topic);
  });
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Topic Explorer</h1>
        <p className="text-lg text-gray-600">
          Browse the course material by theme and connect related concepts
        </p>
      </div>
      
      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search topics..."
          className="w-full sm:w-1/2 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 p-2"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 overflow-auto max-h-[80vh]">
          {Object.keys(groupedTopics).length > 0 ? (
            <div className="space-y-6">
              {Object.entries(groupedTopics).map(([group, topics]) => (
                <div key={group} className="bg-white shadow rounded-lg p-4">
                  <h2 className="text-lg font-semibold text-gray-800 mb-3">{group}</h2>
                  <div className="space-y-1">
                    {topics.map(topic => (
                      <button
                        key={topic}
                        className={`block w-full text-left px-3 py-2 rounded-md ${
                          selectedTopic === topic
                            ? 'bg-primary-100 text-primary-800'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        onClick={() => handleTopicSelect(topic)}
                      >
                        {topic.replace(/-/g, ' ')}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <p className="text-gray-500">No topics found matching your search.</p>
            </div>
          )}
        </div>
        
        <div className="lg:col-span-2">
          {selectedTopic ? (
            <div className="bg-white shadow rounded-lg">
              <div className="p-6 border-b">
                <h2 className="text-2xl font-bold text-gray-900 capitalize">{selectedTopic.replace(/-/g, ' ')}</h2>
                <p className="text-gray-600 mt-2">
                  Explore content related to {selectedTopic.replace(/-/g, ' ')} across the course material.
                </p>
              </div>
              
              <div className="p-6">
                {(() => {
                  const related = findRelatedContent(selectedTopic);
                  return (
                    <div className="space-y-8">
                      {related.concepts.length > 0 && (
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-3">Related Concepts</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {related.concepts.map(concept => (
                              <div key={concept.id} className="border rounded-lg p-4 hover:bg-gray-50">
                                <h4 className="font-medium text-gray-900">{concept.title}</h4>
                                <p className="text-gray-600 text-sm mt-1">{concept.definition}</p>
                                <Link to="/concepts" className="text-blue-500 text-sm hover:underline mt-2 inline-block">
                                  Learn more →
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {related.events.length > 0 && (
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-3">Historical Events</h3>
                          <div className="space-y-4">
                            {related.events.map(event => (
                              <div key={event.id} className="border-l-4 border-blue-500 pl-4 py-2">
                                <div className="flex justify-between">
                                  <h4 className="font-medium text-gray-900">{event.title}</h4>
                                  <span className="text-gray-500">{event.year}</span>
                                </div>
                                <p className="text-gray-600">{event.description}</p>
                                <Link to="/timeline" className="text-blue-500 text-sm hover:underline mt-1 inline-block">
                                  View on timeline →
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {related.locations.length > 0 && (
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-3">Geographic Case Studies</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {related.locations.map(location => (
                              <div key={location.id} className="border rounded-lg p-4 hover:bg-gray-50">
                                <h4 className="font-medium text-gray-900">{location.name}, {location.state}</h4>
                                <p className="text-gray-600 text-sm mt-1">{location.description}</p>
                                <Link to="/maps" className="text-blue-500 text-sm hover:underline mt-2 inline-block">
                                  View case study →
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {related.concepts.length === 0 && related.events.length === 0 && related.locations.length === 0 && (
                        <div className="text-center text-gray-500 py-8">
                          <p>No direct relationships found for this topic.</p>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
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
              <h3 className="mt-4 text-lg font-medium text-gray-900">Select a topic</h3>
              <p className="mt-2 text-gray-500">
                Click on a topic to explore related content.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopicExplorer;
