import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity,TextInput } from 'react-native';

const HouseLoanScreen = () => {
    return (
<View>
<View style={{padding: 10}}>  
                <Text>Enter Prinicipal Amount</Text>
                <TextInput  
                    style={{height: 40,backgroundColor: 'azure', fontSize: 20}}  
                    placeholder="Enter amount!"      />  
                    <Text>Enter Rate of interest</Text>
                <TextInput  
                    style={{height: 40,backgroundColor: 'azure', fontSize: 20}}  
                    placeholder="Rate of Interest!"      /> 
                     <Text>Enter Tenure</Text>
                <TextInput  
                    style={{height: 40,backgroundColor: 'azure', fontSize: 20}}  
                    placeholder="In Year or month"      /> 
               <Button title = "Calculate" ></Button>

            </View>  
  </View>

    );
};

const styles = StyleSheet.create({
    text: {
      fontSize: 30
    }
  });
  
  export default HouseLoanScreen;