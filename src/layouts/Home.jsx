import Header from '../components/Header/Header';

function Home() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">I'm currently using</h2>
              <p>
                JavaScript, TypeScript, React, Redux Toolkit, RTK Query,
                Firebase
              </p>
              <p>CSS Modules, SCSS, Tailwind, AntDesign</p>
              <p>Jest, NPM, GitHub Actions</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default Home;
