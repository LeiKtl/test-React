import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.scss';
import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';
import Contact from './pages/contact';
import Error from './pages/error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                    <Route path="/contact" element={<Contact />}/>
                <Route path="*" element={<Error />}/>
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
);