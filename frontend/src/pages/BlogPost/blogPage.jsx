import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import DefaultLayout from "../../layout/DefaultLayout";
import { initialBlogs } from '../../constants';
import {NavigationBar} from './navBlog';
import {FeaturedPost} from './featureBlog';
import { CategoryOverview } from './categoryOverview';
import { Newsletter } from './newsLetter';
import { StoriesGrid } from './stories';

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