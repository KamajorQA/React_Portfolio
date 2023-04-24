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
      <Navigation />
      {/* <Home /> */}
      {/* <Projects /> */}
      {/* <Contacts /> */}
      <ProjectPage />
      <Footer />
    </div>
  );
}

export default App;
