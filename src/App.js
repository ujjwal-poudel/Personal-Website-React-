import React from 'react';
import { Route, Routes} from "react-router-dom";
import Navigation from 'components/NavigationBar/Navigation';
import Home from 'components/Home';
import About from 'components/About';
import Skills from 'components/Skills';
import Projects from 'components/Projects';
import Contact from 'components/Contact';

function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
}

export default App;
