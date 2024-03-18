import React from 'react';

const FeatureSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg p-8 rounded-lg">
            <img src="https://via.placeholder.com/300" className="w-full mb-4" alt="Feature 1" />
            <h3 className="text-xl font-bold mb-2">Feature 1</h3>
            <p className="text-gray-700">This is a description of feature 1.</p>
          </div>
          <div className="bg-white shadow-lg p-8 rounded-lg">
            <img src="https://via.placeholder.com/300" className="w-full mb-4" alt="Feature 2" />
            <h3 className="text-xl font-bold mb-2">Feature 2</h3>
            <p className="text-gray-700">This is a description of feature 2.</p>
          </div>
          <div className="bg-white shadow-lg p-8 rounded-lg">
            <img src="https://via.placeholder.com/300" className="w-full mb-4" alt="Feature 3" />
            <h3 className="text-xl font-bold mb-2">Feature 3</h3>
            <p className="text-gray-700">This is a description of feature 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;