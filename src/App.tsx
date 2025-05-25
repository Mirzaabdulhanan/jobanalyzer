import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import JobMarket from './pages/JobMarket';
import SkillsAnalysis from './pages/SkillsAnalysis';
import Reports from './pages/Reports';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/job-market" element={<JobMarket />} />
        <Route path="/skills-analysis" element={<SkillsAnalysis />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
}

export default App;