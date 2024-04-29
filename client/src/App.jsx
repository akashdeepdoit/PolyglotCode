import React from 'react';
import Translate from './pages/Translate';
import Footer from './components/Footer';
import BugFix from './pages/BugFix'; // (Assuming BugFix doesn't render its own <Router>)
import Navbar from './components/Navbar';
import { Link, Route, Routes } from 'react-router-dom';

const App = () =>
(
  <>
    <div className='bg-gray-500' style={{ overflow: "hidden" }}>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Translate />} />
          <Route path="/bugfix" element={<BugFix />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </>
);

export default App;