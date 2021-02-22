import React from 'react'
import "./SidebarChat.css"
import Avatar from '@material-ui/core/Avatar';


function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarChat_info">
                <h2>Room</h2>
                <p>Last Message</p>
            </div>
            
            
        </div>
    )
}

export default SidebarChat
