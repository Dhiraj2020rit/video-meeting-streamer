import React from "react";
import {useParams} from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
const RoomPage = () =>{
    const {roomId} = useParams();

    const myMeeting = async (ele) =>{
        const appId=327951131;
        const serverSecret = "1947ca4cfc0c0b013a498d7dc0a340f2";
        const userName="Dhiraj";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, roomId, Date.now().toString(), userName);
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: ele,
            scenario:{
                mode: ZegoUIKitPrebuilt.VideoConference,
            },
        });
    };

    return(
        <div className="room-page">
            <div ref={myMeeting}/>
        </div>
    )
}
export default RoomPage;