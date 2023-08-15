import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import ApiCall from './pages/ApiCall';
import NotFound from './pages/NotFound';

function App() {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/') {
      setActiveLink('home');
    } else if (path === '/calculator') {
      setActiveLink('calculator');
    } else if (path === '/quote') {
      setActiveLink('quote');
    }
  }, []);

  return (
    <Router>
      <section className="navbar__section">
        <article className="navbar__section__container">
          <h1 className="navbar__title">Math Magicians</h1>
          <nav className="navbar__container">
            <ul className="nav__links__container">
              <NavLink
                to="/"
                className={
                  activeLink === 'home' ? 'activeLink' : 'nav__link__item'
                }
                onClick={() => handleLinkClick('home')}
              >
                Home
              </NavLink>
              <NavLink
                to="calculator"
                className={
                  activeLink === 'calculator' ? 'activeLink' : 'nav__link__item'
                }
                onClick={() => handleLinkClick('calculator')}
              >
                Calculator
              </NavLink>
              <NavLink
                to="quote"
                className={
                  activeLink === 'quote' ? 'activeLink' : 'nav__link__item'
                }
                onClick={() => handleLinkClick('quote')}
              >
                Quote
              </NavLink>
            </ul>
          </nav>
        </article>
      </section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<ApiCall />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
