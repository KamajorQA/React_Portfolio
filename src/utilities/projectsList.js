import reactNews from '../assets/img/projects/ReactNewsPreview.png';
import reactNewsBig from '../assets/img/projects/ReactNewsBig.png';
import flappyBirds from '../assets/img/projects/FlappyBirdsPreview.png';
import flappyBirdsBig from '../assets/img/projects/FlappyBirdsBig.png';
import greedyDragons from '../assets/img/projects/GreedyDragonsPreview.png';
import greedyDragonsBig from '../assets/img/projects/GreedyDragonsBig.png';
import greenCorp from '../assets/img/projects/GreenCorpPreview.png';
import greenCorpBig from '../assets/img/projects/GreenCorpBig.png';

const projectsList = [
  {
    title: 'React News',
    previewImg: reactNews,
    bigImg: reactNewsBig,
    description: 'Fully functional News Portal as SPA on React',
    details: `Полноценный новостной портал в формате single page application, написанный на javascript-библиотеке React.
      Реализованы все основные CRUD-операции, включая регистрацию и авторизацию пользователя на портале, загрузку списка статей с удаленного сервера, добавление, редактирование и удаление статей, добавление в избранное, редактирование данных пользователя.
      Взаимодействие с бэкендом по REST API через отправку fetch-запросов.
      Чтение, редактирование данных текущего пользователя и добавление в избранное доступны любому авторизованному пользователю.
      Для перехода к основному контенту новый пользователь может зарегистрироваться сам или использовать данные следующие тестового юзера:
       login: KamJQA@yandex.ru password: Mariner2! 
       Добавление, редактирование и удаление статей доступны только (псевдо)администратору. Доступ к данному функционалу автор сайта предоставляет по запросу.
       Из сторонних библиотек использованы только React Router v6.4 и Fontawesome.
       Все формы, их валидация, подсказки, уведомления, элементы интерфейса и их стили написаны самостоятельно.`,
    stack: 'React, React Router, React Context, module CSS, REST API',
    gitHubLink: 'https://github.com/KamajorQA/React_News',
    deployLink: 'https://reactnews-project.netlify.app/',
    slug: 'ReactNews',
    presentation:
      'https://drive.google.com/file/d/1tYtA18EhkXFyx7-d6n3kQ7KVHraIokYn/view',
  },
  {
    title: 'FlappyBirds Game',
    previewImg: flappyBirds,
    bigImg: flappyBirdsBig,
    description: 'Simple interactive in-browser game',
    details: `Простой аналог браузерной игры Flappy Birds. 
      Управление с клавиатуры. Сохранение текущего и наилучшего результата в localStorage. 
      Написана на Canvas с использованием библиотеки для рисования P5.`,
    stack: 'JavaScript, HTML5, CSS3, Canvas, P5 library',
    gitHubLink:
      'https://github.com/KamajorQA/Pet_JS_samples/tree/main/Zest_Canvas_Flappy_minigame',
    deployLink: 'https://flappybirds-game.netlify.app/',
    slug: 'FlappyBirds',
  },
  {
    title: 'Greedy Dragons',
    previewImg: greedyDragons,
    bigImg: greedyDragonsBig,
    description:
      'Dragonomicon project with CRUD-operations on vanilla JavaScript',
    details: `Небольшая энциклопедия драконов на чистом JavaScript, HTML и CSS.
    Реализованы основные CRUD-операции: получение списка постов с сервера, добавление новых драконов, редактирование, удаление, постановка лайков.
    Авторизация фейковая и необязательная, но с сохранением введенных данных в cookies и дальнейшей проверкой ранее осуществленной авторизации с автоматическим закрытием модального окна и сокрытием кнопки авторизации.
    Повторяющиеся DOM-элементы рендерятся через тег template.
    Взаимодействие с сервером через Fetch API.`,
    stack: 'JavaScript, HTML5, CSS3, Fetch API',
    gitHubLink: 'https://github.com/KamajorQA/Greedy_Dragons',
    deployLink: 'https://greedy-dragons.netlify.app/',
    slug: 'GreedyDragons',
  },
  {
    title: 'GreenCorp Landing',
    previewImg: greenCorp,
    bigImg: greenCorpBig,
    description: 'Static Landing page with JS animations',
    details: `Классическая посадочная страница на чистом HTML, CSS и JS. 
    Реализовано изменение некоторых элементов через JS, а также анимация заднего фона на Canvas.`,
    stack: 'JavaScript, HTML5, CSS3, Canvas',
    gitHubLink: 'https://github.com/KamajorQA/Project-1',
    deployLink: 'https://kamajorqa.github.io/Project-1/',
    slug: 'GreenCorp',
  },
];

export default projectsList;
