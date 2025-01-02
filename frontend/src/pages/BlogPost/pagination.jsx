import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- Pagination Button Component ---
const PaginationButton = ({ page, isActive, onClick }) => (
    <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
            isActive 
            ? 'bg-orange-600 text-white shadow-lg shadow-orange-200' 
            : 'bg-white text-gray-600 hover:bg-gray-50'
        }`}
    >
        {page}
    </motion.button>
);

// --- Pagination Control Component ---
export const PaginationControls = ({currentPage, totalPages, handlePageChange, filteredBlogs, itemsPerPage}) => (
    <div className="flex flex-col items-center space-y-4 mt-12">
        <div className="flex items-center space-x-2">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-2 rounded-lg ${
                    currentPage === 1 
                    ? 'text-gray-300 cursor-not-allowed' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
            >
                <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <div className="flex items-center space-x-2">
                {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1;
                    // Show first page, last page, current page, and pages around current
                    if (
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 1 && page <= currentPage + 1)
                    ) {
                        return (
                            <PaginationButton
                                key={page}
                                page={page}
                                isActive={currentPage === page}
                                onClick={() => handlePageChange(page)}
                            />
                        );
                    } else if (
                        page === currentPage - 2 ||
                        page === currentPage + 2
                    ) {
                        return <span key={page} className="text-gray-400">...</span>;
                    }
                    return null;
                })}
            </div>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-lg ${
                    currentPage === totalPages 
                    ? 'text-gray-300 cursor-not-allowed' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
            >
                <ChevronRight className="w-6 h-6" />
            </motion.button>
        </div>
        
        <div className="text-sm text-gray-900">
            Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredBlogs.length)} of {filteredBlogs.length} stories
        </div>
    </div>
);
