import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import { PaginationControls } from './pagination';
import { StoryCard } from './storyCard';


// --- Stories Grid Component ---
export const StoriesGrid = ({ blogs, scrollPosition, handleStoryClick, currentPage, itemsPerPage, setcurrentPage }) => {
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
                            transition={{ duration: 0.3, ease: "easeInOut", delay: index * 0.1 }}
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
