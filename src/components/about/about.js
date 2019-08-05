import React from 'react';
import PropTypes from 'prop-types';

const AboutPage = (props) => {

  return <React.Fragment>
    <h1>About</h1>
    <h2>What is PSOUPOCODE?</h2>
    <p>While mentoring people in JavaScript I realized a lot of coding tutorials could be better. They assume prior knowledge, gloss over important concepts while focusing on rarely used ones (I have used a switch statement maybe once in the last year) and while they give a good foundation for working with coding they have some holes. PSOUPOCODE is my attempt to write tutorials that make sense and teach concepts in an order that makes sense.</p>
    <h2>What will you write tutorials for?</h2>
    <p>My main focus for tutorials is JavaScript but I plan to write tutorials for many things including HTML, CSS, React, mathematics, game programming and also deep dives into specific tools and concepts. Essentially if I have learnt or I am currently learning it I want to write tutorials about it.</p>
    <h2>Mathematics and Game Programming?</h2>
    <p>Many people have a fear of mathematics and I hope to break some concepts down and make it less scary. Game design is simply something I'm interested and would love to explore. Both these subjects have links to coding and the knowledge in one will hopefully help learning in the other.</p>
    <h2>What are your tutorial guidelines?</h2>
    <p>I have set in place some rules for myself for when I'm writing my tutorials. These are 1. Don't assume prior knowledge. 2. When at all possible do not require the user to obtain external tools or packages. 3. Use simple, friendly language to make the tutorials as accessable as possible. 4. Listen to feedback and criticism from readers and improve the tutorials where possible.</p>
    <h2>Who are you?</h2>
    <p>I'm Daniel, but most people know me via my handle "Dan Soup". I did a coding bootcamp in 2018 at the age of 27 and started a brand new career as a developer. This changed my life and I want to give others the opportunity to change theirs.</p>
  </React.Fragment>

}

AboutPage.propTypes = {

};

export default AboutPage;