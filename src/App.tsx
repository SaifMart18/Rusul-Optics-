/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ContactLenses from "./pages/ContactLenses";
import SpanishLenses from "./pages/SpanishLenses";
import FrenchLenses from "./pages/FrenchLenses";
import KoreanLenses from "./pages/KoreanLenses";
import ItalianLenses from "./pages/ItalianLenses";
import EnglishLenses from "./pages/EnglishLenses";
import Accessories from "./pages/Accessories";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen selection:bg-gold selection:text-black">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-lenses" element={<ContactLenses />} />
            <Route path="/contact-lenses/spanish" element={<SpanishLenses />} />
            <Route path="/contact-lenses/french" element={<FrenchLenses />} />
            <Route path="/contact-lenses/korean" element={<KoreanLenses />} />
            <Route path="/contact-lenses/italian" element={<ItalianLenses />} />
            <Route path="/contact-lenses/english" element={<EnglishLenses />} />
            <Route path="/contact-lenses/accessories" element={<Accessories />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
