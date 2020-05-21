import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity,Animated, } from 'react-native';


const EmiScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={() => _start()}>
          <Text style={styles.textBtn}>Start</Text>
        </TouchableOpacity>
        <View style={styles.containerrow}>    
        <Animated.View
          style={{
            transform: [
              {
                translateX: slideUpValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-600, 0]
                })
              }
            ],
            flex: 1,
            height: 250,
            width: 200,
            borderRadius: 12,
            margin:10,
            backgroundColor: "#c00",
            justifyContent: "center"
          }}
         
        >
          <Text style={styles.text} onPress = {() => navigation.navigate('HouseLoan')} >House Loan </Text>
        </Animated.View>
        <Animated.View
          style={{
            transform: [
              {
                translateY: SlideInLeft.interpolate({
                  inputRange: [0, 1],
                  outputRange: [600, 0]
                })
              }
            ],
            flex: 1,
            height: 250,
            width: 200,
            borderRadius: 12,
            margin:10,
            backgroundColor: "#347a2a",
            justifyContent: "center"
          }}
        >
          <Text style={styles.text} onPress = {() => navigation.navigate('HouseLoan')}>Car Loan </Text>

          
        </Animated.View>
        </View>
        <View style={styles.containerrow}>
        <Animated.View
          style={{
            opacity: fadeValue,
            transform: [
              {
                translateY: SlideInLeft.interpolate({
                  inputRange: [0, 1],
                  outputRange: [600, 0]
                })
              }
            ],
            flex: 1,
            height: 250,
            width:200,
            margin:10,
            borderRadius: 12,
            backgroundColor: "#f4f",
            justifyContent: "center"
          }}
        >
          <Text style={styles.text} onPress = {() => navigation.navigate('HouseLoan')}>Personal Loan </Text>
        </Animated.View>

        <Animated.View
          style={{
            opacity: fadeValue,
            transform: [
              {
                translateY: SlidefromBottom.interpolate({
                  inputRange: [0, 1],
                  outputRange: [600, 0]
                })
              }
            ],
            flex: 1,
            height: 250,
            width: 200,
            borderRadius: 12,
            backgroundColor: "#66cdaa",
            margin:10,
            justifyContent: "center"
          }}
        >
          <Text style={styles.text} onPress = {() => navigation.navigate('HouseLoan')}>Other Loan </Text>
        </Animated.View>


        </View>
      </View>
    );
  };

  const state = {
    ready: false,
    SlidefromBottom: new Animated.Value(0),
    SlideInLeft: new Animated.Value(0),
    slideUpValue: new Animated.Value(0),
    fadeValue: new Animated.Value(0)
  };

  const _start = () => {
    return Animated.parallel([
      Animated.timing(state.SlideInLeft, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }),
      Animated.timing(state.fadeValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }),
      Animated.timing(state.slideUpValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }),
      Animated.timing(state.SlidefromBottom,{
        toValue: 1,
        duration: 500,
        useNativeDriver : true
      })
    ]).start();
  };
  
  let { slideUpValue, fadeValue, SlideInLeft } = state;

  const styles = StyleSheet.create({
    text: {
      fontSize: 30
    },
    container: {
        flex: 2,
        backgroundColor: "#FFF",
        alignItems: "center",
      },
      containerrow: {
        flex: 2,
        backgroundColor: "#FFF",
        alignItems: "center",
        flexDirection: "row"
      },

      item: {},
      btn: {
        backgroundColor: "#480032",
        width: 100,
        height: 40,
        padding: 3,
        justifyContent: "center",
        borderRadius: 6,
        marginTop: 29
      },
      text: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center"
      },
      item1: {
        backgroundColor: "red",
        padding: 20,
        width: 100,
        margin: 10
      },
    
      textBtn: {
        color: "#f4f4f4",
        fontWeight: "bold",
        textAlign: "center"
      }


  });
  
  export default EmiScreen;