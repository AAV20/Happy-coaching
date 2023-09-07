import React, { useState,useEffect } from 'react'
import style from './home.module.css'


export default function Cliets() {
  const [message, setMessage] = useState('')
  const [index, setIndex]= useState(2)
  const [comment, setComment]= useState([])
  

  const fetchData = ()=>{
      return fetch('https://retoolapi.dev/7YQFbR/data')
             .then((response) => response.json())
             .then((datarespons)=> setComment(datarespons))
    }
  
    useEffect(()=>{
      fetchData()
    },[])
   


    const send = {
        "img": "https://i.postimg.cc/hGJWffWF/images.png",
        "message": `${message}`,  
    }

    const sendMessage = (e)=>{
      e.preventDefault()
      fetch('https://retoolapi.dev/7YQFbR/data',{
          method:'POST',
          body:JSON.stringify(send),
          headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))

  }

  const id = 2

  function deleteUser(id){
    fetch(`https://retoolapi.dev/7YQFbR/data${id}`,{
      method:'delete'
    })
  }

  return (
    <div className={style.Clients_container}>
        <div className={style.Clients_content}>
            <div className={style.Clients_title}>
                <h2>Hear out what my<br></br>clients say about me.</h2>
            </div>
            <form onSubmit={sendMessage}>
              <div className={style.Clients_comments_block}>
                  <textarea onBlur={(e)=>setMessage(e.target.value)} placeholder='comments...'></textarea>
                  <button type='submit' className={style.Comments_btn}>Add comment</button>
              </div>
            </form>
            <div className={style.Clients_blocks_parent}>
                {
                comment.slice(0,index).map((itam)=>(
                <div className={style.Clients_blocks} key={itam.id}>
                    <img src={itam.img} alt='admin'/>
                    <p>{itam.message}</p>
                    <button onClick={()=> deleteUser(id)}>delete comment</button>
                </div>
                
                ))
                }
            {index <= 2 ? <button className={style.more} onClick={()=>setIndex(comment.length)}>see more</button>:<button className={style.less} onClick={()=>setIndex(2)}>show less</button>} 
          </div>
        </div>
    </div>
  )
}
