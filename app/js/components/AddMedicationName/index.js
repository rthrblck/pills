/* @flow */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import {
  Container,
  Header,
  Title,
  Content,
  Item,
  Input,
  Text,
  Button,
  Card,
  CardItem,
  ListItem,
  Left,
  Body,
  Right,
  Icon,
} from 'native-base';
import styles from '../BasePage/styles';
import AppHeader from '../BasePage/AppHeader';

import { setIndex } from '../../actions/list';

// experiment with making all of the AddMedicationName 1 big page
// add sections at the bottom with more and more data
const AddMedicationName = ({
  name,
}) => (
  <Container style={styles.container}>
    <AppHeader
      name="Add Med. by Name"
      back={Actions.AddMedication}
    />
    <Content>
      <Header searchBar rounded>
        <Item>
          <Icon name="search" />
          <Input placeholder="Search" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
    </Content>
  </Container>
);
AddMedicationName.propTypes = {
  name: PropTypes.string,
  setIndex: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.string),
};

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
  };
}

const mapStateToProps = state => ({
  name: state.user.name,
  list: state.list.list,
});

export default connect(mapStateToProps, bindAction)(AddMedicationName);
