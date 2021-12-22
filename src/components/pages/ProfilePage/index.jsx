import './styles.css';
import {useHistory} from 'react-router-dom';
import { getAuth, onAuthStateChanged} from 'firebase/auth';
import {useEffect,useState, useContext} from 'react';
import {Post} from "../../Post";
import PostsOrderContext from "../../../context/postOrderContext";
 
export const ProfilePage = () => {

const history = useHistory();
const [posts, setPosts] = useState([]);

const globalState = useContext(PostsOrderContext);

//check if a current user is logged into firebase
useEffect(
    () => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if(!user) {
                history.push("/login");
            }
        })
    }, []
);

//Display only current user posts
useEffect (
    () => {
        const auth = getAuth();
        const user = auth.currentUser;
        if(user !==null){
            user.providerData.forEach( (post) => {
                console.log(post.user);
                console.log(post.text);
                console.log(post.name);
                console.log(post.image);
            })
          }
        }, []
     );

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

        const uploadFileWithClick = () => {
            document.getElementsByClassName('inputImage')[0].click();
        }

        return (
            <div className="profilePage">
                <div className="profile-topsection">
                    <div className="profile-coverphoto">
                    <h3 className="profile-title">Welcome!</h3>
                    </div>
                </div>
                <div className="profile-mid">
                </div>
                 <div className="post-container">
                {
                    posts.map( (post) => (
                    (
                        <Post user={post.user?.stringValue} text={post.text?.stringValue} />
                    )))
                }
            </div>
        </div>

        )

}