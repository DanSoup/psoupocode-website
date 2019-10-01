import React, {useState, useEffect, useRef} from 'react';
import logo from './logo.svg';
import './normalize.css';
import './App.css';
import PageHeader from './components/pageHeader/pageHeader.js';
import Categories from './components/categories/categories.js';
import Home from './components/home/home.js';
import AboutPage from './components/about/about.js';
import EgPage from './components/eg/eg.js';
import Article from './components/article/article.js';
import ArticleList from './components/articleList/articleList.js';
import articles from './components/raw/articles.js';

function App() {

  const [sCurrentPath, uCurrentPath] = useState(window.location.pathname);
  const [sLastPath, uLastPath] = useState(window.location.pathname);

  const navigate = path => {
    window.history.pushState({}, '', path);
    uCurrentPath(path);
  }

  const Error404 = () => {
    return <h1>404 Page Not Found</h1>
  }

  const RouteContainer = (props) => {

    const allChildren = props.children.reduce((acc, child) => {
      if (Array.isArray(child)) acc.push(...child)
      else acc.push(child)
      return acc;
    }, []);

    const visibleChildren = allChildren.filter(child => {
      return child.props.path === sCurrentPath;
    });

    if (visibleChildren.length < 1) return <Error404/>;
    else return visibleChildren;

  }

  const RoutePage = ({children, path}) => {

    return children;

  }

  return (
    <div onScroll={e => {
      const nav = document.getElementsByTagName('nav')[0];
      const navTitle = document.getElementById('navbar-title');
      if (nav.offsetTop === e.target.scrollTop) {
        navTitle.className = 'on-screen';
      } else if (nav.offsetTop !== e.target.scrollTop) {
        navTitle.className = '';
      }
    }} className="app">
      <PageHeader/>
      <nav>
        <div id="navbar-title">
          <h1>PSOUPOCODE</h1>
        </div>
        <div id="navbar-buttons">
          <button onClick={() => navigate('/')}><span>Home</span></button>
          <button onClick={() => navigate('/categories')}>Categories</button>
          <button onClick={() => navigate('/about')}>About</button>
        </div>
      </nav>
      <RouteContainer>
        <RoutePage path="/"><Home/></RoutePage>
        <RoutePage path="/categories"><Categories/></RoutePage>
        <RoutePage path="/categories/sub"><h1>Sub Categories</h1></RoutePage>
        <RoutePage path="/about"><AboutPage/></RoutePage>
        <RoutePage path="/eg"><EgPage/></RoutePage>
        <RoutePage path="/article"><ArticleList articles={articles}/></RoutePage>

        {articles.map(article => {
          return <RoutePage path={`/article/${article.slug}`}><Article data={article}/></RoutePage>
        })}

        <RoutePage path="/eg2"><Article data={
          {
            title: 'IF STATEMENTS - LESSON 1',
            subTitle: 'JavaScript',
            // slug: () => {
            //   return this.subTitle;
            // },
            sections: [
              {
                title: 'Summary',
                contents: [
                  ['p', "\"If\" statements in JavaScript allow us to control which lines of code execute and which ones don't. This is a form of \"flow control\", controlling the flow of the code. The most basic if statement executes a block of code is certain conditions are met."]
                ]
              },
              {
                title: 'Real World Examples',
                contents: [
                  ['p', "I'm at home enjoying a day off and I ask myself if I am hungry. If I am hungry, I will eat a sandwich. The pseudocode for this might look as follow."],
                  ['c', ["~pIF~ ~cI am hungry~ ~pTHEN~ ~ceat sandwich~"]],
                  ['p', "I only eat the sandwich if I am hungry. I don't even consider eating the sandwich if I'm not hungry."],
                  ['i', {
                    src: "panda.png",
                    alt: "Pikachu pulling a face",
                    caption: "I am, of course, aways hungry."
                  }]
                ]
              },
              {
                title: 'The Structure',
                contents: [
                  ['p', "The basic if statement looks like this:"],
                  ['c', [
                    '~pif~ (~ccondition~) {',
                    '  ~ccode to execute~;',
                    '}'
                  ]],
                  ['p', "The \"condition\" will be evaluated and if, it's evaluated to being truthy, the following code block is executed. As with any code block this could be one or more lines of code. If the condition is evaluated to falsy the code block is not executed."]
                ]
              },
              {
                title: 'Examples',
                contents: []
              }
            ],
            meta: {
              categories: ['JavaScript'],
              subCategories: [],
              version: '1.0.0',
              authors: ['Dan Soup'],
              contributors: [],
              published: '07/08/19',
              notes: ''
            }
          }
        }/></RoutePage>
      </RouteContainer>
    </div>
  );
}

export default App;