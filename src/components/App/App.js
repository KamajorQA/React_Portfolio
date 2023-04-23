import Navigation from '../Navigaton/Navigation';
import Header from '../Header/Header';
import './app.css';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">I'm currently using</h2>
              <p>
                JavaScript, ReactJS, React Router, HTML, CSS & module CSS, NPM,
                AntDesign
              </p>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
