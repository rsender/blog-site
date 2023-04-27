import React from 'react'
import './User.css'

export default function User(props) {
    return (
        <>
            <div className="user" onClick={() => { props.setBlogShowing(true); props.setCurrent(props.user.id); }}>
                <h1>{props.user.name}</h1>
                <a href={props.user.website}>{props.user.website}</a>
                <h4>{props.user.company.name}</h4>
                <p>{props.user.company.catchPhrase}</p>
                <p>{props.user.company.bs}</p>
            </div>
        </>
    )
}
