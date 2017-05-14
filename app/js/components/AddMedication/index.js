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
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import AppHeader from '../BasePage/AppHeader';

import styles from '../BasePage/styles';
import { setMed } from '../../actions/med';

// experiment with making all of the AddMedication 1 big page
// add sections at the bottom with more and more data
const AddMedication = ({
  name = 'Add Meditcation',
}) => (
  <Container style={styles.container}>
    <AppHeader
      name="Add Meditcation"
      back={Actions.Home}
    />
    <Content>
      <Header><Text>Tell us what Medication</Text></Header>
      <ListItem avatar onPress={() => {
        setMed({});
        Actions.AddMedicationScanner();
      }}>
        <Left>
          <Icon name="barcode" />
        </Left>
        <Body>
          <Text>Scan a Barcode</Text>
        </Body>
      </ListItem>
      <ListItem avatar onPress={() => {
        setMed({});
        Actions.AddMedicationName();
      }}>
        <Left>
          <Icon name="search" />
        </Left>
        <Body>
          <Text>Search by Name</Text>
        </Body>
      </ListItem>
    </Content>
  </Container>
);
AddMedication.propTypes = {
  name: PropTypes.string,
  setMed: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.string),
};

function bindAction(dispatch) {
  return {
    setMed: med => dispatch(setMed(med)),
  };
}

const mapStateToProps = state => ({
  user: state.user,
  med: state.med,
});

export default connect(mapStateToProps, bindAction)(AddMedication);
