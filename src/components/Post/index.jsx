import './styles.css';
import {useContext} from 'react';
import PostsOrderContext from "../../context/postOrderContext";

export const Post = (props) => {
    const {user, text, image, name} = props;

    const globalState = useContext(PostsOrderContext);

    return (
        <div className="post">
            <h1 className="user-name">{user}</h1>
            <p className="post-text"> {text}</p>
            <p className="likes">♡</p>
            
        </div>
    )
}
