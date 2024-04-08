import { useEffect, useState } from "react"
import { Header } from "./Header"
import { Postposts } from "./Postposts"
import { BrowserRouter, Link, Route,Routes } from "react-router-dom";

export const GetThread = () => {

  const [title, setTitle] = useState([])

  useEffect(() =>{
    fetch('https://railway.bulletinboard.techtrain.dev/threads?offset=0')
    .then(response => {
      return response.json();
    }).then((data)=>{
      return setTitle(data);
    })
  },[]);


    return (

      <div>
        <Header />
        <div className='center'>
          <div className='Thread-description'>新着スレッド</div>
            {
              title.map((obj,i)=>{
              return (
                <Link to={obj.id} className="title-decoration">
                  <div className="thread-title" value={obj.title} key={i}>{obj.title}</div>
                </Link>
                )
              })
            }
        </div>
        {/* <Postposts posts={title}/> */}
    </div>
    )
}