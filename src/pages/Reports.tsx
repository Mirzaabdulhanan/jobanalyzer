import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { FileText, Download, Filter, Share2 } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

const Reports: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Market Reports</h1>
              <p className="text-gray-600">
                Comprehensive reports and analytics on job market trends
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Card>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <FileText className="w-5 h-5 text-blue-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900">Q1 2025 Job Market Analysis</h2>
                </div>
                <Badge variant="success">Latest</Badge>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive analysis of job market trends, salary data, and industry growth in Q1 2025.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">Published: Mar 15, 2025</span>
                  <span className="text-sm text-gray-500">45 pages</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <FileText className="w-5 h-5 text-blue-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900">Tech Industry Skills Report</h2>
                </div>
                <Badge variant="primary">Featured</Badge>
              </div>
              <p className="text-gray-600 mb-4">
                In-depth analysis of required skills, emerging technologies, and career paths in tech.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">Published: Mar 10, 2025</span>
                  <span className="text-sm text-gray-500">38 pages</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <FileText className="w-5 h-5 text-blue-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900">Remote Work Trends 2025</h2>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Analysis of remote work opportunities, challenges, and best practices across industries.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">Published: Mar 5, 2025</span>
                  <span className="text-sm text-gray-500">32 pages</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <FileText className="w-5 h-5 text-blue-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900">Salary Insights Report</h2>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Detailed breakdown of salary trends, compensation packages, and benefits across roles.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">Published: Mar 1, 2025</span>
                  <span className="text-sm text-gray-500">28 pages</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Reports;