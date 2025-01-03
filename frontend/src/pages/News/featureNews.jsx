import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CategoryBadge, ReadingTime } from './newsCard';

// Animated Container Component
export const AnimatedContainer = ({ children, delay = 0, className = '' }) => (
    <div
        className={`scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out ${className}`}
        style={{ transitionDelay: `${delay}ms` }}
    >
        {children}
    </div>
);

// Featured Article Component
export const FeaturedArticle = ({ article }) => (
    // <AnimatedContainer>
        <Link
            to={`/news/${article?.id}`}
            className="group relative block rounded-lg overflow-hidden mb-16"
        >
            <div className="relative min-h-[600px]">
                <img
                    src={article?.images[0]?.image_url}
                    alt={article?.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
                    {/* <AnimatedContainer delay={200}> */}
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                            <CategoryBadge category={article?.category} />
                            <ReadingTime time={article?.readTime} />
                            <span className="text-white/90">{article?.date}</span>
                        </div>
                    {/* </AnimatedContainer> */}
                    {/* <AnimatedContainer delay={400}> */}
                        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                            {article?.title}
                        </h1>
                    {/* </AnimatedContainer> */}
                    {/* <AnimatedContainer delay={600}> */}
                        <p className="text-xl text-white/90 mb-6 max-w-3xl">
                            {article?.description}
                        </p>
                        <button className="inline-flex items-center px-6 py-3 bg-white text-orange-600 rounded-lg font-medium transition-all hover:bg-orange-50">
                            Read Full Story
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                    {/* </AnimatedContainer> */}
                </div>
            </div>
        </Link>
    // </AnimatedContainer>
);
