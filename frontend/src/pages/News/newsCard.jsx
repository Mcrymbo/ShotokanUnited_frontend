import { AnimatedContainer } from "./featureNews";
import { Clock } from 'lucide-react';
import { Link } from "react-router-dom";


export const CategoryBadge = ({ category }) => (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
        {category}
    </span>
);

export const ReadingTime = ({ time }) => (
    <span className="flex items-center text-sm text-gray-500">
        <Clock className="w-4 h-4 mr-1" />
        {time}
    </span>
);

// News Card Component
export const NewsCard = ({ item, delay = 5 }) => {

       return (
        // <AnimatedContainer delay={delay}>
            <Link
                to={`/news/${item.id}`}
                className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all"
            >
                <div className="relative">
                    <img
                        src={item && item.images[0].image_url || "https://via.placeholder.com/150" }
                        alt={item.title}
                        className="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
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
                    <h3 className="text-lg font-bold mb-3 group-hover:text-orange-600 transition-colors">
                        {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
            </Link>
        // </AnimatedContainer>
    );
};

// Newsletter Section Component
export const NewsletterSection = () => (
    <AnimatedContainer delay={200}>
        <div className="bg-gradient-to-r from-gray-700 to-gray-500 rounded-lg p-12 text-center text-white">
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
                <button className="px-6 py-3 bg-white text-orange-600 rounded-xl font-medium hover:bg-gray-100 transition-colors">
                    Subscribe
                </button>
            </div>
        </div>
    </AnimatedContainer>
);
