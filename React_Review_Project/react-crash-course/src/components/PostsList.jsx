import Post from "./Post"
import classes from './PostsList.module.css' 
import { useLoaderData } from "react-router-dom";

function PostsList() {
    // fetch('http://localhost:8080/posts').then(response => response.json()).then(data=> {
    //     setPosts(data.posts);
    // });
    const posts = useLoaderData();

    return (
        <>
            {posts.length >0 && (
            <ul className={classes.posts}>
                {posts.map((post)=> (
                <Post key={post.id} id={post.id} author={post.author} body={post.body }/> 
                ))}
            </ul>
            )}
            {posts.length === 0 && (
                <div style={{ textAlign: 'center', color: 'white'}}>
                    <h1>There are no posts yer.</h1>
                    <p>Start adding some!</p>
                </div>
            )}
        </>
    );
}

export default PostsList