// /src/components/SearchForm.tsx
import React from 'react';
import { Option } from '../types';

interface Props {
  onSearchChange: (searchTerm: string) => void;
  onFilterChange: (optionValue: string, isChecked: boolean) => void;
  options: Option[];
}

// Define the component as a regular functional component first
const SearchForm: React.FC<Props> = ({ onSearchChange, onFilterChange, options }) => {
  console.log('Rendering SearchForm'); // This will log only when the component re-renders
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearchChange(e.target.value)}
      />
      {options.map((option, index) => (
        <label key={index}>
          <input
            type="checkbox"
            value={option.value}
            onChange={(e) => onFilterChange(option.value, e.target.checked)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

// Wrap the component with React.memo for export
export default React.memo(SearchForm);
