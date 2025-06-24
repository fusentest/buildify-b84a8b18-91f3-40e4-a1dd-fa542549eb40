
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Category {
  id: string;
  name: string;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategories: string[];
  onChange: (categories: string[]) => void;
}

const CategoryFilter = ({ 
  categories, 
  selectedCategories, 
  onChange 
}: CategoryFilterProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  
  const handleCategoryChange = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      onChange(selectedCategories.filter(id => id !== categoryId));
    } else {
      onChange([...selectedCategories, categoryId]);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div 
        className="flex justify-between items-center cursor-pointer mb-2"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="font-medium text-gray-900">Categories</h3>
        {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </div>
      
      {isExpanded && (
        <div className="space-y-2 mt-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center">
              <input
                type="checkbox"
                id={`category-${category.id}`}
                checked={selectedCategories.includes(category.id)}
                onChange={() => handleCategoryChange(category.id)}
                className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <label 
                htmlFor={`category-${category.id}`}
                className="ml-2 text-sm text-gray-700"
              >
                {category.name}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;