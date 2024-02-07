import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/backButton';
import ScreenWrapper from '../components/screenWrapper';
import EmptyList from '../components/emptyList';
import ExpenseCard from '../components/expenseCard';
import { colors } from '../themes';

const items = [
  {
    id: 1,
    title: 'finished one chap',
    amount: '4',
    category: 'Study',
  },
  {
    id: 2,
    title: 'watched movie',
    amount: '50',
    category: 'Entertainment',
  },
  {
    id: 3,
    title: 'added accounts',
    amount: '100',
    category: 'Accounts',
  },
];

const ExpensesScreen = ({ route }) => {
  const { type } = route.params;
  const navigation = useNavigation();

  return (
    <ScreenWrapper style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 4 }}>
        <View style={{ position: 'relative', marginTop: 5 }}>
          <View style={{ position: 'absolute', top: 0, left: 0 }}>
            <BackButton navigation={navigation} />
          </View>
          <View>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 2 }}>
              {type}
            </Text>
          </View>
        </View>
        {/* <View style={{ marginTop: 3 }}>
          <Text style={{ ...colors.heading, fontWeight: 'bold', fontSize: 20 }}>Expenses</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddExpense')}
            style={{ padding: 2, paddingHorizontal: 3, backgroundColor: '#FFD700', borderRadius: 10, marginTop: 2 }}
          >
            <Text style={{ ...colors.heading }}>Add Expense</Text>
          </TouchableOpacity>
        </View> */}
        <View className="flex-row justify-between items-center mb-4 mt-4 ml-2 mr-2">
            <Text className={`${colors.heading} font-bold text-xl`}>Expenses</Text>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('AddExpense')}
                    className="p-2 px-3 bg-yellow-300 rounded-full mt-2"
                >
                    <Text className={colors.heading}>Add Expense</Text>
                </TouchableOpacity>
        </View>
        <View style={{ height: 430, marginBottom: 2 }}>
          <FlatList
            data={items}
            ListEmptyComponent={<EmptyList message="You haven't recorded any expenses yet!!" />}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 5 }}
            renderItem={({ item }) => <ExpenseCard item={item} />}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ExpensesScreen;
