import { useState } from "react"
import { useParams } from "react-router-dom"
import { BrowserRouter, Link, Route,Routes } from "react-router-dom";

import {GetPosts} from "./GetPosts"
import { Header } from "./Header";

export const Postposts = () => {
  const [postName,setPostName] = useState("")
  const {postId} = useParams()

  const url=`https://railway.bulletinboard.techtrain.dev/threads/${postId}/posts`

  const handlePost = () =>{
    fetch(url,{
      method: 'POST',
      headers: {
        'Content-type':'application/json'
      },
      body:JSON.stringify({post: postName})
    }
      ).then((response)=>{
        return response.json();
      }).then((responseJson)=>{
        console.log(responseJson)
      })

  }

  return(
    <div>
      <Header />

      <div className="center">
        <div className="Thread-description">内容を投稿しよう！</div>

        <form>
          <label>スレッド名</label>
          <input className="input-form" type="text" value={postName} onChange={(e)=> setPostName(e.target.value)}/>
          <button onClick={handlePost}>投稿</button>
        </form>
        <div>
          <Link to={'/'}>topへ戻る</Link>
        </div>
      </div>
      <GetPosts postId={postId}/>
    </div>
  )
}

export default Postposts