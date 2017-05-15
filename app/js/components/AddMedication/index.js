/* @flow */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import {
  Container,
  H2,
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
      <Card>
        <CardItem header><H2>Tell us what Medication</H2></CardItem>
        <CardItem>
          <Body>
            <Button iconLeft block full onPress={() => Actions.AddMedicationScan()}>
              <Icon name="barcode" />
              <Text>Scan a Barcode</Text>
            </Button>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Button iconLeft block full onPress={() => Actions.AddMedicationName()}>
              <Icon name="search" />
              <Text>Search by Name</Text>
            </Button>
          </Body>
        </CardItem>
      </Card>
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
