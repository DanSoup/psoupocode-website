import React from 'react';
import PropTypes from 'prop-types';

const Categories = (props) => {

  return <div>
    <h1>Categories</h1>
    <p>Select a category from the list below.</p>
    <div>
      <div>
        <h1>JavaScript</h1>
      </div>
      <div>
        <h1>HTML</h1>
      </div>
      <div>
        <h1>CSS</h1>
      </div>
    </div>
  </div>

}

Categories.propTypes = {

};

export default Categories;