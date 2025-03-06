import React, { useState, useEffect } from 'react';
import timelineEvents from '../data/timelineData';

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedEvents, setSortedEvents] = useState([]);

  // Get unique categories for filtering
  const categories = ['all', ...new Set(timelineEvents.map(event => event.category))];

  // Sort and filter events when filter or search changes
  useEffect(() => {
    // First sort events chronologically
    let events = [...timelineEvents].sort((a, b) => {
      const yearA = parseInt(a.year.toString().split('-')[0]);
      const yearB = parseInt(b.year.toString().split('-')[0]);
      return yearA - yearB;
    });

    // Apply category filter
    if (filter !== 'all') {
      events = events.filter(event => event.category === filter);
    }

    // Apply search filter if there is a search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      events = events.filter(
        event =>
          event.title.toLowerCase().includes(term) ||
          event.description.toLowerCase().includes(term) ||
          event.details.toLowerCase().includes(term)
      );
    }

    setSortedEvents(events);

    // If there's only one event after filtering, auto-select it
    if (events.length === 1 && !selectedEvent) {
      setSelectedEvent(events[0]);
    }

    // If the selected event is filtered out, clear selection
    if (selectedEvent && !events.find(event => event.id === selectedEvent.id)) {
      setSelectedEvent(null);
    }
  }, [filter, searchTerm, selectedEvent]);

  const handleEventClick = (event) => {
    setSelectedEvent(event === selectedEvent ? null : event);
  };

  return (
    <div className="timeline">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Historical Timeline</h1>
        <p className="text-lg text-gray-600">
          Explore key events chronologically to understand the development of race and place concepts
        </p>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="sm:w-1/2">
          <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-1">
            Filter by Category
          </label>
          <select
            id="category-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:w-1/2">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
            Search Timeline
          </label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search events..."
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 overflow-auto max-h-[70vh] pr-2">
          {sortedEvents.length > 0 ? (
            <div className="space-y-2">
              {sortedEvents.map((event) => (
                <div
                  key={event.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedEvent && selectedEvent.id === event.id
                      ? 'bg-primary-50 border-primary-300'
                      : 'bg-white hover:bg-gray-50'
                  }`}
                  onClick={() => handleEventClick(event)}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-gray-900">{event.title}</h3>
                    <span className="text-sm text-gray-500 ml-2">{event.year}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                  <div className="mt-2">
                    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                      {event.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-gray-500">
              No events found matching your filters. Try adjusting your search or filters.
            </div>
          )}
        </div>

        <div className="lg:col-span-2">
          {selectedEvent ? (
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-bold text-gray-900">{selectedEvent.title}</h2>
                  <span className="text-lg font-medium px-3 py-1 bg-primary-100 text-primary-800 rounded-full">
                    {selectedEvent.year}
                  </span>
                </div>
                <p className="text-gray-600 mt-2 text-lg">{selectedEvent.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Details</h3>
                <p className="text-gray-700">{selectedEvent.details}</p>
              </div>

              {selectedEvent.relatedPlaces && selectedEvent.relatedPlaces.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Related Places</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedEvent.relatedPlaces.map((place) => (
                      <span
                        key={place}
                        className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm"
                      >
                        {place}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedEvent.relatedTopics && selectedEvent.relatedTopics.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Related Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedEvent.relatedTopics.map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedEvent.people && selectedEvent.people.length > 0 && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Key People</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedEvent.people.map((person) => (
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Select an event</h3>
              <p className="mt-2 text-gray-500">
                Click on a timeline event to view its details here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
