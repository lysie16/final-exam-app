import './styles.css';
import {useEffect, useState} from 'react';
import {Post} from "../../Post";


export const HomePage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(
        () => {
            getPosts();
        }, []
    );

    const getPosts = async() => {
        try {
            const response = await fetch('https://firestore.googleapis.com/v1/projects/final-exam-21946/databases/(default)/documents/Posts/');
            const data = await response.json();
            console.log(data);
            const formattedData = data.documents.map( (item) => {
                return item.fields
            });

            console.log(formattedData)
            setPosts(formattedData);

        }catch(err){
            console.log (err)
        }
    }

    return(
        <div className="home-page">
            <h3 className="page-title">Home</h3>
            <div className="post-container">
                {
                    posts.map( (post) => (
                        <Post user={post.user?.stringValue} text={post.text?.stringValue}/>
                    ))
                }
            </div>
        </div>
    );
};