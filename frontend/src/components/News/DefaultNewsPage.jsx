import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import { styles } from "../../styles"

const newsItems = [
  {
    title: "News Title 1",
    description: "This is a brief description of news item 1.",
    date: "August 09, 2024",
    image: "https://via.placeholder.com/150", // Placeholder image URL
  },
  {
    title: "News Title 2",
    description: "This is a brief description of news item 2.",
    date: "August 08, 2024",
    image: "https://via.placeholder.com/150", // Placeholder image URL
  },
  {
    title: "News Title 3",
    description: "This is a brief description of news item 3.",
    date: "August 07, 2024",
    image: "https://via.placeholder.com/150", // Placeholder image URL
  },
  {
    title: "News Title 1",
    description: "This is a brief description of news item 1.",
    date: "August 09, 2024",
    image: "https://via.placeholder.com/150", // Placeholder image URL
  },
  {
    title: "News Title 2",
    description: "This is a brief description of news item 2.",
    date: "August 08, 2024",
    image: "https://via.placeholder.com/150", // Placeholder image URL
  },
  {
    title: "News Title 3",
    description: "This is a brief description of news item 3.",
    date: "August 07, 2024",
    image: "https://via.placeholder.com/150", // Placeholder image URL
  },
  // Add more news items as needed
];

export default function DefaultNewsPage() {
  return (
    <DefaultLayout>
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1 className={`${styles.sectionHeadText} text-center`}>
          Coming in Hot 🔥️🔥️
        </h1>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <img
                src={item.image}
                alt={`News ${index + 1}`}
                className="w-full h-58 object-cover rounded-t-lg"
              />
              <h3 className="mt-4 text-xl font-semibold text-eerieBlack">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600">
                {item.description}
              </p>
              <p className="mt-2 text-gray-400 text-sm">
                {item.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}
