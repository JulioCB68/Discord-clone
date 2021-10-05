import React from 'react';

import { User, Avatar } from './styles';

function UserRow ({ nickname, isBot }) {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};


export default UserRow;