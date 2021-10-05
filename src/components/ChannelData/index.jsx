import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

function ChannelData() {
  const messagesRef = useRef()
  // useEffect(() => {
  //   const div = messagesRef.current;

  //   if (div) {
  //     div.scrollTop = div.scrollHeight;
  //   }
  // }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Júlio César"
            date="21/06/2020"
            content="Hoje é o meu aniversário!"
          />
        ))}

        <ChannelMessage
          author="Leonardo Piusi"
          date="21/06/2020"
          content={
            <>
              <Mention>@Júlio César</Mention>, me carrega no LoL e CS de novo
              por favor?
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversarem #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;