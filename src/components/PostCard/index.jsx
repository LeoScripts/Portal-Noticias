
import './index.scss'

export const PostCard = ({ posts }) => {
  const img = 'https://th.bing.com/th/id/OIP._QkhKTHmZUnTjzoG2-lNxAHaEK?pid=ImgDet&rs=1'
  
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a href={posts.url} target="_blank" className='card-full'>
      <div className='card'>
        <img 
          src= {
            posts.urlToImage === null ? 
            img : posts.urlToImage
          } 
          alt={posts.title} 
        />
        <div className="post-content">
          <h2 >{posts.title}</h2>
          <p>{posts.body}</p>
          
        </div>
        
      </div>
    </a>
  )
}