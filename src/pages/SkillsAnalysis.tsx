import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { skillTrends } from '../data/mockData';
import { Brain, TrendingUp, Award, BookOpen } from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

const SkillsAnalysis: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Skills Analysis</h1>
            <p className="text-gray-600">
              Deep insights into the most in-demand skills across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Top Skills</h2>
                <Brain className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">92%</div>
              <p className="text-gray-600 text-sm">Average demand for top 10 skills</p>
            </Card>

            <Card>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Skill Growth</h2>
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">+18.5%</div>
              <p className="text-gray-600 text-sm">Average growth rate YoY</p>
            </Card>

            <Card>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Learning Resources</h2>
                <BookOpen className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">2,500+</div>
              <p className="text-gray-600 text-sm">Available learning paths</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Most In-Demand Skills</h2>
                <Award className="w-5 h-5 text-blue-600" />
              </div>
              <div className="space-y-4">
                {skillTrends.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <div className="text-sm text-gray-500 mt-1">
                        {skill.industries.slice(0, 2).join(', ')}
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="success">{skill.demandScore}% demand</Badge>
                      <div className="text-sm text-gray-500 mt-1">+{skill.growthRate}% growth</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Emerging Technologies</h2>
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Artificial Intelligence', growth: 35 },
                  { name: 'Blockchain', growth: 28 },
                  { name: 'Edge Computing', growth: 25 },
                  { name: 'Quantum Computing', growth: 22 },
                  { name: 'Extended Reality (XR)', growth: 20 }
                ].map((tech, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{tech.name}</span>
                    <Badge variant="primary">+{tech.growth}%</Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Skills Forecast</h2>
              <p className="text-gray-600 mt-2">Predictions and insights for skill development</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Rising Skills</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Machine Learning & AI Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Cloud Architecture & Security
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Data Science & Analytics
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Learning Recommendations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Focus on practical applications
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Combine technical & soft skills
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Continuous learning approach
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SkillsAnalysis;