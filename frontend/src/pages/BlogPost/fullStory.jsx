import { XCircle, Eye, MessageCircle, Heart } from "lucide-react";
import { motion } from "framer-motion";


// --- Full Story Modal Component ---
export const FullStoryModal = ({ isOpen, onClose, blog }) => {
    if (!isOpen || !blog) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="relative bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-[90vw] mx-4"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-800 transition-colors z-10"
                >
                     <XCircle className="w-6 h-6" />
                </button>

               {/* Story Content */}
                 <div className="p-6 md:p-8 md:py-16 overflow-y-auto max-h-[90vh]">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{blog.title}</h2>
                           <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-md text-sm font-semibold">
                               {blog.category}
                            </span>
                    </div>


                    {/* Author Section */}
                    <div className="flex items-center space-x-4 mb-6">
                        <img 
                            src={blog.authorAvatar}
                            alt={blog.author}
                            className="w-12 h-12 rounded-xl border-2 border-white shadow-lg"
                        />
                        <div>
                            <p className="font-medium text-gray-900">{blog.author}</p>
                            <p className="text-sm text-orange-300">
                                {blog.belt} - {blog.dojo}
                            </p>
                        </div>
                    </div>

                     {/* Date */}
                    <p className="text-gray-600 text-sm mb-4">
                      Published: <span className="font-medium">{blog.date}</span>
                    </p>

                    <p className="text-xl italic my-8">
                        {blog.excerpt}
                    </p>

                   {/* Content Section  */}
                    <div className="mb-6">
                      {blog.content && blog.content.map((item, index) => {
                        switch (item.type) {
                            case 'text':
                                return <p key={index} className="text-gray-700 leading-relaxed mb-4">{item.value}</p>;
                            case 'image':
                                return <img key={index} src={item.value} alt="Blog Image" className="h-80 rounded-lg mb-4 float-left mr-8" />;
                           default:
                              return null;
                        }
                       })}
                     </div>


                    {/* Stats Section */}
                    <div className="clear-left flex items-center space-x-6 mt-6 pt-4 border-t border-gray-200">

                         <div className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                            <Eye className="w-5 h-5" />
                            <span>{blog.views}</span>
                        </div>
                         <div className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                            <MessageCircle className="w-5 h-5" />
                            <span>{blog.comments}</span>
                         </div>

                       {/* Like Button */}
                        <button 
                            className={`flex items-center space-x-2 transition-colors ${blog.isLiked ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'}`}
                            // onClick={toggleLike} // You can add a function here to toggle the state
                        >
                            <Heart className="w-5 h-5" />
                            <span>{blog.likes}</span>
                       </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};