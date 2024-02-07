import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../components/screenWrapper'
import BackButton from '../components/backButton'
import { useNavigation } from '@react-navigation/native';
import { categories } from '../constants/index';

const AddExpenseScreen = () => {

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const navigation = useNavigation();

  const handleAddExpense = () => {
    if (title && amount && category) {
      // good to go
      navigation.goBack();
    } else {
      // show error
    }
  }
  
  return (
    <ScreenWrapper>
      <ScrollView>
        <View className="flex justify-between h-full mx-4">
          <View className="relative mt-5">
            <View className="absolute top-0 left-0">
              <BackButton/>
            </View>
            <Text className="text-black text-xl font-bold text-center mt-2">Add Expense</Text>
          </View>
          <View>
            <View className="flex-row justify-center my-3 mt-5">
              <Image 
                className="h-72 w-72"
                source={require('../assets/images/expenseBanner.png')}
              />
            </View>

            <View className="space-y-2 mx-2">
              <Text className="text-lg font-bold text-black">Enter Title: </Text>
              <TextInput 
                className="p-4 bg-white rounded-full mb-3 mt-2" 
                value={title} onChangeText={value=> setTitle(value)}
                placeholder='Title'
              />

              <Text className="text-lg font-bold text-black">Enter Amount: </Text>
              <TextInput 
                className="p-4 bg-white rounded-full mb-3 mt-2" 
                value={amount} onChangeText={value=> setAmount(value)}
                placeholder='Amount'
                keyboardType='numeric'
              />
            </View>

            <View className="mx-2 space-x-2">
              <Text className="text-lg font-bold">Category</Text>
              <View className="flex-row flex-wrap items-center">
                {
                  categories.map(cat => {

                    let bgColor = 'bg-white';
                    if(cat.value === category) bgColor = 'bg-green-300'

                    return (
                      <TouchableOpacity
                        key = {cat.value}
                        className={`rounded-full ${bgColor} px-4 p-3 mb-2 mr-2`}
                        onPress={() => setCategory(cat.value)}
                      >
                        <Text>{cat.title}</Text>
                      </TouchableOpacity>
                    )
                  })
                }
              </View>
            </View>

            <View>
              <TouchableOpacity 
                onPress={handleAddExpense}
                className="my-6 rounded-full p-3 shadow-sm bg-yellow-300 mt-4"
              >
                <Text className="text-center font-bold text-lg">Add Expense</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  )
}

export default AddExpenseScreen
