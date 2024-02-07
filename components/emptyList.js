import React from 'react';
import { View, Text, Image } from 'react-native';

const EmptyList = ({message}) => {
  return (
    <View className="flex justify-center items-center my-5 space-y-3">
      <Image 
        style={{ shadowColor: 'rgba(0, 0, 0, 0.1)', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 1, shadowRadius: 3 }}
        className="w-32 h-32"
        source={require('../assets/images/empty.png')}
      />
      <Text style={{ fontWeight: 'bold', color: '#ccc' }}>
        {message|| 'data not found'}
      </Text>
    </View>
  );
}

export default EmptyList;
