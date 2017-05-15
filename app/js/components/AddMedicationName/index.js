/* @flow */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import {
  Badge,
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
  List,
  ListItem,
  Right,
  Segment,
  Spinner,
  Text,
  Title,
} from 'native-base';
import styles from '../BasePage/styles';
import AppHeader from '../BasePage/AppHeader';

import { searchMed } from '../../actions/search_med';

// experiment with making all of the AddMedicationName 1 big page
// add sections at the bottom with more and more data
const AddMedicationName = ({
  name,
  med_options,
  dataFetched,
  isFetching,
  error,
  ...props
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
                onChangeText={(term) => { props.searchMed(term); }}
              />
            </Item>
          </Body>
        </CardItem>
        <CardItem>
          {isFetching && (<Spinner />)}
          {!isFetching && error && (<Text>Error Fetching Medication</Text>)}
          {!isFetching && med_options && med_options.length > 0 && (
            <List dataArray={med_options} renderRow={(item) =>
              <ListItem>
                <Text>{item.name}</Text>
                <Right>
                  <Badge><Text>{item.type}</Text></Badge>
                </Right>
              </ListItem>
            }></List>
          )}
        </CardItem>
      </Card>
    </Content>
  </Container>
);
AddMedicationName.propTypes = {
  name: PropTypes.string,
  searchMed: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.string),
  med_options: PropTypes.arrayOf(PropTypes.object),
  // term: string,
  dataFetched: PropTypes.bool,
  isFetching: PropTypes.bool,
  error: PropTypes.bool,
};

function bindAction(dispatch) {
  return {
    searchMed: index => dispatch(searchMed(index)),
  };
}

const mapStateToProps = state => ({
  med_options: state.search_med.med_options,
  term: state.search_med.term,
  dataFetched: state.search_med.dataFetched,
  isFetching: state.search_med.isFetching,
  error: state.search_med.error,
});

export default connect(mapStateToProps, bindAction)(AddMedicationName);
