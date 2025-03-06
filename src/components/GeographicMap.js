import React, { useState } from 'react';
import { geographicData } from '../data/geographicData';

const GeographicMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setActiveTab('overview');
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Geographic Case Studies</h1>
        <p className="text-lg text-gray-600">
          Explore how race and place concepts developed in specific cities and regions
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-4 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Locations</h2>
            <div className="space-y-2">
              {geographicData.map((location) => (
                <button
                  key={location.id}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedLocation && selectedLocation.id === location.id
                      ? 'bg-primary-100 border-l-4 border-primary-500'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  onClick={() => handleLocationSelect(location)}
                >
                  <div className="font-medium">{location.name}, {location.state}</div>
                  <div className="text-sm text-gray-500">{location.region}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Visual map replacement */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Regional Focus</h2>
            <div className="space-y-2">
              {Array.from(new Set(geographicData.map(location => location.region))).map(region => (
                <div key={region} className="p-3 bg-gray-50 rounded-lg">
                  <h3 className="font-medium text-gray-700">{region}</h3>
                  <div className="text-sm text-gray-500 mt-1">
                    {geographicData.filter(location => location.region === region).map(location => location.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          {selectedLocation ? (
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b">
                <h2 className="text-2xl font-bold text-gray-900">{selectedLocation.name}, {selectedLocation.state}</h2>
                <p className="text-gray-600 mt-2">{selectedLocation.description}</p>
              </div>

              <div className="border-b">
                <nav className="flex">
                  <button
                    className={`px-4 py-3 text-sm font-medium ${
                      activeTab === 'overview'
                        ? 'border-b-2 border-primary-500 text-primary-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('overview')}
                  >
                    Overview
                  </button>
                  <button
                    className={`px-4 py-3 text-sm font-medium ${
                      activeTab === 'events'
                        ? 'border-b-2 border-primary-500 text-primary-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('events')}
                  >
                    Historical Events
                  </button>
                  <button
                    className={`px-4 py-3 text-sm font-medium ${
                      activeTab === 'people'
                        ? 'border-b-2 border-primary-500 text-primary-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('people')}
                  >
                    Key Figures
                  </button>
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'overview' && (
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedLocation.keyFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {selectedLocation.concepts && selectedLocation.concepts.length > 0 && (
                      <div className="mt-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-3">Related Concepts</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedLocation.concepts.map((concept) => (
                            <span
                              key={concept}
                              className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm"
                            >
                              {concept}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'events' && (
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Historical Events</h3>
                    {selectedLocation.historicalEvents && selectedLocation.historicalEvents.length > 0 ? (
                      <div className="space-y-6">
                        {selectedLocation.historicalEvents.map((event) => (
                          <div key={event.id} className="border-l-4 border-primary-500 pl-4 py-1">
                            <div className="flex justify-between items-start">
                              <h4 className="font-medium text-gray-900">{event.title}</h4>
                              <span className="text-sm text-gray-500 ml-2">{event.period}</span>
                            </div>
                            <p className="text-gray-700 mt-1">{event.description}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500">No historical events found for this location.</p>
                    )}
                  </div>
                )}

                {activeTab === 'people' && (
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Key Figures</h3>
                    {selectedLocation.keyFigures && selectedLocation.keyFigures.length > 0 ? (
                      <div className="space-y-4">
                        {selectedLocation.keyFigures.map((person, index) => (
                          <div key={index} className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium text-gray-900">{person.name}</h4>
                            <p className="text-gray-700 mt-1">{person.description}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500">No key figures found for this location.</p>
                    )}
                  </div>
                )}
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
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                ></path>
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Select a location</h3>
              <p className="mt-2 text-gray-500">
                Click on a location to view its details and historical context.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeographicMap;
