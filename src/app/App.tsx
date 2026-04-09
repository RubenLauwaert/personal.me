import { BrowserRouter, Routes, Route } from 'react-router';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
