import PropTypes from 'prop-types';
/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Segment,
  Text,
  Title,
  View,
} from 'react-native';
import Camera from 'react-native-camera';
import styles from '../BasePage/styles';
import AppHeader from '../BasePage/AppHeader';

import { setIndex } from '../../actions/list';
import { openDrawer } from '../../actions/drawer';

import { searchMed } from '../../actions/search_med';

// experiment with making all of the AddMedicationScan 1 big page
// add sections at the bottom with more and more data
class AddMedicationScan extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <AppHeader
          name="Add Med"
          back={Actions.AddMedication}
          segment={(
            <Segment>
              <Button iconLeft transparent first
                onPress={() => Actions.AddMedicationScan()}>
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
          <Camera
              ref={(cam) => { this.camera = cam; }}
              style={styles.preview}
              aspect={Camera.constants.Aspect.fill}>
              <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
          </Camera>
        </Content>
      </Container>
    );
  }
  takePicture = () => {
    const options = {};
    // options.location = ...
    this.camera.capture({ metadata: options })
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  };
}
AddMedicationScan.propTypes = {
  name: PropTypes.string,
  searchMed: PropTypes.func,
};

function bindAction(dispatch) {
  return {
    searchMed: index => dispatch(searchMed(index)),
  };
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, bindAction)(AddMedicationScan);
