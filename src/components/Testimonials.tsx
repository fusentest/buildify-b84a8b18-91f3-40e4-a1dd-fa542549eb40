
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    rating: 5,
    text: 'I love shopping at FreshMart! The produce is always fresh and the delivery is prompt. Their organic selection is amazing.',
    date: '2 weeks ago'
  },
  {
    id: 2,
    name: 'Michael Chen',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 4,
    text: 'Great selection of products and competitive prices. The app is easy to use and I appreciate the weekly deals.',
    date: '1 month ago'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    rating: 5,
    text: 'The quality of meat and seafood is exceptional. I\'ve been a regular customer for over a year and have never been disappointed.',
    date: '3 weeks ago'
  }
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their shopping experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-2">"{testimonial.text}"</p>
              <p className="text-sm text-gray-500">{testimonial.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;