import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';

const BackButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#FFD700', // yellow color
        borderRadius: 999, // to make it circular, adjust as needed
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1, // Add zIndex to ensure it's above other elements
      }}
      onPress={() => navigation.goBack()}
    >
      <ChevronLeftIcon size={30} color="black" />
    </TouchableOpacity>
  );
}

export default BackButton;
