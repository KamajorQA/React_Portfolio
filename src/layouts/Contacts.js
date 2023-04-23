function Contacts() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Saint-Petersburg, Russia</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Phone / WhatsApp</h2>
            <p>
              <a href="tel:+79641872190">+7 (964) 187-21-90</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram</h2>
            <p>
              <a href="https://t.me/KamajorQA" target="_blank" rel="noreferrer">
                @KamajorQA
              </a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:kamajor@mail.ru">kamajor@mail.ru</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Contacts;
