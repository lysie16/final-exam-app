import './styles.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import TelegramIcon from '@material-ui/icons/Telegram';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import {useHistory} from 'react-router-dom';

 



export const Navbar = () => {

    const history=useHistory('');

    const logout = (event) => {
        event.preventDefault();
        //auth.signOut();
        //history.push("/login")'
    }   
    
    return (
        <div className="navbar">
            <div className="header-left">
                <Link to="/">
                    <img src="https://assets.nfhslearn.com/uploads/course/icon_image/61063/Social_Media_2x.png"
                    alt="social-logo" className="homeHeader-logo" />
                </Link>
            </div>
            <div className="homeHeader-inputSearch">
                <input type="text" placeholder="Search"/>
                <SearchIcon className="homeHeader-inputButton" />
            </div>
            <div className="homeHeader-icons">
                <section>
                    <Avatar className="homeHeader-avatar" alt=""  src=""/>
                    <h3 className="homeHeader-name">Elysse</h3>
                </section>
                <h3 className="homeHeader-dash"> | </h3>
               <section>
                   <h3 className="homeHeader-name">Home</h3>
               </section>

               <h3 className="homeHeader-dash"> | </h3>

               <section>
                   <h3 className="homeHeader-name">Find Friends</h3>
               </section>

               <h3 className="homeHeader-dash"> | </h3>

               <section>
                   <h3 className="homeHeader-name">Create Post</h3>
               </section>

               <h3 className="homeHeader-dash"> | </h3>

               <section>
                   <GroupAddIcon />
               </section>

               <h3 className="homeHeader-dash"> | </h3>

               <section>
                   <TelegramIcon />
               </section>

               <h3 className="homeHeader-dash"> | </h3>

               <section>
                   <NotificationsIcon />
               </section>

               <h3 className="homeHeader-dash"> | </h3>

               <section>
                   <AssignmentIndIcon />
               </section>

               <h3 className="homeHeader-dash"> | </h3>

               <section>
                   <div className="dropdown">
                        {/* <ArrowDropDownIcon className="dropdown"></ArrowDropDownIcon> */}
                        <div className="dropdown-content">
                            <a onClick={logout}><p>Logout</p></a>
                        </div>
                   </div>
               </section>

               <h3 className="homeHeader-dash"> | </h3>
            </div>
        </div>
    )
}