import React from 'react'

export default function Comment(props) {
    return (
        <>
            <div className="comment">
                <h5>{props.comment.name}</h5> <p>{props.comment.body}</p>
            </div>
        </>
    )
}