import React from 'react';

import UserRow from '../UserRow'

import { Container, Role, User, Avatar } from './styles';

function UserList () {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Leonardo Piusi" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Dumbledore" isBot />
      <UserRow nickname="Júlio César" />
      <UserRow nickname="João Bento" />
      <UserRow nickname="Emilly Alves" />
      <UserRow nickname="Matheus Leuni" />
      <UserRow nickname="Rodrigo Roves" />
      <UserRow nickname="Pedro Wous" />
      <UserRow nickname="Guilherme Loebiviu" />
      <UserRow nickname="Sofia Kouin" />
      <UserRow nickname="Vinicius Zaeis" />
      <UserRow nickname="Thiago Tezun" />
      <UserRow nickname="Gabriel Anfliunr" />
      <UserRow nickname="André Saelo" />
    </Container>
  );
};

export default UserList;