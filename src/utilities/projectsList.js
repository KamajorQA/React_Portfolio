import reactNews from '../assets/img/projects/ReactNewsPreview.png';
import reactNewsBig from '../assets/img/projects/ReactNewsBig.png';
import kittyPaws from '../assets/img/projects/KittyPawsPreview.png';
import kittyPawsBig from '../assets/img/projects/KittyPawsBig.png';
import fireBlog from '../assets/img/projects/FireBlogPreview.png';
import fireBlogBig from '../assets/img/projects/FireBlogBig.png';
import exquisiteGallery from '../assets/img/projects/ExquisiteGalleryPreview.png';
import exquisiteGalleryBig from '../assets/img/projects/ExquisiteGalleryBig.png';
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
      Для перехода к основному контенту новый пользователь может зарегистрироваться сам или использовать данные следующего тестового юзера:
       login: KamJQA@yandex.ru password: Mariner2! . 
       Добавление, редактирование и удаление статей доступны только (псевдо)администратору.
       Доступ к данному функционалу автор сайта предоставляет по запросу. 
       Из сторонних библиотек использованы только React Router v6.4 и Fontawesome.
       Все формы, их валидация, подсказки, уведомления, элементы интерфейса и их стили написаны самостоятельно`,
    stack: 'React, React Router, React Context, module CSS, REST API',
    gitHubLink: 'https://github.com/KamajorQA/React_News',
    deployLink: 'https://reactnews-project.netlify.app/',
    slug: 'ReactNews',
    presentation:
      'https://drive.google.com/file/d/1tYtA18EhkXFyx7-d6n3kQ7KVHraIokYn/view',
  },
  {
    title: 'Kitty Paws',
    previewImg: kittyPaws,
    bigImg: kittyPawsBig,
    description: 'SPA table view database for cats on Firebase & TypeScript',
    details: `React SPA-проект отображения в табличном виде списка котов из собственной NoSQL БД Firestore.
    Реализованы все CRUD-операции и авторизация. 
    Авторизация пользователей происходит согласно спецификации OAuth через провайдера Google посредством сервиса Firebase. 
    Проект реализован в соответствии с поставленным ТЗ и требованиями, описанными в notion, включая
    одновременную имплементацию легаси-подходов (классовые компоненты, библиотека PropTypes),
     современных методов (TypeScript, функциональные компоненты), 
     конкурирующих инструментов (React Context, Redux Toolkit, RTK Query, Firestore API). 
    Интерфейс описан с помощью UI-библиотеки Ant Design и собственной CSS-стилизации.
    Для отдельных элементов использованы библиотеки react-icons (svg-иконки) 
    и  react-loader-spinner (спиннер).
    Отображение страницы избранного реализовано в виде слайдера. 
    Настроен CI/CD через GitHub Actions.
    Деплой на Netlify. 
    Бэкенд реализован самостоятельно через Firebase & Firestore. 
    CRUD-операции реализованы через имплементацию связки Firestore API и RTK Query`,
    stack:
      'React, TypeScript, JavaScript, Firebase, Redux Toolkit, RTK Query, Ant Design, GitHub Actions',
    gitHubLink: 'https://github.com/KamajorQA/Kitty_Paws',
    deployLink: 'https://kitty-paws.netlify.app/',
    slug: 'KittyPaws',
  },
  {
    title: 'Fire Blog',
    previewImg: fireBlog,
    bigImg: fireBlogBig,
    description: 'Blog website with Firebase backend and base testing',
    details: `Блог на React с самостоятельно реализованным бэкендом на Firebase и базовым unit-тестированием. 
    Настроен CI/CD через GitHub Actions.
    Деплой на Netlify. 
    Интерфейс описан с помощью UI-библиотеки Ant Design и собственной CSS-стилизации.
    Реализована пагинация с возможностями выбора количества отображаемых карточек 
    на странице и быстрым переходом к указанной странице. 
    Авторизация пользователей происходит согласно спецификации OAuth 
    через провайдера Google посредством сервиса Firebase. 
    Для хранения данных использована собственная NoSQL БД Firestore.
    CRUD-операции реализуются через Firestore API. 
    Описаны базовые unit-тесты с jest-моками для компонентов, кастомных хуков и Redux-слайса`,
    stack:
      'React, JavaScript, Firebase, Firestore, Redux Toolkit, Jest, Ant Design',
    gitHubLink: 'https://github.com/KamajorQA/Fire-Blog',
    deployLink: 'https://fireblog-project.netlify.app/',
    slug: 'FireBlog',
  },
  {
    title: 'Exquisite Gallery',
    previewImg: exquisiteGallery,
    bigImg: exquisiteGalleryBig,
    description: 'Gallery card list on React/TypeScript & Tailwind',
    details: `Минималистичная галерея карточек товаров в виде SPA 
    на React и TypeScript со стилизацией на Tailwind. 
    Данные для проекта получаются из открытого API Fakestoreapi.com. 
    Работа с данными на удаленном сервере (получение и добавление новой сущности) 
    реализовано через нативный Fetch API. 
    POST-запрос на добавление товара обрабатывается сервером с возвратом объекта добавляемого товара,
    который сохраняется только в стейте списка продуктов.
    В реальности моковая БД не изменяется, соответственно при повторном 
    запросе списка товаров от сервера ранее добавленные продукты не отобразятся, 
    что является нормальным поведением. 
    В логике приложения выделены транспортный и логический слои. 
    Транспортный слой вынесен в утилиту api.ts.
    В нем реализуются только сами запросы к серверу. 
    Работа с логикой вынесена в кастомные хуки.
    Там же происходит обработка ответов сервера и отлов возможных ошибок.
    Состояние и функции открытия/закрытия модального окна вынесены в контекст`,
    stack: 'React, TypeScript, Tailwind, React Context, REST API',
    gitHubLink: 'https://github.com/KamajorQA/React_Typescript_Gallery',
    deployLink: 'https://exquisite-gallery.netlify.app/',
    slug: 'ExquisiteGallery',
  },
  {
    title: 'FlappyBirds Game',
    previewImg: flappyBirds,
    bigImg: flappyBirdsBig,
    description: 'Simple interactive in-browser game',
    details: `Простой аналог браузерной игры Flappy Birds.
    Управление с клавиатуры.
    Сохранение текущего и наилучшего результата в localStorage.
    Написана на Canvas с использованием библиотеки для рисования P5`,
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
    Взаимодействие с сервером через Fetch API`,
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
    Реализовано изменение некоторых элементов через JS, а также анимация заднего фона на Canvas`,
    stack: 'JavaScript, HTML5, CSS3, Canvas',
    gitHubLink: 'https://github.com/KamajorQA/Project-1',
    deployLink: 'https://kamajorqa.github.io/Project-1/',
    slug: 'GreenCorp',
  },
];

export default projectsList;
