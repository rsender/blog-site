import { useState, useEffect } from "react";
import React from 'react'
import Post from "./Post";
import './Blog.css'

export default function Blog(props) {
    const [posts, setPosts] = useState();
    useEffect(() => {
        (async function loadPosts() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${props.id}`);
            const data = await response.json();
            console.log(data)
            setPosts(data);
        })();
    }, [props.id]);

    return (
        <>
            {posts?.map(post => <Post key={post.id} post={post}></Post>)}
        </>
    )
}