import React from 'react';
import PropTypes from 'prop-types';
import image from '../../images/panda.png';
import './article.css';

const Article = ({data}) => {

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
      <h1>IF STATEMENTS - LESSON 1</h1>
      <h2>JavaScript</h2>
      <nav>
        <ul className="contents">
          <li><a href="#Summary">Summary</a></li>
          <li><a href="#Real World Example">Real World Example</a></li>
          <li><a href="#The Structure">The Structure</a></li>
          <li><a href="#Examples">Examples</a></li>
          <li><a href="#About This Article">About This Article</a></li>
        </ul>
      </nav>

      <section className="Summary">
        <a name="Summary"/><h3>Summary</h3>
        <p>"If" statements in JavaScript allow us to control which lines of code execute and which ones don't. This is a form of "flow control", controlling the flow of the code. The most basic if statement executes a block of code is certain conditions are met.</p>
        </section>

        {/* Real World Examples */}
        <section className="Real World Example">
        <a name="Real World Example"/><h3>Real World Example</h3>
        <p>I'm at home enjoying a day off and I ask myself if I am hungry. If I am hungry, I will eat a sandwich. The pseudocode for this might look as follow.</p>
        <code>IF I am hungry THEN eat sandwich.</code>
        <p>I only eat the sandwich if I am hungry. I don't even consider eating the sandwich if I'm not hungry.</p>
        <figure>
          <img src={image} alt="Me eating a sandwich"/>
          <figcaption>I am, of course, always hungry.</figcaption>
        </figure>
      </section>
      
      {/* The Structure */}
      <section className="The Structure">
        <a name="The Structure"/><h3>The Structure</h3>
        <p>The basic if statement looks like this:</p>
        <ColoredCode code={[
        '~pif~ (~cme~ === ~l45~) {',
        '  ~bnew~ ~tClass~',
        '  ~o\'grg\'~',
        '  ~r/gregr/~',
        '  ~g// fegrgtd~',
        '  ~blet~ ~yaFunc~ = () ~b=>~ {};',
        '}'
      ]}/>
        <code>{[
          'if (condition) {',
          '  code to execute',
          '}'
        ].join('\n')}
        </code>
        <p>The "condition" will be evaluated and if, it's evaluated to being truthy, the following code block is executed. As with any code block this could be one or more lines of code. If the condition is evaluated to falsy the code block is not executed.</p>
      </section>

      {/* Examples */}
      <section className="Examples">
        <a name="Examples"/><h3>Examples</h3>
        <code>{[
          'const hungry = true;',
          'if (hungry) {',
          '  console.log(\'I will eat a sandwich\')',
          '}',
          'console.log(\'I will carry on with my day\')'
        ].join('\n')}</code>
        <p>This is the code for our sandwich example above. The variable "hungry" is initiated with the boolean value "true". The condition evaluates as truthy because "hungry" is true and the log will output "I will eat a sandwich" followed by "I will carry on with my day".</p>
      </section>

      {/* Metadata */}
      <section className="about-this-article">
        <a name="About This Article"/><h3>About This Article</h3>

        <p>Published: 10/09/2019</p>
        <p>First Published: 09/09/2019</p>
        <p>Author: Dan Soup</p>
        <p>Contributors: Romy</p>
      </section>
    </article>
  </div>

}

Article.propTypes = {

};

export default Article;