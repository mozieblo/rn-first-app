import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from "./components/GoalInput";

export default function App() {
  const startText = 'Ups';
  const changedText = 'HAHAHAHA';
  const [renderText, setText] = useState(startText);
  const [courseGoals, setCourseGoals] = useState([]);

  const changeText = () => {
      renderText === startText ? setText(changedText) : setText(startText);
  }

  const addGoalHandler = (enteredGoalText) => {
      setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: enteredGoalText}]);
  };

  const removeGoalHandler = (goalId) => {
      return setCourseGoals(courseGoals.filter(goal => goal.key !== goalId))
  };

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <GoalInput
            addGoalHandler={addGoalHandler}
        />
        <FlatList
            keyExtractor={(item, index) => item.key}
            data={courseGoals}
            renderItem={itemData => <GoalItem id={itemData.item.key} onDelete={removeGoalHandler} value={itemData.item.value} />}
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
  goalList: {
      flexDirection: 'column'
  }
});
