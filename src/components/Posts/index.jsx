import './styles.css';
import { db } from 'firebase/app';
import { useHistory } from 'react-router-dom';

export const Posts = ({user}) => {

    const history = useHistory("");
    const[posts, setPosts] = useState("");


    return (
        <div className="posts">

        </div>
    )
}