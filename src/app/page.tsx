import { Hero } from 'Todo/components/home/Hero';
import { Features } from 'Todo/components/home/Features';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
    </div>
  );
};

export default Home;