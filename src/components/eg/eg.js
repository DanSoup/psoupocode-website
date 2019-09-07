import React from 'react';
import PropTypes from 'prop-types';
import image from '../../images/panda.png';
import './article.css';

const Eg = (props) => {

  return <div className="article">
    <h1>IF STATEMENTS - BASIC</h1>
    <h2>JavaScript</h2>
    <ul className="contents">
      <li><a href="#the-structure">The Structure</a></li>
      <li><a href="#real-world-example">Real World Example</a></li>
      <li><a href="#examples">Examples</a></li>
    </ul>
    <p>"If" statements in JavaScript allow us to control which lines of code execute and which ones don't. This is a form of "flow control", controlling the flow of the code. The most basic if statement executes a block of code is certain conditions are met.</p>
    <a name="real-world-example"/><h3>Real World Example</h3>
    <p>I'm at home enjoying a day off. And I ask myself if I am hungry. If I am hungry, I will eat a sandwich. The pseudocode for this might look as follow.</p>
    <code>IF I am hungry THEN eat sandwich.</code>
    <p>I only eat the sandwich if I am hungry. I don't even consider eating the sandwich if I'm not hungry.</p>
    <figure>
      <img src={image} alt="Trulli"/>
      <figcaption>I am, of course, always hungry.</figcaption>
    </figure> 
    <a name="the-structure"/><h3>The Structure</h3>
    <p>The basic if statement looks like this:</p>
    <code>{[
      'if (condition) {',
      '  code to execute',
      '}'
    ].join('\n')}
    </code>
    <p>The "condition" will be evaluated and if, it's evaluated to being truthy, the following code block is executed. As with any code block this could be one or more lines of code. If the condition is evaluated to falsy the code block is not executed.</p>
    <a name="examples"/><h3>Examples</h3>
    <code>{[
      'const hungry = true;',
      'if (hungry) {',
      '  console.log(\'I will eat a sandwich\')',
      '}',
      'console.log(\'I will carry on with my day\')'
    ].join('\n')}</code>
    <p>This is the code for our sandwich example above. The variable "hungry" is initiated with the boolean value "true". The condition evaluates as truthy because "hungry" is true and the log will output "I will eat a sandwich" followed by "I will carry on with my day".</p>
    <p>Published: 10/09/2019</p>
    <p>First Published: 09/09/2019</p>
    <p>Author: Dan Soup</p>
    <p>Contributors: Romy</p>
  </div>

}

Eg.propTypes = {

};

export default Eg;