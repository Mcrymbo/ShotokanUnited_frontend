import { Menu, Search } from 'lucide-react'

// --- Navigation Component ---
export const NavigationBar = ({ categories, activeFilter, setActiveFilter, isMobileMenuOpen, setIsMobileMenuOpen }) => {
    return (
        <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    {/* Mobile Menu Button */}
                    <button 
                        className="lg:hidden p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>

                    {/* Desktop Category Filters */}
                    <div className="hidden lg:flex items-center space-x-2">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                                    activeFilter === category 
                                    ? 'bg-gray-600/80 text-white shadow-sm shadow-blue-500/30' 
                                    : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="relative ml-auto lg:ml-0">
                        <input
                            type="text"
                            placeholder="Search stories..."
                            className="pl-12 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full lg:w-64"
                        />
                        <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-gray-100">
                        <div className="flex flex-col space-y-2">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => {
                                        setActiveFilter(category);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className={`px-4 py-2 rounded-md transition-all duration-300 ${
                                        activeFilter === category 
                                        ? 'bg-gray-600/80 text-white shadow-sm shadow-blue-500/30' 
                                        : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
