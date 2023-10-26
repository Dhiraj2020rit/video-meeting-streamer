import React from "react";
import {useParams} from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
const RoomPage = () =>{
    const {roomId} = useParams();

    const myMeeting = async (ele) =>{
        const appId=123456789;
        const serverSecret = "___your_server_secret___";
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
