import React from 'react';
import ReactTimeAgo from 'react-time-ago';
import { Link } from "react-router-dom";


export default function Post({_id, title, summary, cover, content, createdAt, author}){
    return(
        <div className='post'>

        <div className='image'>

        <Link to={`/post/${_id}`}>
            <img src={'http://localhost:4000/'+cover}/>
        </Link>

        </div>
        
        <div className='texts'>

        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>

        <p className='info'>
          <a className='author'>{author.username}</a>
          <time><ReactTimeAgo date={createdAt} locale="en-US"/></time>
        </p>
          <p className='summary'>{summary}</p>
        </div> 

      </div>
    )
}