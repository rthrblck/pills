import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right } from 'native-base';
import styles from './styles';

import { setIndex } from '../../actions/list';
import { openDrawer } from '../../actions/drawer';

// experiment with making all of the intake 1 big page
// add sections at the bottom with more and more data
class Intake extends Component {
  static propTypes = {
    name: React.PropTypes.string,
    setIndex: React.PropTypes.func,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
  }
  componentDidUpdate() {
    console.log('intake updated', this.props);
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
            <Title>{(this.props.name) ? this.props.name : 'Intake'}</Title>
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

export default connect(mapStateToProps, bindAction)(Intake);
