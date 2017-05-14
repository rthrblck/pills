
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Content, Text, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { closeDrawer } from '../../actions/drawer';
import { setIndex } from '../../actions/list';

import styles from './style';

class SideBar extends Component {

  static propTypes = {
    // setIndex: React.PropTypes.func,
    closeDrawer: React.PropTypes.func,
    navigateTo: React.PropTypes.func,
  }

  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }

  render() {
    return (
      <Content style={styles.sidebar} >
        <ListItem button onPress={() => {
          Actions.Home();
          this.props.closeDrawer();
        }}>
          <Text>Home</Text>
        </ListItem>
        <ListItem button onPress={() => {
          Actions.SwitchProfile();
          this.props.closeDrawer();
        }}>
          <Text>Switch Profiles</Text>
        </ListItem>
        <ListItem button onPress={() => {
          Actions.AddProfile();
          this.props.closeDrawer();
        }}>
          <Text>Add Profile</Text>
        </ListItem>
        <ListItem button onPress={() => {
          Actions.AddMedication();
          this.props.closeDrawer();
        }}>
          <Text>Add Medication</Text>
        </ListItem>
      </Content>
    );
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
    setIndex: index => dispatch(setIndex(index)),
  };
}

export default connect(null, bindAction)(SideBar);
