import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../components/screenWrapper'
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';

const SignUpScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleSubmit = () => {
    if(email && password) {
        // good to go
        navigation.navigate('Home');
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
                <TouchableOpacity
                style={{
                    backgroundColor: '#FFD700', 
                    borderRadius: 999, 
                    height: 40,
                    width: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={() => navigation.goBack()}
                >
                <ChevronLeftIcon size={30} color="black" />
                </TouchableOpacity>
            </View>
            <Text className="text-black text-xl font-bold text-center mt-2">Sign Up</Text>
            </View>
            <View>
            <View className="flex-row justify-center my-3 mt-5">
                <Image 
                className="h-72 w-72"
                source={require('../assets/images/signup.png')}
                />
            </View>

            <View className="space-y-2 mx-2">
                <Text className="text-lg font-bold text-black">Enter Email Address:</Text>
                <TextInput 
                    className="p-4 bg-white rounded-full mb-3 mt-2" 
                    value={email} onChangeText={value=> setEmail(value)}
                    placeholder='Email Address'
                />
                <Text className="text-lg font-bold text-black">Enter Password:</Text>
                <TextInput 
                    className="p-4 bg-white rounded-full mb-3 mt-2" 
                    value={password} onChangeText={value=> setPassword(value)}
                    placeholder='Password'
                    secureTextEntry
                />
            </View>

            <View>
                <TouchableOpacity 
                onPress={handleSubmit}
                className="my-6 rounded-full p-3 shadow-sm bg-yellow-300 mt-5"
                >
                <Text className="text-center font-bold text-lg">Sign Up</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  )
}

export default SignUpScreen
