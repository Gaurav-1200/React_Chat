import React, { useEffect, useState } from "react";
import "./Chat.css";
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicNoneIcon from '@material-ui/icons/MicNone';
import  {useParams} from "react-router-dom";
import db from "./firebase";
function Chat() {

    const [input, setInput] = useState("");
    const [seed, setSeed] = useState('');
    const {roomId} =useParams();
    const [roomName,setRoomName] =useState("");

    useEffect(() => {
        if(roomId)
        {
            db.collection("rooms")
            .doc(roomId)
            .onSnapshot((snapshot) =>
                setRoomName(snapshot.data().name)
            );
        }
    }, [roomId]);

    useEffect(() => {
    setSeed(Math.floor(Math.random *5000));
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(input);

        setInput("");

    } 
    return (
        <div className="chat">
            <div className="chat_header">
            <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/>
            <div className="chat_headerInfo">
                <h3> {roomName}</h3>
                <p> Last seen at ....</p>
            </div>
            <div className="chat_headerRight">
                <IconButton>
                <SearchIcon/>
                </IconButton>
                <IconButton>
                <MoreVertIcon/>
                </IconButton>
            </div>
        </div>
        <div className="chat_body">
        <p className={`chat_message ${true && "chat_reciever"}`}>
            <span className="chat_name">Sonny Sanhga</span>
            heythere
            <span className="chat_timestamp">23:58pm</span>
            </p>
        </div>
        <div className="chat_footer">
            <InsertEmoticonIcon/>
            <form>
                <input  value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Type a message..."/>
                <button onClick={sendMessage}>Send a message</button>
            </form>
            <MicNoneIcon/>

        </div>
        </div>
    )
}

export default Chat
