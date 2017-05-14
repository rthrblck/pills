import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  Header,
  Card,
  CardItem,
  Text,
  Button,
  Icon,
} from 'native-base';

const EmptyMedications = ({ list }) => (
  <Card>
    <CardItem header><Text>Enter some Meds</Text></CardItem>
    <CardItem>
      <Header><Text>Would you like to track a Medication?</Text></Header>
    </CardItem>
    <CardItem footer>
      <Button onPress={() => Actions.AddMedication()}>
        <Icon name="add" />
        <Text>Yes, Add Medication</Text>
      </Button>
    </CardItem>
  </Card>
);
EmptyMedications.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
};
export default EmptyMedications;
