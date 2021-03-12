import React, { useEffect, useState } from 'react'
import "./Sidebar.css"
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import DonutLargeRoundedIcon from '@material-ui/icons/DonutLargeRounded';
import SidebarChat from './SidebarChat';
import db from"./firebase.js";
function Sidebar() {
    const [rooms, setRooms] = useState([]);

    /*useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot 
            => {
                setRooms(snapshot.docs.map( doc =>
                    {
                        id:doc.id,
                        data: doc.data();
                    }))
            })
       
    }, [])*/
    useEffect(() => {
        const unsubscribe =
        db.collection('rooms').onSnapshot(snapshot =>(
            setRooms(snapshot.docs.map(doc =>(
                {
                    id:doc.id,
                    data: doc.data()
                }
            )))
        ))
        return () =>{
            unsubscribe();
        }
       
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src="data:image/jpeg;base64,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"></Avatar>
            
            <div className="sidebar_headerRight">
                <IconButton>
                <DonutLargeRoundedIcon/>
                </IconButton>
                <IconButton>
                <ChatRoundedIcon/>
                </IconButton>
                <IconButton>
                <MoreVertIcon/>
                </IconButton>
            </div>

            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchIcon/>
                    <input placeholder="Search Rooms" type="text"/>
                </div>
            </div>
            <div className="sidebar_chats">
                <SidebarChat addNewChat/>
                {rooms.map(room =>(
                    <SidebarChat key={rooms.id} id={room.id} name={room.data.name}/>
                ))}


            </div>

            
        </div>
    )
}

export default Sidebar
