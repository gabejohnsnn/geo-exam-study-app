import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/common/Navigation';
import Footer from './components/common/Footer';
import Dashboard from './components/Dashboard';
import Timeline from './components/Timeline';
import TopicExplorer from './components/TopicExplorer';
import GeographicMap from './components/GeographicMap';
import ConceptCards from './components/ConceptCards';
import QuizModule from './components/QuizModule';
import './styles/index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/topics" element={<TopicExplorer />} />
            <Route path="/maps" element={<GeographicMap />} />
            <Route path="/concepts" element={<ConceptCards />} />
            <Route path="/quiz" element={<QuizModule />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
