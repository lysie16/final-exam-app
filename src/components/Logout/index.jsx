import { getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

export const Logout = () => {

    const [user, setUser] = useState(null);
    const history = useHistory();

    useEffect(
        () => {
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user);
                }else {
                    setUser(null);
                }
            })
        }, []
    )

    const logoutUser = async() => {
        const auth = getAuth();
        try {
            await signOut(auth);
            history.push("/login");
        }catch(error) {
            console.log(error)
        }
    }

    return (
        user && <button className="logout-btn" onClick={logoutUser}>
            Logout
        </button>
    )
}