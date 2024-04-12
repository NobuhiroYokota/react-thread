import { useState } from "react"
import { BrowserRouter, Link, Route,Routes } from "react-router-dom";

import { Header } from "./Header";

export const PostThread = () =>{

  const url="https://railway.bulletinboard.techtrain.dev/threads"

  const[ThreadName, setThreadName] = useState("");

  const handleSubmit = () => {
    fetch(url,{
      method: 'POST',
      headers: {
        'Content-type':'application/json'
      },
      body:JSON.stringify({title: ThreadName})
    }
      ).then((response)=>{
        return response.json();
      }).then((responseJson)=>{
        console.log(responseJson)
      })

  }

  return (

    <div>
      <Header />

      <div className="center">
        <div className="Thread-description">スレッドを投稿しよう！</div>

        <form>
          <label>スレッド名</label>
          <input className="input-form" type="text" value={ThreadName} onChange={(e)=> setThreadName(e.target.value)}/>
          <button onClick={handleSubmit}>投稿</button>
        </form>
        <div>
          <Link to={'/'}>topへ戻る</Link>
        </div>
      </div>

    </div>

  )
}