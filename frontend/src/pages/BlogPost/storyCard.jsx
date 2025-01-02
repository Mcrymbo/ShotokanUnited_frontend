import { Eye, MessageCircle } from 'lucide-react';

// --- Story Card Component ---
export const StoryCard = ({ blog, index, scrollPosition, handleStoryClick }) => (
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
            {/* <div className="absolute top-6 right-6 flex flex-col gap-3">
                <span className="bg-white/90 backdrop-blur-lg px-4 py-2 rounded-sm text-sm font-medium text-gray-700 shadow-sm">
                    {blog.readTime}
                </span>
                <span className="bg-orange-500/90 backdrop-blur-lg px-4 py-2 rounded-sm text-sm font-medium text-white shadow-sm">
                    {blog.category}
                </span>
            </div> */}

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
                    <span className="bg-gray-500/10 px-4 py-2 rounded-sm text-sm font-medium text-gray-700">
                        {blog.readTime}
                    </span>
                </div>
            </div>
        </div>
    </div>
);