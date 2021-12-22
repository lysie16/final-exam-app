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
            <div className="homeHeader-icons">
                <section>
                <Link to="/me">
                    <Avatar className="homeHeader-avatar" alt=""  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Ffemale-user-avatar-woman-profile-2022387%2F&psig=AOvVaw0w9Sqgb_g36crQac_KHSGb&ust=1640213101673000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIiI5I_89fQCFQAAAAAdAAAAABAD"/>
                    <h3 className="homeHeader-name">{user}</h3>
                </Link>
                </section>
                <h3 className="homeHeader-dash"> | </h3>
               <section>
                <Link to="/">
                   <h3 className="homeHeader-name">Home</h3>
                </Link>
               </section>

               <h3 className="homeHeader-dash"> | </h3>

               <section>
                   <h3 className="homeHeader-name">Friends</h3>
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

               <h3 className="homeHeader-dash"> | </h3>

            {/*Create a New Post*/}
               <section>
                    <Link to="/NewPost">
                    <h3 className="homeHeader-name">Add New Post</h3>
                    </Link>
               </section>
            </div>
        </div>
    )
}