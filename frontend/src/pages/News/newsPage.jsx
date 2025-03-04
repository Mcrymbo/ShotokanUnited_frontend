import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import { FeaturedArticle, AnimatedContainer } from './featureNews';
import { NewsCard, NewsletterSection } from './newsCard';
import { auth } from '../../hooks';

// Utility for dynamic classNames
const classNames = (...classes) => classes.filter(Boolean).join(' ');

// Scroll Animation Hook
const useScrollAnimation = (selector = '.scroll-animate') => {
      const isInitialRender = useRef(true)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !isInitialRender.current) {
                        entry.target.classList.add('animate-fade-in-up');
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                        observer.unobserve(entry.target); // Stop observing after animation
                    }
                });
            },
            { threshold: 0.1 }
        );

        const animatedElements = document.querySelectorAll(selector);
        animatedElements.forEach(el => observer.observe(el));

         isInitialRender.current = false;

        return () => {
            animatedElements.forEach(el => observer.unobserve(el));
        };
    }, [selector]);
};

export default function DefaultNewsPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [news, setNews] = useState([]);
    const [filteredLatestNews, setFilteredLatestNews] = useState([]);
    const [loading, setLoading] = useState(true);
     const renderCount = useRef(0);


    useEffect(() => {
      renderCount.current = renderCount.current + 1;
        const fetchData = async () => {
            try {
                 setLoading(true);
                 console.log('Fetching news data...');
                const response = await auth.get("/api/news/");
                setNews(response.data.results);
                console.log('News data fetched:', response.data.results);

            } catch (err) {
                console.error('Error fetching news:', err.message)
            } finally {
              setLoading(false);
            }
        }
        fetchData();
        console.log('Component mounted, render count:', renderCount.current);

        return () => {
            console.log('Component unmounted');
        }
    }, []);


    useEffect(() => {
      // Filter the data whenever news changes
      handleCategoryClick(selectedCategory)
    }, [news, selectedCategory])

    useScrollAnimation();

    const handleCategoryClick = useCallback((category) => {
        setSelectedCategory(category);
        const updatedNews =
            category === 'all'
                ? news
                : news.filter(item => item.category === category);
        setFilteredLatestNews(updatedNews);
        console.log("Category set:", category)
    }, [news]);

     const uniqueCategories = useMemo(
        () => Array.from(new Set(news?.map(item => item.category) || [])),
        [news]
    );

    // Debugging the news state
    useEffect(() => {
      console.log("News state:", news);
    }, [news])


    return (
        <DefaultLayout>
            <div className="bg-gray-50 min-h-screen">
                <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    {/* Featured Article */}
                    {loading ? (
                      <p>Loading Featured Article...</p>
                    ) : (
                      news && news.length > 0 ? (
                        <>
                          {console.log("Featured article props", news[0])}
                        <FeaturedArticle article={news[0]} />
                        </>
                      ): (
                        <p>No news available for the featured article</p>
                    )
                    )}


                    {/* Trending Section */}
                    {news && <TrendingSection trending={news.filter((item) => (item.is_trending === true))} />}

                    {/* Latest News Section */}
                    <LatestNewsSection
                        categories={uniqueCategories}
                        selectedCategory={selectedCategory}
                        onCategoryClick={handleCategoryClick}
                        filteredNews={filteredLatestNews}
                    />

                    {/* Newsletter Section */}
                    <NewsletterSection />
                </div>
            </div>
        </DefaultLayout>
    );
}

// Extracted Components
const TrendingSection = ({ trending }) => (
    <div className="mb-16">
        <AnimatedContainer>
            <h2 className="text-3xl font-bold mb-8">Trending Now</h2>
        </AnimatedContainer>
        <div className="grid md:grid-cols-2 gap-8">
            {trending.map((item, index) => (
                <NewsCard key={item.id} item={item} delay={index * 200} />
            ))}
        </div>
    </div>
);

const LatestNewsSection = ({ categories, selectedCategory, onCategoryClick, filteredNews }) => (
    <div>
        <AnimatedContainer>
            <h2 className="text-3xl font-bold mb-8">Latest News</h2>
        </AnimatedContainer>
        <div className="mb-8 flex space-x-4">
            <CategoryButton
                category="all"
                isSelected={selectedCategory === 'all'}
                onClick={() => onCategoryClick('all')}
            />
            {categories.map(category => (
                <CategoryButton
                    key={category}
                    category={category}
                    isSelected={selectedCategory === category}
                    onClick={() => onCategoryClick(category)}
                />
            ))}
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            {filteredNews?.length > 0 ? (
                filteredNews.map((item, index) => (
                    <NewsCard key={item.id} item={item} delay={index * 200} />
                ))
            ) : (
                <p className="text-center text-gray-500">No news available in this category.</p>
            )}
        </div>
    </div>
);

const CategoryButton = ({ category, isSelected, onClick }) => (
    <button
        onClick={onClick}
        className={classNames(
            'px-4 py-2 rounded-md text-sm font-medium',
            isSelected
                ? 'bg-gray-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-100 hover:text-orange-700'
        )}
    >
        {category}
    </button>
);