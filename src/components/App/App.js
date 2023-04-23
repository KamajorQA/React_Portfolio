import Navigation from '../Navigaton/Navigation';
import Footer from '../Footer/Footer';
import Home from '../../layouts/Home';
import Projects from '../../layouts/Projects';
import './app.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <Home /> */}
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
