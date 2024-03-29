import React from 'react';
import styles from '../../css/images.module.css';

function Feature() {
  return (
    <section className="bg-gray-100">
      <div className='mx-auto w-3/4 border-b-2'>
        <h1 className='text-center text-4xl p-6 font-semibold'>Features</h1>
      </div>
      <div className="container mx-auto flex flex-wrap justify-around">
        {features.map((feature, index) => (
          <FeatureCard key={index} title={feature.title} description={feature.description} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="feature bg-white rounded-lg shadow-md p-6 m-4 max-w-sm">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}