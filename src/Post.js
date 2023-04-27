import React, { useState } from 'react';
import Comment from './Comment';
import './Post.css'

export default function Post(props) {
    const [show, setShow] = useState();
    const [data, setData] = useState();

    return (
        <>
            <div className='post'>
                <h3 >{props.post.title}</h3>
                <p>{props.post.body}</p>
                <div>
                    <button onClick={() => { !show && loadComments(); setShow(!show) }}>{show ? 'hide comments' : 'show comments'}</button>
                    {show && data?.map(comment =>
                        <Comment key={comment.id} comment={comment} />
                    )}
                </div>
            </div>
        </>
    )

    async function loadComments() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${props.post.id}`);
        const d = await response.json();
        setData(d)
    }
}