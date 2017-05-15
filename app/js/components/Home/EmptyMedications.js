import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  Body,
  Button,
  Card,
  CardItem,
  H2,
  Icon,
  Text,
  Right,
} from 'native-base';

const EmptyMedications = ({ list }) => (
  <Card>
    <CardItem header><H2>Enter some Meds</H2></CardItem>
    <CardItem>
      <Text>Would you like to track a Medication?</Text>
    </CardItem>
    <CardItem>
      <Body>
        <Button iconRight block full onPress={() => Actions.AddMedication()}>
          <Text>Yes, Add Medication</Text>
          <Icon name="arrow-forward" />
        </Button>
      </Body>
    </CardItem>
  </Card>
);
EmptyMedications.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
};
export default EmptyMedications;
