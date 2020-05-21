import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const ComponetsScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Components there!</Text>
     
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ComponetsScreen;