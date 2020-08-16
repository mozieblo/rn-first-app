import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const startText = 'Ups';
  const changedText = 'HAHAHAHA';
  const [renderText, setText] = useState(startText);
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const changeText = () => {
      renderText === startText ? setText(changedText) : setText(startText);
  }

  const handleChangedText = (enteredText) => {
      setEnteredGoal(enteredText)
  };

  const addGoalHandler = () => {
      setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: enteredGoal}]);
      setEnteredGoal('');
  };

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Course Goal"
                style={styles.inputText}
                onChangeText={handleChangedText}
                value={enteredGoal}
            />
            <Button
                title="Add"
                onPress={addGoalHandler}
            />
        </View>
        <FlatList
            keyExtractor={(item, index) => item.key}
            data={courseGoals}
            renderItem={itemData => (
                <View style={styles.listItems}>
                    <Text>{itemData.item.value}</Text>
                </View>
            )}
        />
        {/*<ScrollView style={styles.goalList}>*/}
        {/*    {courseGoals.map(goal => <View style={styles.listItems} key={Math.random()}><Text>{goal}</Text></View>)}*/}
        {/*</ScrollView>*/}
        <View>
            <Text>{renderText}</Text>
            <Button
                title="Press"
                onPress={changeText}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 50
  },
  inputContainer: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
  },
  inputText: {
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      marginBottom: 10,
      width: 200
  },
  goalList: {
      flexDirection: 'column'
  },
  listItems: {
    fontWeight: 'bold',
    marginVertical: 10,
    padding: 10,
    borderColor: 'black',
    backgroundColor: 'grey'
  }
});
