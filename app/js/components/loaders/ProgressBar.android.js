import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ProgressBarAndroid } from 'react-native';


export default class SpinnerNB extends Component {

  static propTypes = {
    progress: PropTypes.number,
    color: PropTypes.string,
  }

  render() {
    return (
      <ProgressBarAndroid
        {...this.props}
        styleAttr="Horizontal"
        indeterminate={false}
        progress={this.props.progress ? this.props.progress / 100 : 0.5}
        color={this.props.color ? this.props.color : '#FFF'}
      />
    );
  }

}
