import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/screenWrapper'
import { colors } from '../themes'
import randomImage from '../assets/images/randomImage'
import EmptyList from '../components/emptyList'
import { useNavigation } from '@react-navigation/native'

const items = [
    {
        id: 1,
        type: 'Study',
    },
    {
        id: 2,
        type: 'Entertainment',
    },
    {
        id: 3,
        type: 'Accounts',
    },
    {
        id: 4,
        type: 'Trip',
    }
]

const HomeScreen = () => {

    const navigation = useNavigation();

  return (
    <ScreenWrapper className="flex-1">
        <View className="flex-row justify-between items-center p-4">
            <Text className={`${colors.heading} font-bold text-3xl shadow-sm`}>SpendWise</Text>
            <TouchableOpacity className="p-2 px-3 bg-yellow-300 rounded-full">
                <Text className={colors.heading}>Logout</Text>
            </TouchableOpacity>
        </View>
        <View className="grid grid-cols-2 bg-white rounded-xl mx-4 p-4 items-center shadow-lg">
            <Text className="text-center">SpendWise</Text>
            <Image
                source={require('../assets/images/Screenshot 2024-01-30 234217.png')}
                className="w-48 h-40 object-contain rounded-xl"
            />
        </View>

        <View className="px-4 space-y-3">
            <View className="flex-row justify-between items-center">
                <Text className={`${colors.heading} font-bold text-xl`}>Recent Category</Text>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('AddHomeExpenseScreen')}
                    className="p-2 px-3 bg-yellow-300 rounded-full mt-2"
                >
                    <Text className={colors.heading}>Add Category</Text>
                </TouchableOpacity>
            </View>
            <View style={{height: 430}} className="mb-2">
                <FlatList
                    data={items}
                    numColumns={2}
                    ListEmptyComponent={
                        <EmptyList
                            message={"You haven't recorded any expenses yet!!"}
                        />
                    }
                    keyExtractor={item => item.id.toString()} // Ensure id is converted to a string
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 5 }}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                style={{
                                    marginRight: 10,
                                    width: '48%',
                                }}
                                className="bg-white p-3 rounded-2xl mb-3 shadow-sm"
                                onPress={() => navigation.navigate('ExpensesScreen', item)}
                            >
                                <View>
                                    <Image
                                        source={randomImage()}
                                        className="w-32 h-32 mb-2"
                                    />
                                    <Text className={`${colors.heading} font-bold`}>{item.type}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
        </View>
    </ScreenWrapper>
  )
}

export default HomeScreen