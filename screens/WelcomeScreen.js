import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import ScreenWrapper from '../components/screenWrapper';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {

    const navigation = useNavigation();

  return (
    <ScreenWrapper>
        <View className="h-full flex justify-around">
            <View className="flex justify-center mt-10">
                <Image 
                    source={require('../assets/images/welcome.gif')} 
                    className="h-96 w-96"
                />
            </View>
            <View className="mx-5 mb-20">
                <Text className="text-center font-bold text-4xl mb-10">SpendWise</Text>
                <TouchableOpacity 
                    className="bg-yellow-300 shadow p-3 rounded-full mb-4"
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <Text className="text-center text-black font-bold text-lg">Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    className="bg-yellow-300 shadow p-3 rounded-full"
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text className="text-center text-black font-bold text-lg">Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScreenWrapper>
  );
};

export default WelcomeScreen;
