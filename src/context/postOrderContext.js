import React, {useState} from 'react';

const PostOrderContext = React.createContext( {
    posts: [],
});

export const PostOrderContextProvider = (props) => {
    const [posts, setPosts] = useState([]);

    const initializePosts = (postsFromApi) => {
        setPosts(postsFromApi);
    }

return(<PostOrderContext.Provider
    value={{posts:posts, initializePosts: initializePosts}} >
        {props.children}
    </PostOrderContext.Provider>)

}

export default  PostOrderContext;