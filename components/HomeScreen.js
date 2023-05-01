import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image,FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import PhoneInput from 'react-native-phone-number-input';


export default function HomeScreen({ navigation }){

  
  const [phoneNumber, setPhoneNumber] = useState('');
  const data = [
    { image: require('../assets/images/hyd.jpg'), text: 'HYDERABAD' },
    { image: require('../assets/images/bang.jpg'), text: 'BANGLORE' },
    { image: require('../assets/images/Chennai.jpg'), text: 'CHENNAI' },
  ];
  

  return (
    <View style={styles.container}>
    <Image source={require('../assets/images/ksn.png')} style={styles.image} />
      <Text style={styles.title}>KSN Sweets & Savories</Text>
      <Text>Choose your city</Text>
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.imageText}>{item.text}</Text>
            </View>
          )}
        />
      </View>
      
      <View style={styles.container}>
      <Text>We will send a one time SMS message</Text>
        <Text>Carrier rates may apply.</Text>
      </View>
      <View style={styles.phoneInputContainer}>
        <PhoneInput
          defaultValue={phoneNumber}
          defaultCode="IN"
          withShadow
          onChangeFormattedText={(text) => {
            setPhoneNumber(text);
          }}
        />
      </View>
      <TouchableOpacity
      style={styles.phoneButton}
        onPress={() => {
          if (phoneNumber) {
            navigation.navigate('Otp');
          } else {
            Alert.alert('Please enter a valid phone number.');
          }
        }}
      >
        <Text>Next</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
        } 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 26,
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 20,
    textAlign: 'center',
  },
  phoneInputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -30,
    marginBottom: 20,
  },
  phoneButton: {
    marginTop: 20,
    marginBottom: 100,
    backgroundColor: 'lightgreen',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    padding:10

  },
  flatListContainer: {
    paddingHorizontal: 20, // add horizontal padding to the FlatList
  },
  imageContainer: {
    marginHorizontal: 10, // add margin between images
  },
  image: {
    width: 100,
    height: 100,
    padding: 10,
  },
});
