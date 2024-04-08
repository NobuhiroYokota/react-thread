import { useEffect, useState } from "react"

export const GetPosts = (postId) =>{
  // console.log(postId.postId)

  const[message, setMessage] = useState([])

  useEffect(()=>{

    fetch(`https://railway.bulletinboard.techtrain.dev/threads/${postId.postId}/posts?offset=0`)
    .then(res=>{
      console.log(res)
      return res.json();
    }).then(data=>{
    console.log(data.posts);
      setMessage(data.posts)
    })
  },[])




  return (
    <div className="center">
      {
        message.map((obj,i)=>{
          return (
            <div className="thread-title" value={obj.post} key={i}>{obj.post}</div>
          )
        })
      }
    </div>
  )
}

export default GetPosts