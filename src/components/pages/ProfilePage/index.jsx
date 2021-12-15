import './styles.css';
import {useHistory} from 'react-router-dom';
import { getAuth, onAuthStateChanged} from 'firebase/auth';
import {useEffect} from 'react';

export const ProfilePage = () => {

const history = useHistory();

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

        return (
            <div className="profilePage">

            </div>
        )

}