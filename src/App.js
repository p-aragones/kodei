import React from 'react';

import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import { Suspense } from 'react';
import Services from './pages/Services/Services';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/translation.json"
    },
    fallbackLng: "cat",
    detection: {
      order: ['cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie', 'localStorage']
    },
    interpolation: { escapeValue: false },
  });

function App() {
  return (
    <Suspense fallback="Loading...">
      <div className="App">
          <Router>
            <ScrollToTop />
            <NavBar/>
            <Routes>
              <Route exact path="/" element={<Home/>}/>\
              <Route exact path="/services" element={<Services/>}/>
              <Route exact path="/contact" element={<Contact/>}/>
              <Route exact path="/about" element={<About/>}/>
            </Routes>
            <Footer/>
          </Router>
      </div>
    </Suspense>
  );
}

export default App;
