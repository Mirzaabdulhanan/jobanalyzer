import React from 'react';

interface StatProps {
  title: string;
  value: string | number;
  trend?: number;
  icon?: React.ReactNode;
  className?: string;
}

const Stat: React.FC<StatProps> = ({ title, value, trend, icon, className = '' }) => {
  const getTrendColor = (trend: number) => {
    if (trend > 0) return 'text-green-500';
    if (trend < 0) return 'text-red-500';
    return 'text-gray-500';
  };

  const getTrendIcon = (trend: number) => {
    if (trend > 0) return '↑';
    if (trend < 0) return '↓';
    return '→';
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
        {icon && <span>{icon}</span>}
        <span>{title}</span>
      </div>
      <div className="text-2xl font-semibold">{value}</div>
      {trend !== undefined && (
        <div className={`flex items-center mt-1 text-sm ${getTrendColor(trend)}`}>
          <span>{getTrendIcon(trend)}</span>
          <span className="ml-1">{Math.abs(trend)}%</span>
        </div>
      )}
    </div>
  );
};

export default Stat;