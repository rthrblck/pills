/* @flow */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Form,
  H2,
  Header,
  Icon,
  Input,
  Item,
  Left,
  ListItem,
  Right,
  Segment,
  Text,
  Title,
} from 'native-base';
import styles from '../BasePage/styles';
import AppHeader from '../BasePage/AppHeader';

import { setIndex } from '../../actions/list';
import { searchMed } from '../../actions/search_med';

// experiment with making all of the AddMedicationName 1 big page
// add sections at the bottom with more and more data
const AddMedicationName = ({
  name,
}) => (
  <Container style={styles.container}>
    <AppHeader
      name="Add Med"
      back={Actions.AddMedication}
      segment={(
        <Segment>
          <Button iconLeft transparent first
            onPress={() => Actions.AddMedicationScanner()}>
            <Icon name="barcode" />
            <Text>Scan</Text>
          </Button>
          <Button iconLeft last active>
            <Icon name="search" />
            <Text>Type</Text>
          </Button>
        </Segment>
      )}
    />
    <Content>
      <Card>
        <CardItem header><H2>Enter Medication Name</H2></CardItem>
        <CardItem>
          <Body>
            <Item rounded>
              <Icon name="search" />
              <Input
                placeholder="Search"
                onChangeText={(term) => {
                  console.log('Search', term, searchMed);
                  searchMed(term);
                }}
              />
            </Item>
          </Body>
        </CardItem>
      </Card>
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
