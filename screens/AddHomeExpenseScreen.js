import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../components/screenWrapper'
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';

const AddHomeExpenseScreen = () => {

  const [type, setType] = useState('');

  const navigation = useNavigation();

  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View className="relative mt-5">
          <View className="absolute top-0 left-0">
            <TouchableOpacity
              style={{
                backgroundColor: '#FFD700', 
                borderRadius: 999, 
                height: 40,
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => navigation.navigate('Home')} 
            >
              <ChevronLeftIcon size={30} color="black" />
            </TouchableOpacity>
          </View>
          <Text className="text-black text-xl font-bold text-center mt-2">Add Category</Text>
        </View>
        <View>
          <View className="flex-row justify-center my-3 mt-5">
            <Image 
              className="h-72 w-72"
              source={require('../assets/images/4.png')}
            />
          </View>

          <View className="space-y-2 mx-2">
            <Text className="text-lg font-bold text-black">Enter Expense Category: </Text>
            <TextInput 
              className="p-4 bg-white rounded-full mb-3 mt-2" 
              value={type} onChangeText={value=> setType(value)}
            />
          </View>

          <View>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Home')}
              className="my-6 rounded-full p-3 shadow-sm bg-yellow-300 mt-48"
            >
              <Text className="text-center font-bold text-lg">Add Category</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default AddHomeExpenseScreen
