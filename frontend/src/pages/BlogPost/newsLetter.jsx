// --- Newsletter Component ---
export const Newsletter = () => (
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