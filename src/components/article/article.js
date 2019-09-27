import React from 'react';
import PropTypes from 'prop-types';
import image from '../../images/panda.png';
import './article.css';

const Article = ({data}) => {

  const Title = () => {
    return <>
      <h1>{data.title}</h1>
      <h2>{data.subTitle}</h2>
    </>
  };

  const Navigation = () => {
    return <nav>
      <ul className="contents">
        {data.sections.map((section => {
          return <li><a href={`#${section.title.toLowerCase().replace(' ', '-')}`}>{section.title}</a></li>
        }))}
      <li><a href="#about-this-article">About This Article</a></li>
      </ul>
    </nav>
  };

  const MainContent = () => {

    const handleP = content => {
      if (typeof content === 'string') {
        let newContent = content.replace(/~i(.+?)~/g, '<em>$1</em>');
        newContent = newContent.replace(/~b(.+?)~/g, '<strong>$1</strong>');
        return <p dangerouslySetInnerHTML={{__html: newContent}}></p>
      } else return <>
        {content.map((line, i) => {
          if (i === 0) return <p className="top">{line}</p>
          else if (i === content.length - 1) return <p className="bot">{line}</p>
          else return <p className="mid">{line}</p>
        })}
      </>
    }

    return data.sections.map(section => {
      return <section>
        <a name={section.title.toLowerCase().replace(' ', '-')}/><h3>{section.title}</h3>
        {section.contents.map(contentPiece => {
          if (contentPiece[0] === 'p') return handleP(contentPiece[1])
          else if (contentPiece[0] === 'c') return <ColoredCode code={contentPiece[1]}/>
          else if (contentPiece[0] === 'i') return <figure>
            <img src={require(`../../images/${contentPiece[1].src}`)} alt={contentPiece[1].alt}/>
            <figcaption>{contentPiece[1].caption}</figcaption>
          </figure>
        })}
      </section>
    });
  };

  const About = () => {
    return <section>
      <a name="about-this-article"/><h3>About This Article</h3>
      <p className="top">Authors: {data.meta.authors.join(', ')}</p>
      <p className="mid">Contributors: {data.meta.contributors.join(', ')}</p>
      <p className="mid">Version: {data.meta.version}</p>
      <p className="bot">Categories: {data.meta.categories.sort().join(', ')}</p>
    </section>
  }

  const ColoredCode = ({code}) => {

    return <code>
      {code.map(line => {

        const newLine = line.replace(/~([a-z])(.+?)~/g, '<span class="code-$1">$2</span>')

        return <p dangerouslySetInnerHTML={{__html: newLine}}></p>;

      })}
    </code> 
  }

  return <div className="article-container">
    <article>
      <Title/>
      <Navigation/>
      <MainContent/>
      <About/>
    </article>
  </div>

}

Article.propTypes = {

};

export default Article;