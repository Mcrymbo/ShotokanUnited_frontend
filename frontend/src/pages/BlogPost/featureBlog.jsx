import { ArrowRight } from "lucide-react";

// --- Featured Post Component ---
export const FeaturedPost = ({ blog, scrollPosition,  onReadFullStoryClick }) => {
    if (!blog) return null;
    
    return (
        <div className="relative w-full min-h-[60vh] lg:min-h-[90vh] mb-8 md:mb-16 lg:mb-32 overflow-hidden group">
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-[url('https://unsplash.it/300/2500')] opacity-20 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
            
            {/* Parallax Image */}
            <img 
                src={blog.photo}
                alt={blog.title}
                className="absolute inset-0 w-full h-full object-cover transform scale-110 group-hover:scale-105 transition-transform duration-700"
                 style={{ 
                    transform: `translateY(${scrollPosition * 0.5}px) scale(1.1)`,
                }}
            />
            
            {/* Content */}
            <div className="absolute inset-0 z-20 flex items-center p-4 sm:p-8">
                <div className="w-full max-w-4xl">
                    <div className="flex items-center space-x-4 mb-4 md:mb-2">
                        <div className="h-1 w-12 md:w-20 bg-orange-500" />
                        <span className="text-sm md:text-base text-orange-500 font-bold uppercase tracking-wider">Featured Story</span>
                    </div>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-8 leading-tight transform -rotate-1 break-words">
                        {blog.title}
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 md:mb-8 leading-relaxed max-w-2xl">
                        {blog.excerpt}
                    </p>
                    
                     <div className="absolute -bottom-2 left-4 right-4 md:left-[30%] mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20">
                        <div className="flex items-center space-x-4 md:space-x-6 mb-4 sm:mb-0">
                            <div className="relative">
                                <img 
                                    src={blog.authorAvatar}
                                    alt={blog.author}
                                    className="w-12 h-12 md:w-16 md:h-16 rounded-md border-2 border-white/50"
                                />
                                <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-sm rotate-12">
                                    {blog.belt}
                                </div>
                            </div>
                            <div>
                                <p className="text-white font-semibold text-sm md:text-base">{blog.author}</p>
                                <p className="text-orange-300 text-xs md:text-sm">{blog.dojo}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => onReadFullStoryClick(blog)}
                            className="w-full sm:w-auto px-4 md:px-6 py-2 md:py-3 bg-orange-700/90 text-white rounded-md font-semibold flex items-center justify-center space-x-2 hover:bg-orange-700/60 transition-all duration-300 group shadow-lg hover:shadow-blue-500/50">
                            <span>Read Full Story</span>
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
             {/* Decorative Shapes */}
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-t from-blue-600/20 to-purple-600/20 blur-3xl" />
        </div>
    );
};