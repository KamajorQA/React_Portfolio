import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from '../../utilities/ScrollToTop';
import Navigation from '../Navigaton/Navigation';
import Footer from '../Footer/Footer';
import Home from '../../layouts/Home';
import Projects from '../../layouts/Projects';
import Contacts from '../../layouts/Contacts';
import ProjectPage from '../../layouts/ProjectPage';
import './app.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
