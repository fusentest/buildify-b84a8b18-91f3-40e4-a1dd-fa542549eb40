
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface PriceFilterProps {
  minPrice: number;
  maxPrice: number;
  currentMin: number;
  currentMax: number;
  onChange: (min: number, max: number) => void;
}

const PriceFilter = ({
  minPrice,
  maxPrice,
  currentMin,
  currentMax,
  onChange
}: PriceFilterProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [localMin, setLocalMin] = useState(currentMin);
  const [localMax, setLocalMax] = useState(currentMax);
  
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setLocalMin(value);
  };
  
  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setLocalMax(value);
  };
  
  const handleApply = () => {
    onChange(localMin, localMax);
  };
  
  const calculateLeftPosition = (value: number) => {
    return ((value - minPrice) / (maxPrice - minPrice)) * 100;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div 
        className="flex justify-between items-center cursor-pointer mb-2"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="font-medium text-gray-900">Price Range</h3>
        {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </div>
      
      {isExpanded && (
        <div className="mt-4">
          <div className="relative h-1 bg-gray-200 rounded-full mb-6">
            <div 
              className="absolute h-1 bg-primary rounded-full"
              style={{ 
                left: `${calculateLeftPosition(localMin)}%`, 
                right: `${100 - calculateLeftPosition(localMax)}%` 
              }}
            ></div>
            <div 
              className="absolute w-4 h-4 bg-white border-2 border-primary rounded-full -mt-1.5 cursor-pointer"
              style={{ left: `calc(${calculateLeftPosition(localMin)}% - 8px)` }}
            ></div>
            <div 
              className="absolute w-4 h-4 bg-white border-2 border-primary rounded-full -mt-1.5 cursor-pointer"
              style={{ left: `calc(${calculateLeftPosition(localMax)}% - 8px)` }}
            ></div>
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <div>
              <label htmlFor="min-price" className="block text-xs text-gray-500 mb-1">Min</label>
              <div className="relative">
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="number"
                  id="min-price"
                  min={minPrice}
                  max={localMax}
                  value={localMin}
                  onChange={handleMinChange}
                  className="w-24 pl-6 py-1 border border-gray-300 rounded text-sm"
                />
              </div>
            </div>
            <div className="text-gray-300 mx-2">—</div>
            <div>
              <label htmlFor="max-price" className="block text-xs text-gray-500 mb-1">Max</label>
              <div className="relative">
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="number"
                  id="max-price"
                  min={localMin}
                  max={maxPrice}
                  value={localMax}
                  onChange={handleMaxChange}
                  className="w-24 pl-6 py-1 border border-gray-300 rounded text-sm"
                />
              </div>
            </div>
          </div>
          
          <button
            onClick={handleApply}
            className="w-full py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default PriceFilter;