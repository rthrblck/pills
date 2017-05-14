import PropTypes from 'prop-types';
/* @flow */
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  Header,
  Card,
  CardItem,
  Text,
  Button,
  Icon,
} from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

const ListMedications = ({ list, styles }) => (
  <Card>
    <CardItem header>Existing Meds</CardItem>
    <CardItem>
      <Grid style={styles.mt}>
        {list.map((item, i) =>
          (<Row key={i}>
            <TouchableOpacity
              style={styles.row}
              onPress={() => this.newPage(i)}
            >
              <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
          </Row>),
        )}
      </Grid>
    </CardItem>
    <CardItem footer>
      <Button onPress={() => Actions.AddMedication()}>
        Add Medication
      </Button>
    </CardItem>
  </Card>
);
ListMedications.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
  styles: PropTypes.object,
};
export default ListMedications;
