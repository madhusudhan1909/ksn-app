import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function MainScreen({ navigation }) {
const items = [
  { name: 'Breakfast', image: require('../assets/images/breakfast.jpeg') },
  { name: 'Lunch', image: require('../assets/images/lunch.jpeg') },
  { name: 'Dinner', image: require('../assets/images/dinner.jpeg') },
  { name: 'Sweets & Savories', image: require('../assets/images/sweets.jpeg') }
];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <FontAwesome name="bars" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.notificationButton}>
          <FontAwesome name="bell" size={24} color="black" />
        </TouchableOpacity> 
      </View>

      <Text style={styles.title}>Choose <Text style={styles.greenText}>Your</Text> Order</Text>
      
      {items.map(item => (
        <View style={styles.item} key={item.name}>
          <Image style={styles.image} source={item.image} />
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            
            {item.name === 'Breakfast' &&
              <Text style={styles.itemSubtext}>Get Breakfast</Text>
            }
            {item.name === 'Lunch' &&
              <Text style={styles.itemSubtext}>Get Lunch</Text>
            }
            {item.name === 'Dinner' &&
              <Text style={styles.itemSubtext}>Get Dinner</Text>
            }
            {item.name === 'Sweets & Savories' &&
              <Text style={styles.itemSubtext}>Get Sweets & Savories</Text>
            }
            
            <TouchableOpacity style={styles.getButton}>
              <Text style={styles.buttonText}>Get</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10, 
    marginTop: -100,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
  menuButton: {
    marginTop: 5,
    marginLeft: 10,
  },
  notificationButton: {
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  title: {
    marginLeft: -80,
    marginTop: 20,
    marginBottom: 50,
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },
  greenText: {
    color: 'green',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemTextContainer: {
    marginLeft: -110,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  itemText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  itemSubtext: {
    fontSize:16,
    color: 'gray',
  },
  
  getButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    marginRight:-250,
    marginTop:-40,
  },
  buttonText: {
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
  },
  getText: {
    fontSize: 16,
    color: 'gray',
    marginLeft: 120,
  }
  
});
