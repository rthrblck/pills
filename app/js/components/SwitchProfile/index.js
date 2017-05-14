import PropTypes from 'prop-types';
/* @flow */
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
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import styles from './styles';

import { setIndex } from '../../actions/list';
import { openDrawer } from '../../actions/drawer';

// experiment with making all of the SwitchProfile 1 big page
// add sections at the bottom with more and more data
class SwitchProfile extends Component {
  static propTypes = {
    name: PropTypes.string,
    setIndex: PropTypes.func,
    list: PropTypes.arrayOf(PropTypes.string),
    openDrawer: PropTypes.func,
  }
  componentDidUpdate() {
    console.log('SwitchProfile updated', this.props);
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => Actions.login({ type: ActionConst.RESET })}>
              <Icon active name="power" />
            </Button>
          </Left>

          <Body>
            <Title>{(this.props.name) ? this.props.name : 'SwitchProfile'}</Title>
          </Body>

          <Right>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon active name="menu" />
            </Button>
          </Right>
        </Header>
        <Content>
          <Text>yo</Text>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  name: state.user.name,
  list: state.list.list,
});

export default connect(mapStateToProps, bindAction)(SwitchProfile);
