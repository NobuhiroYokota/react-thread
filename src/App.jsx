import './App.css'
import { Header } from './Header'
import { useState } from 'react';

const App = () => {

  const [title, setTitle] = useState([])

      fetch('https://railway.bulletinboard.techtrain.dev/threads?offset=0')
      .then(response => {
        return response.json();
      }).then((data)=>{
        console.log(data)
        return setTitle(data);
      })



  return (
    <>
    <div>
      <Header />
      <div className='center'>
      <div className='Thread-description'>新着スレッド</div>
      {
        title.map((obj)=>{
          return (
            <div className="thread-title" key={obj.title}>{obj.title}</div>
            )
          })
        }
      </div>
    </div>
    </>
  )
}

export default App
