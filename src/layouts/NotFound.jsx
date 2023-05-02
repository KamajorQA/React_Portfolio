import Vincent from '../assets/img/Vincent.jpg';

function NotFound() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">404</h2>
        <article className="content-list">
          <figure>
            <h2 className="title-2">Not Found</h2>
            <img
              src={Vincent}
              alt="Frustrated Vincent Vega img"
              className="vincent-image"
            />
            <figcaption>...looks like you took a wrong path</figcaption>
          </figure>
        </article>
      </div>
    </main>
  );
}

export default NotFound;
