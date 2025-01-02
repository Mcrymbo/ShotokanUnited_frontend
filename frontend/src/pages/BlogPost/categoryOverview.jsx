// --- Category Overview Component ---
export const CategoryOverview = ({ categories, activeFilter, setActiveFilter, blogs }) => (
    <div className="container mx-auto px-4 py-10">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {categories.filter(cat => cat !== 'All').map((category) => (
               <button
                   key={category}
                   onClick={() => setActiveFilter(category)}
                   className={`p-6 rounded-2xl border transition-all duration-300 ${
                       activeFilter === category
                       ? 'border-blue-500 bg-blue-50'
                       : 'border-gray-200 hover:border-blue-300'
                   }`}
               >
                   <h3 className="text-lg font-semibold mb-2">{category}</h3>
                   <p className="text-sm text-gray-600">
                       {blogs.filter(b => b.category === category).length} stories
                   </p>
               </button>
           ))}
       </div>
   </div>
);