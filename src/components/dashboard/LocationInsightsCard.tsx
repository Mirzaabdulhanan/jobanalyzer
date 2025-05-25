import React from 'react';
import { MapPin } from 'lucide-react';
import Card from '../ui/Card';
import { LocationData } from '../../types';

interface LocationInsightsCardProps {
  locations: LocationData[];
}

const LocationInsightsCard: React.FC<LocationInsightsCardProps> = ({ locations }) => {
  return (
    <Card className="h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Location Insights</h2>
        <MapPin className="w-5 h-5 text-blue-600" />
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-2 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Jobs
              </th>
              <th className="px-2 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Growth
              </th>
              <th className="px-2 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Avg. Salary
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {locations.map((location, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {location.name}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-right text-gray-500">
                  {location.jobCount.toLocaleString()}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-right">
                  <span className={location.growthRate > 10 ? 'text-green-600' : 'text-amber-600'}>
                    +{location.growthRate}%
                  </span>
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                  ${location.averageSalary.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <button className="mt-6 text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">
        View detailed location report →
      </button>
    </Card>
  );
};

export default LocationInsightsCard;