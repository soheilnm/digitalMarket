import{useEffect,useState} from 'react'
function Products(){
  const [posts, setposts] = useState([])
  useEffect(() => {
    const axios = require('axios').default;
    axios("/v1/")
    .then(response=>setposts(response.data.data.deep_links))
    
  }, [])
  
    return(
        <div className="parent">
        <div className="products child">
          
          {posts.map(post=>(
            <div className='productsContainer' key={post.id}>
              <img src={post.icon.url} alt="images not loading"></img>
              <h5>{post.title}</h5>

            </div>
          ))}
            
          
        </div>
        </div>
    );
};
export default Products