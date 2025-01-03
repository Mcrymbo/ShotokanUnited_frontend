import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DefaultLayout from '../../layout/DefaultLayout';
import { Clock, ArrowRight, Tag, TrendingUp, Share2 } from 'lucide-react';

// Mock Data
const mockNews = {
  featured: {
    id: 1,
    title: "World Karate Championship 2025: Team Selection Announced",
    description: "In a highly anticipated announcement, the national team roster has been finalized for the upcoming World Karate Championship. The selection includes both veteran champions and promising newcomers, representing various dojos across the country.",
    date: "March 15, 2025",
    category: "Championships",
    imageUrl: "https://source.unsplash.com/random/1200x600",
    readTime: "5 min read"
  },
  trending: [
    {
      id: 2,
      title: "New Training Methodology Revolutionizes Kata Practice",
      description: "Revolutionary approach combines traditional techniques with modern sports science.",
      date: "March 14, 2025",
      category: "Training",
      imageUrl: "https://source.unsplash.com/random/800x600/?martial-arts",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Youth Development Program Launches Nationwide",
      description: "Initiative aims to introduce karate to schools across the country.",
      date: "March 13, 2025",
      category: "Community",
      imageUrl: "https://source.unsplash.com/random/800x600/?dojo",
      readTime: "3 min read"
    }
  ],
  latest: [
    {
      id: 4,
      title: "International Seminar: Masters Share Ancient Techniques",
      description: "Leading senseis from Japan conduct exclusive workshops on traditional karate forms.",
      date: "March 12, 2025",
      category: "Events",
      imageUrl: "https://source.unsplash.com/random/800x600/?japanese-martial-arts",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Digital Dojo: Virtual Training Platform Launch",
      description: "New online platform brings expert instruction to practitioners worldwide.",
      date: "March 11, 2025",
      category: "Technology",
      imageUrl: "https://source.unsplash.com/random/800x600/?training",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "Championship Series Dates Announced for 2025",
      description: "Major tournaments scheduled across multiple cities with increased prize pools.",
      date: "March 10, 2025",
      category: "Tournaments",
      imageUrl: "https://source.unsplash.com/random/800x600/?competition",
      readTime: "5 min read"
    }
  ]
};

const CategoryBadge = ({ category }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
    {category}
  </span>
);

const ReadingTime = ({ time }) => (
  <span className="flex items-center text-sm text-gray-500">
    <Clock className="w-4 h-4 mr-1" />
    {time}
  </span>
);

// Scroll Animation Hook
const useScrollAnimation = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.scroll-animate');
    setElements(animatedElements);

    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return elements;
};

// Animated Container Component
const AnimatedContainer = ({ children, delay = 0, className = '' }) => (
  <div 
    className={`scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out ${className}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    {children}
  </div>
);

export default function DefaultNewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  useScrollAnimation(); // Initialize scroll animations

  return (
    <DefaultLayout>
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* Featured Article */}
          <AnimatedContainer>
            <Link 
              to={`/news/${mockNews.featured.id}`}
              className="group relative block rounded-2xl overflow-hidden mb-16"
            >
              <div className="relative h-[600px]">
                <img
                  src={mockNews.featured.imageUrl}
                  alt={mockNews.featured.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
                  <AnimatedContainer delay={200}>
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <CategoryBadge category={mockNews.featured.category} />
                      <ReadingTime time={mockNews.featured.readTime} />
                      <span className="text-white/90">{mockNews.featured.date}</span>
                    </div>
                  </AnimatedContainer>
                  <AnimatedContainer delay={400}>
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                      {mockNews.featured.title}
                    </h1>
                  </AnimatedContainer>
                  <AnimatedContainer delay={600}>
                    <p className="text-xl text-white/90 mb-6 max-w-3xl">
                      {mockNews.featured.description}
                    </p>
                    <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium transition-all hover:bg-blue-50">
                      Read Full Story
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </AnimatedContainer>
                </div>
              </div>
            </Link>
          </AnimatedContainer>

          {/* Trending Section */}
          <div className="mb-16">
            <AnimatedContainer>
              <h2 className="text-3xl font-bold mb-8">Trending Now</h2>
            </AnimatedContainer>
            <div className="grid md:grid-cols-2 gap-8">
              {mockNews.trending.map((item, index) => (
                <AnimatedContainer key={item.id} delay={index * 200}>
                  <Link
                    to={`/news/${item.id}`}
                    className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all"
                  >
                    <div className="relative">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <CategoryBadge category={item.category} />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                        <ReadingTime time={item.readTime} />
                        <span>{item.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </Link>
                </AnimatedContainer>
              ))}
            </div>
          </div>

          {/* Latest News Section */}
          <div>
            <AnimatedContainer>
              <h2 className="text-3xl font-bold mb-8">Latest News</h2>
            </AnimatedContainer>
            <div className="grid md:grid-cols-3 gap-8">
              {mockNews.latest.map((item, index) => (
                <AnimatedContainer key={item.id} delay={index * 200}>
                  <Link
                    to={`/news/${item.id}`}
                    className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all"
                  >
                    <div className="relative">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4">
                        <CategoryBadge category={item.category} />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                        <ReadingTime time={item.readTime} />
                        <span>{item.date}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-3 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </Link>
                </AnimatedContainer>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <AnimatedContainer delay={200}>
            <div className="mt-16 bg-blue-600 rounded-2xl p-8 sm:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest karate news, tournament updates, and training tips.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </DefaultLayout>
  );
}