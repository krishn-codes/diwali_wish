import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home';
import { Wishes } from './pages/Wishes';
import { FireworksCanvas } from './components/Fireworks/FireworksCanvas';
import { GoldenSparkles } from './components/Particles/GoldenSparkles';
import { FestiveMusic } from './components/AudioPlayer/FestiveMusic';
import { LoadingScreen } from './components/LoadingScreen/LoadingScreen';

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<'home' | 'wishes'>('home');

  return (
    <div className="relative min-h-screen bg-[#080611] text-diwali-ivory selection:bg-diwali-gold selection:text-diwali-midnight font-body overflow-x-hidden">
      {/* Initial Cinematic Loading Screen */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* Global Ambient Background Effects */}
      <FireworksCanvas interactive={true} frequency={5000} />
      <GoldenSparkles />

      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={(page) => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setCurrentPage(page);
        }}
      />

      {/* Main Pages with Smooth Fade Transitions */}
      <main className="relative z-20">
        <AnimatePresence mode="wait">
          {currentPage === 'home' ? (
            <motion.div
              key="home-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Home onNavigate={setCurrentPage} />
            </motion.div>
          ) : (
            <motion.div
              key="wishes-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Wishes onNavigate={setCurrentPage} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Ambient Indian Classical Music Player */}
      <FestiveMusic />
    </div>
  );
}

export default App;
