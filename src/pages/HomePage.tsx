
import Hero from '../components/Hero';
import FeaturedCategories from '../components/FeaturedCategories';
import FeaturedProducts from '../components/FeaturedProducts';
import Promotions from '../components/Promotions';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <Promotions />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default HomePage;