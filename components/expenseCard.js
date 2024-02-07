import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const ExpenseCard = ({ item }) => {
  return (
    <View style={styles.cardContainer}>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{item.category}</Text>
      </View>
      <View>
        <Text style={styles.amount}>{item.amount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fc8181',
    borderRadius: 20,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
  },
  category: {
    color: 'black',
    fontSize: 12,
  },
  amount: {
    // add any specific styles for the amount text here
  },
});

export default ExpenseCard;
