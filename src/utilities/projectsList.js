import reactNews from '../assets/img/projects/01.jpg';
import reactNewsBig from '../assets/img/projects/01-big.jpg';
import greedyDragons from '../assets/img/projects/02.jpg';
import greedyDragonsBig from '../assets/img/projects/02-big.jpg';
import greenCorp from '../assets/img/projects/03.jpg';
import greenCorpBig from '../assets/img/projects/03-big.jpg';

const projectsList = [
  {
    title: 'React News',
    previewImg: reactNews,
    bigImg: reactNewsBig,
    description: 'Fully functional News Portal as SPA on React',
    details: '',
    stack: 'React, React Router, React Context, module CSS, REST API',
    gitHubLink: 'https://github.com/KamajorQA/React_News',
    deployLink: '',
    slug: 'ReactNews',
    presentation:
      'https://docs.google.com/presentation/d/15Z-6ADyctL8nLoC136GpS1Fnz8bW2iX_I10Rke_vjOs/edit#slide=id.p3',
  },
  {
    title: 'Greedy Dragons',
    previewImg: greedyDragons,
    bigImg: greedyDragonsBig,
    description:
      'Dragonomicon project with CRUD-operations on vanilla JavaScript',
    details: '',
    stack: 'JavaScript, HTML5, CSS3, Fetch API',
    gitHubLink: 'https://github.com/KamajorQA/Greedy_Dragons',
    deployLink: '',
    slug: 'GreedyDragons',
  },
  {
    title: 'FlappyBirds Game',
    previewImg: greenCorp,
    bigImg: greenCorpBig,
    description: 'Simple interactive in-browser game',
    details:
      'Простой аналог браузерной игры Flappy Birds. Управление с клавиатуры. Сохранение текущего и наилучшего результата в localStorage. Написана на Canvas с использованием библиотеки для рисования P5.',
    stack: 'JavaScript, HTML5, CSS3, Canvas, P5 library',
    gitHubLink:
      'https://github.com/KamajorQA/Pet_JS_samples/tree/main/Zest_Canvas_Flappy_minigame',
    deployLink: '',
    slug: 'FlappyBirds',
  },
  {
    title: 'GreenCorp Landing',
    previewImg: greenCorp,
    bigImg: greenCorpBig,
    description: 'Static Landing page with JS animations',
    details: '',
    stack: 'JavaScript, HTML5, CSS3, Canvas',
    gitHubLink: 'https://github.com/KamajorQA/Project-1',
    deployLink: '',
    slug: 'GreenCorp',
  },
];

export default projectsList;
