import React from 'react';
import { Badge } from './ui/badge';

const StatsAndFilter = (
  completedTaskCount = 0,
  activeTaskCount = 0,
  filter = 'all',
) => {
  return (
    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
      {/* phần thống kê */}
      <div className="flex-gap 3">
        <Badge variant="secondary" className=""></Badge>
      </div>
    </div>
  );
};

export default StatsAndFilter;
