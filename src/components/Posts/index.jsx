import P from 'prop-types'
import React  from 'react';
import { PostCard } from "../PostCard"
import '../Posts/styles.css';

export const Posts = ({posts}) => {
    return (
        <div className="posts">
            {posts.map(post => (
                <PostCard key={post.id} id={post.id} title={post.title} cover={post.cover} body={post.description} />
            ))}
        </div>
    )

};

Posts.defaultProps = {
  posts: [],
}

Posts.propTypes = {
  posts: P.arrayOf(P.shape({
    id: P.number.isRequired,
    cover: P.string.isRequired,
    title: P.string.isRequired,
    description: P.string.isRequired,
  })),
}
