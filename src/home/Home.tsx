import React, { useEffect, useState } from 'react';

interface Recipe {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  images: string[]; // Rasmlar ro'yxati
}

const Home: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  // Zaxira tasvirlar ro'yxati
  const placeholderImages = [
    'https://via.placeholder.com/150/FF0000/FFFFFF?text=Food+1',
    'https://via.placeholder.com/150/00FF00/FFFFFF?text=Food+2',
    'https://via.placeholder.com/150/0000FF/FFFFFF?text=Food+3',
    'https://via.placeholder.com/150/FFFF00/FFFFFF?text=Food+4',
  ];

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('https://dummyjson.com/recipes');
        const data = await response.json();
        console.log(data.recipes);
        setRecipes(data.recipes || []);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-3xl font-medium text-gray-700 animate-pulse">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe, index) => (
          <div
            key={recipe.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            <img
              src={recipe.images?.[0] || placeholderImages[index % placeholderImages.length]}
              alt={recipe.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 truncate">
                {recipe.name}
              </h2>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                {recipe.description}
              </p>
              <div className="mt-4 flex gap-2 overflow-x-auto">
                {recipe.images && recipe.images.length > 0 ? (
                  recipe.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Image ${index + 1}`}
                      className="w-16 h-16 rounded-md object-cover border border-gray-300"
                    />
                  ))
                ) : (
                  placeholderImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Placeholder ${index + 1}`}
                      className="w-16 h-16 rounded-md object-cover border border-gray-300"
                    />
                  ))
                )}
              </div>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
                Add Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
