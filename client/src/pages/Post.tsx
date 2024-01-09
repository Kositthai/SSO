import {useLocation} from 'react-router-dom'
import {posts} from '../data'

const Post = () => {
  const localtion = useLocation()
  const path = localtion.pathname.split('/')[2]

  const post = posts.find((post) => String(post.id) === path)

  return post ? (
    <div className="post">
      <img src={post.img} alt="" className="postImg" />
      <h1 className="postTitle">{post.title}</h1>
      <p className="postDesc">{post.desc}</p>
      <p className="postLongDesc">{post.longDesc}</p>
    </div>
  ) : (
    <h1>No data</h1>
  )
}

export default Post
