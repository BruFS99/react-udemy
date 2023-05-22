import P from 'prop-types';
import React  from 'react';
import '../PostCard/styles.css';

export const PostCard = ({id, cover, title, body}) => {

    return (
        <div className='post' key={id}>
            <img src={cover} alt={title} />
            <div className="post-content">
                <h1>{title} {id}</h1>
                <p>{body}</p>
            </div>
        </div>
    )

};

PostCard.propTypes = {
  id: P.number.isRequired,
  cover: P.string.isRequired,
  title: P.string.isRequired,
  body: P.string.isRequired,
};
