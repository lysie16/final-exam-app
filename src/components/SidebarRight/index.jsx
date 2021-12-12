import './styles.css';
import React from 'react';

export const SidebarRight = () => {
    return (
        <div className="sidebar-right">
        <div className="sidebar-right-language">
            <p className="sidebar-right-selected">English (UK) </p>
            <p>English (US)</p>
            <p></p>
            <p></p>
            <p></p>
        </div>
        <div className="sidebar-right-policies">
            <p>Privacy</p>
            <p>Terms</p>
            <p>Advertising</p>
            <p>AdChoices</p>
            <p>Cookies</p>
            <p>More</p>
        </div>
        <p className="copyright">SocialHub © 2021</p>
    </div>
    )
}