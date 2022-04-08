import Header from 'infrastructure/components/Header/Header';
import Hero from 'infrastructure/components/Hero/Hero';
import URLShortening from 'infrastructure/components/URLShortening/URLShortening';
import Description from 'infrastructure/components/Description/Description';
import CallToAction from 'infrastructure/components/CallToAction/CallToAction';
import Footer from 'infrastructure/components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <URLShortening />
        <Description />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

export default Home;
