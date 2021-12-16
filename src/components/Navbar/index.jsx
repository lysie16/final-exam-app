import './styles.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import TelegramIcon from '@material-ui/icons/Telegram';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import {useHistory} from 'react-router-dom';
import {Logout} from "../Logout";



export const Navbar = ({user}) => {
    
    return (
        <div className="navbar">
            <div className="header-left">
                <Link to="/">
                    <img src="https://assets.nfhslearn.com/uploads/course/icon_image/61063/Social_Media_2x.png"
                    alt="social-logo" className="homeHeader-logo" />
                </Link>
            </div>
            {/* <div className="homeHeader-inputSearch">
                <input type="text" placeholder="Search"/>
                <SearchIcon className="homeHeader-inputButton" />
            </div> */}
            <div className="homeHeader-icons">
                <section>
                    <Avatar className="homeHeader-avatar" alt=""  src=""/>
                    <h3 className="homeHeader-name">{user}</h3>
                </section>
                <h3 className="homeHeader-dash"> | </h3>
               <section>
                   <h3 className="homeHeader-name">Home</h3>
               </section>

               <h3 className="homeHeader-dash"> | </h3>

               <section>
                   <h3 className="homeHeader-name">Friends</h3>
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
                        <Logout />
               </section>
            </div>
        </div>
    )
}