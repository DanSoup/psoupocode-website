import React from 'react';
import PropTypes from 'prop-types';

const ArticleList = ({articles}) => {

  return <React.Fragment>
    <h1>Full List of Articles</h1>
    <ul>
      {articles.map(article => {
        return <li><p><a href={`article/${article.slug}`}>{article.title}</a></p></li>
      })}
    </ul>
  </React.Fragment>

}

ArticleList.propTypes = {

};

export default ArticleList;