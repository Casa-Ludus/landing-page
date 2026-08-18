import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Newsletter } from './components/Newsletter';
import { About } from './components/About';
import { Events } from './components/Events';
import { Community } from './components/Community';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main>
        <Hero />
        <Newsletter />
        <About />
        <Events />
        <Community />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
