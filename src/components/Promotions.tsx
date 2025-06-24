
const Promotions = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl overflow-hidden">
            <div className="p-6 md:p-8 flex flex-col h-full">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                Limited Time
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Summer Fruits Sale
              </h3>
              <p className="text-gray-600 mb-4">
                Get up to 30% off on all seasonal fruits. Fresh and juicy, perfect for summer!
              </p>
              <div className="mt-auto">
                <a 
                  href="/products?category=produce&discount=true" 
                  className="inline-block bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-600 hover:text-white transition-colors border border-blue-600"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-50 rounded-xl overflow-hidden">
            <div className="p-6 md:p-8 flex flex-col h-full">
              <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                New Arrivals
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Organic Collection
              </h3>
              <p className="text-gray-600 mb-4">
                Discover our new range of certified organic products. Healthy and sustainable choices.
              </p>
              <div className="mt-auto">
                <a 
                  href="/products?organic=true" 
                  className="inline-block bg-white text-amber-600 px-4 py-2 rounded-md font-medium hover:bg-amber-600 hover:text-white transition-colors border border-amber-600"
                >
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;