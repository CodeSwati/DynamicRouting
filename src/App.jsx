import { useEffect, useState } from 'react'
import { Routes, Route ,useParams, NavLink} from 'react-router-dom'

import './App.css'

function App() {

 
 
  const Home = () =>{

    const [posts, setPosts]  = useState([]);

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(response => setPosts(response));
    },[]);

    return(
    <>
      <div className='post_container'>
        {
          posts&& posts.map((post)=>(
            <NavLink to={`/post/${post.id}`}
               style={{display: "block"}}
               className="post-titles"
            >
              {post.title}
            </NavLink>)
          )
        }
      </div>
    </>
    )
  }

  const About = () =>{
    return(
    <div>
      <h1>About page</h1>
    </div>
    )
  }
  
  const Profile = () =>{
    return(
    <div>
      <h1>About page</h1>
    </div>
    )
  }
  
  const Setting = () =>{
    return(
    <div>
      <h1>About page</h1>
    </div>
    )
  }

  const SayUser = () =>{
    const params = useParams();
    console.log('Params', params);
    return(
    <div>
      <h1>Your name is {params.userName}</h1>
    </div>
    )
  }
  

  const PostPage = ()=>{
    const params = useParams();
    const [data, setData] =useState(null);
    console.log('Params', params);

    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      .then(response => response.json())
      .then(response => setData(response));
    },[]);

    console.log("data", data);

    if (data === null) return <p>Loading....</p>


    return(
      <div>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
      </div>
    )
  }

  return (
   <div>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/post/:postId' element={<PostPage/>}/>
        <Route path='/user/:userName' element={<SayUser/>}/>

        <Route path='account' >
            <Route path='profile' element={<Profile/>}/> 
           <Route path='setting' element={<Setting/>}/>
        </Route>

      </Routes>
   </div>
  )
}

export default App
