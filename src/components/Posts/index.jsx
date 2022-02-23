import './style.scss'
import { PostCard } from "../PostCard"


export const Posts = ({posts}) => (

  <div  className="posts">

    {posts.map(post =>
      (
        <PostCard
        key={post.title}
        posts = {post}
        />
      )
    )}
  </div>
)
