import Hero from './Hero.jsx';
import About from './About/index.jsx';

const Home = () => {
  return (
    <div className="h-full">
      <main className="h-full">
        <Hero />
        <About />
      </main>
    </div>
  );
};

export default Home;