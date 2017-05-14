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
      <Header>Would you like to track a Medication?</Header>
    </CardItem>
    <CardItem footer>
      <Button onPress={() => Actions.AddMedication() }>
        <Icon name="fa fa-check" />
        <Text>Yes, Add Medication</Text>
      </Button>
    </CardItem>
  </Card>
);
EmptyMedications.propTypes = {
  list: React.PropTypes.arrayOf(React.PropTypes.string),
};
export default EmptyMedications;
