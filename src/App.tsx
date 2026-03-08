import { HomePage } from "./modules/HomePage/HomePage";
import "./App.scss";
import "../src/assets/fonts/fonts.scss";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      // Глобальні налаштування:
      duration: 1000, // тривалість анімації в мс
      once: false,    // чи анімувати лише один раз при скролі
      mirror: true,   // чи анімувати елемент знову, якщо ви скролите повз нього вгору
      offset: 120,    // відступ від початкової точки тригера (в пікселях)
    });
  }, []);
  return <HomePage />;
}

export default App;
