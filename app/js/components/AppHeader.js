/* @flow */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Header,
  Title,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import { Actions, ActionConst } from 'react-native-router-flux';
import { openDrawer } from '../../actions/drawer';

const AppHeader = ({
  name,
}) => (
  <Header>
    <Left>
      <Button transparent onPress={() => Actions.login({ type: ActionConst.RESET })}>
        <Icon active name="power" />
      </Button>
    </Left>
    <Body>
      <Title>{name || '?'}</Title>
    </Body>
    <Right>
      <Button transparent onPress={openDrawer}>
        <Icon active name="menu" />
      </Button>
    </Right>
  </Header>
);
AppHeader.propTypes = {
  name: PropTypes.string,
};
export default AppHeader;
