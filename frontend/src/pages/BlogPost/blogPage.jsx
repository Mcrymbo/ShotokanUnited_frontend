import React, { useState, useEffect } from 'react';
import { Heart, Eye, MessageCircle, Share2, Plus, ArrowRight,  X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DefaultLayout from "../../layout/DefaultLayout";
import { initialBlogs } from '../../constants';
import {NavigationBar} from './navBlog';
import {FeaturedPost} from './featureBlog';
import { CategoryOverview } from './categoryOverview';
import { PaginationControls } from './pagination';

// --- Helper Function ---
const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scrollPosition;
};


// --- Story Card Component ---
const StoryCard = ({ blog, index, scrollPosition, handleStoryClick }) => (
    <div 
    className={`relative group cursor-pointer ${index % 2 === 0 ? 'lg:translate-y-16' : ''}`}
        style={{
            transform: `translateY(${Math.sin(scrollPosition * 0.002 + index) * 10}px)`
        }}
         onClick={() => handleStoryClick(blog)}
    >
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
        <div className="relative bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm transition-all duration-500">
            <div className="overflow-hidden">
                <img 
                    src={blog.photo}
                    alt={blog.title}
                    className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
            </div>
            
             {/* Category & Read Time */}
            <div className="absolute top-6 right-6 flex flex-col gap-3">
                <span className="bg-white/90 backdrop-blur-lg px-4 py-2 rounded-sm text-sm font-medium text-gray-700 shadow-sm">
                    {blog.readTime}
                </span>
                <span className="bg-orange-500/90 backdrop-blur-lg px-4 py-2 rounded-sm text-sm font-medium text-white shadow-sm">
                    {blog.category}
                </span>
            </div>

            <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                    <img 
                        src={blog.authorAvatar}
                        alt={blog.author}
                        className="w-12 h-12 rounded-xl border-2 border-white shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div>
                        <p className="font-medium text-gray-900">{blog.author}</p>
                        <p className="text-sm text-orange-300">{blog.belt}</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-700 transition-colors duration-300">
                    {blog.title}
                </h2>
                
                <p className="text-gray-600 mb-6 line-clamp-3">
                    {blog.excerpt}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                            <Eye className="w-5 h-5" />
                            <span>{blog.views}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                            <MessageCircle className="w-5 h-5" />
                            <span>{blog.comments}</span>
                        </button>
                    </div>
                    <button className="text-orange-600 font-medium hover:text-orange-700 transition-colors">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    </div>
);


// --- Stories Grid Component ---
const StoriesGrid = ({ blogs, featuredBlog, scrollPosition, handleStoryClick, currentPage, itemsPerPage, setcurrentPage }) => {
    const getPaginatedBlogs = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return blogs.slice(startIndex, endIndex);
    };

    const totalPages = Math.ceil(blogs.length / itemsPerPage);
    
    const handlePageChange = (newPage) => {
        // Scroll to the top of the grid with smooth animation
        const gridElement = document.querySelector('#stories-grid');
        if (gridElement) {
            gridElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setcurrentPage(newPage);
    };


    return(
         <div className="container mx-auto md:px-4">
            <div id="stories-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <AnimatePresence mode="wait">
                    {getPaginatedBlogs().map((blog, index) => (
                        <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <StoryCard blog={blog} index={index} scrollPosition={scrollPosition} handleStoryClick={handleStoryClick}/>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
            
            {totalPages > 1 && <PaginationControls currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} filteredBlogs={blogs} itemsPerPage={itemsPerPage}/>}
        </div>
    );
};

// --- Newsletter Component ---
const Newsletter = () => (
    <div className="container mx-auto md:px-4 py-8 md:py-20">
        <div className="bg-gradient-to-r from-gray-700 to-gray-500 rounded-lg p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Join Our Karate Community</h2>
            <p className="mb-8">Get weekly insights from master practitioners and stay updated with the latest stories.</p>
            <div className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-6 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="px-6 py-3 bg-white text-orange-600 rounded-xl font-medium hover:bg-gray-100 transition-colors">
                    Subscribe
                </button>
            </div>
        </div>
    </div>
);


const BlogPage = () => {
    const scrollPosition = useScrollPosition();
    const [activeFilter, setActiveFilter] = useState('All');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [featuredBlog, setFeaturedBlog] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const categories = ['All', 'Personal Journey', 'Technique', 'Training', 'Philosophy'];
    const [blogs, setBlogs] = useState(initialBlogs);
    const [filteredBlogs, setFilteredBlogs] = useState([]);

    useEffect(() => {
        //set featured blog
        const initialFeatured = blogs.find(b => b.featured);
        setFeaturedBlog(initialFeatured);

        //set initial filtering
        handleFilterBlogs(activeFilter, blogs, initialFeatured);
    }, []);

    useEffect(() => {
        handleFilterBlogs(activeFilter, blogs, featuredBlog);
    }, [activeFilter, blogs, featuredBlog]);


    const handleFilterBlogs = (filter, blogs, featuredBlog) => {
      let filtered;
        if (filter === 'All') {
            filtered = blogs.filter(blog => blog.id !== featuredBlog?.id);
        } else {
            filtered = blogs.filter(blog =>
              blog.category === filter && blog.id !== featuredBlog?.id
          );
        }

      setFilteredBlogs(filtered);
    }

    const handleStoryClick = (blog) => {
         if (blog.id === featuredBlog?.id) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setFeaturedBlog(blog);
    };

    return (
        <DefaultLayout className="bg-gradient-to-br from-gray-50 to-blue-50/30">
            <div className="relative">
                <FeaturedPost blog={featuredBlog} scrollPosition={scrollPosition} />
                <NavigationBar
                    categories={categories}
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                    isMobileMenuOpen={isMobileMenuOpen}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                />
               <CategoryOverview
                    categories={categories}
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                    blogs={blogs}
                />
                 <StoriesGrid
                     blogs={filteredBlogs}
                     featuredBlog={featuredBlog}
                     scrollPosition={scrollPosition}
                     handleStoryClick={handleStoryClick}
                     currentPage={currentPage}
                     itemsPerPage={itemsPerPage}
                     setcurrentPage={setCurrentPage}
                 />
                 <Newsletter/>

                <button className="fixed bottom-8 right-8 bg-gradient-to-r from-orange-600 to-orange-800 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 z-50 group">
                    <Plus className="w-6 h-6 transform group-hover:rotate-90 transition-transform duration-300" />
                </button>
            </div>
        </DefaultLayout>
    );
};

export default BlogPage;