import React, { useState } from 'react';

const FilterTabs = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Web Apps', 'Mobile'];

  return (
    <div className="filter-tabs">
      {filters.map((filter, idx) => (
        <button
          key={idx}
          onClick={() => setActiveFilter(filter)}
          className={`filter-tab ${
            activeFilter === filter ? 'filter-tab-active' : 'filter-tab-inactive'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
