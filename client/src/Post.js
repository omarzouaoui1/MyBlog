import React from 'react';
import ReactTimeAgo from 'react-time-ago';

export default function Post({title, summary, cover, content, createdAt, author}){
    return(
        <div className='post'>

        <div className='image'>
        <img src={'http://localhost:4000/'+cover}></img>
        </div>
        
        <div className='texts'>
        <h2>{title}</h2>
        <p className='info'>
          <a className='author'>{author.username}</a>
          <time><ReactTimeAgo date={createdAt} locale="en-US"/></time>
        </p>
        <p className='summary'>{summary}</p>
        </div> 

      </div>
    )
}