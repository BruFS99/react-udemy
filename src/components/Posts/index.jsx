import { PostCard } from "../PostCard"
import '../Posts/styles.css'; 

export const Posts = ({posts}) => {
    return (
        <div className="posts">
            {posts.map(post => (
                <PostCard id={post.id} title={post.title} cover={post.cover} body={post.body} />
            ))}
        </div>
    )

}