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
  Left,
  Body,
  Right,
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Grid, Row } from 'react-native-easy-grid';

import AppHeader from '../BasePage/AppHeader';

import styles from './styles';

import ListMedications from './ListMedications';
import EmptyMedications from './EmptyMedications';


const Home = ({
  name,
  list,
}) => (
  <Container style={styles.container}>
    <AppHeader name="Home" />
    <Content>
      {list && list.length > 0
        ? <ListMedications list={list} styles={styles} />
        : <EmptyMedications />
      }
    </Content>
  </Container>
);
Home.propTypes = {
  name: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
};

function bindAction(dispatch) {
  return {};
}

const mapStateToProps = state => ({
  name: state.user.name,
  list: state.list.list,
});

export default connect(mapStateToProps, bindAction)(Home);
