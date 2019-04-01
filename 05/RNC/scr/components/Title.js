import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';

export const Title = ({ children, style, ...rest }) => (
  <Text style={[styles.title, style]} {...rest}>
    {children}
  </Text>
);

Title.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'HelveticaNeue-CondensedBold',
    fontSize: 18
  }
});