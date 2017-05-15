/* @flow */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import {
  Header,
  Title,
  Text,
  Button,
  Left,
  Body,
  Right,
  Icon,
} from 'native-base';
import { openDrawer } from '../../actions/drawer';

const AppHeader = ({
  back,
  segment,
  name,
  profile,
}) => (
  <Header hasSegment={!!segment}>
    <Left>
      {back && (
        <Button transparent onPress={back}>
          <Icon name="arrow-back" />
        </Button>
      )}
      {!back && profile && profile.name && (
        <Button transparent onPress={() => Actions.Login({ type: ActionConst.RESET })}>
          <Icon name="person" />
          <Text>{profile.name}</Text>
        </Button>
      )}
      {!back && !(profile && profile.name) && (
        <Button transparent onPress={() => Actions.Login({ type: ActionConst.RESET })}>
          <Icon
            android="android-person-outline"
            ios="ios-person-outline"
          />
        </Button>
      )}
    </Left>
    <Body>
      {segment || (<Title>{name || '?'}</Title>)}
    </Body>
    <Right>
      <Button transparent onPress={openDrawer}>
        <Icon active name="menu" />
      </Button>
    </Right>
  </Header>
);
AppHeader.propTypes = {
  back: PropTypes.func,   // optionally send back func
  name: PropTypes.string, // optionally send name of page
  segment: PropTypes.any, // react component (segment)
  profile: PropTypes.object,
};

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, bindAction)(AppHeader);
