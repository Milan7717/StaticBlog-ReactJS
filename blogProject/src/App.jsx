import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home"
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Travelling from "./pages/Travelling";
import Friends from "./pages/Friends";
import ImageCarousel from "./components/ImageCarousel";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/travelling' element={<Travelling />} />
          <Route path="/friends" element={<Friends />} />

          <Route path='/imagecarousel' element={<ImageCarousel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
