import React from 'react';

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

function ChannelButton(props) {
  return (
    <Container className={props.selected ? 'active' : ''}>
      <div>
        <HashtagIcon />
        <span>{props.channelName}</span>
      </div>

      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
};

export default ChannelButton;