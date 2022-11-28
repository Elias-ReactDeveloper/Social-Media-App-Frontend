import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import SessionTitle from './SessionTitle';
import onlineFriendsJson from './assets/onlineFriends.json'

export default function OnlineFriends() {
  return (
    <div>
        <SessionTitle>Online Friends</SessionTitle>
        <AvatarGroup total={24} sx={{justifyContent: "start"}}>
          {
            onlineFriendsJson.map((friend, index) => {
              if(index < 4) return <Avatar alt={friend.name} src={friend.imageUrl} />
            })
          }
        </AvatarGroup>
    </div>
  );
}